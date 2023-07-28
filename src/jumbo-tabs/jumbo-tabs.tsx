import React, { FC, ReactElement, ReactNode, useRef, ComponentProps } from 'react'
import { animated } from '@react-spring/web'
import classNames from 'classnames'
import ScrollMask from '../scroll-mask'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { useTabListScroll } from '../utils/use-tab-list-scroll'
import { usePropsValue } from '../utils/use-props-value'
import { useResizeEffect } from '../utils/use-resize-effect'
import { traverseReactNode } from '../utils/traverse-react-node'
import { ShouldRender } from '../utils/should-render'

const classPrefix = `uabm-jumbo-tabs`

export type JumboTabProps = {
  title: ReactNode
  description: ReactNode
  disabled?: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
  children?: React.ReactNode
} & NativeProps

export const JumboTab: FC<JumboTabProps> = () => null

export type JumboTabsProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (key: string) => void
  children?: React.ReactNode
} & NativeProps

export const JumboTabs: FC<JumboTabsProps> = props => {
  const rootRef = useRef<HTMLDivElement>(null)
  const tabListContainerRef = useRef<HTMLDivElement>(null)
  const keyToIndexRecord: Record<string, number> = {}
  let firstActiveKey: string | null = null

  const panes: ReactElement<ComponentProps<typeof JumboTab>>[] = []

  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) {
      return
    }
    const key = child.key
    if (typeof key !== 'string') {
      return
    }
    if (index === 0) {
      firstActiveKey = key
    }
    const length = panes.push(child)
    keyToIndexRecord[key] = length - 1
  })

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: v => {
      if (v === null) {
        return
      }
      props.onChange?.(v)
    },
  })

  // 触发 animate 时对应滚动条位置 scrollLeft 会跟着改变
  const { scrollLeft, animate } = useTabListScroll(
    tabListContainerRef,
    keyToIndexRecord[activeKey as string]
  )

  useResizeEffect(() => {
    animate(true)
  }, rootRef)

  return withNativeProps(
    props,
    <div className={classPrefix} ref={rootRef}>
      <div className={`${classPrefix}-header`}>
        <ScrollMask scrollTrackRef={tabListContainerRef} />
        <animated.div
          className={`${classPrefix}-tab-list`}
          ref={tabListContainerRef}
          scrollLeft={scrollLeft}
        >
          {panes.map(pane =>
            withNativeProps(
              pane.props,
              <div key={pane.key} className={`${classPrefix}-tab-wrapper`}>
                <div
                  onClick={() => {
                    const { key } = pane
                    if (pane.props.disabled) {
                      return
                    }
                    if (key === undefined || key === null) {
                      return
                    }
                    setActiveKey(key.toString())
                  }}
                  className={classNames(`${classPrefix}-tab`, {
                    [`${classPrefix}-tab-active`]: pane.key === activeKey,
                    [`${classPrefix}-tab-disabled`]: pane.props.disabled,
                  })}
                >
                  <div className={`${classPrefix}-tab-title`}>{pane.props.title}</div>
                  <div className={`${classPrefix}-tab-description`}>{pane.props.description}</div>
                </div>
              </div>
            )
          )}
        </animated.div>
      </div>
      {panes.map(pane => {
        if (pane.props.children === undefined) {
          return null
        }
        const active = pane.key === activeKey
        return (
          <ShouldRender
            key={pane.key}
            active={active}
            forceRender={pane.props.forceRender}
            destroyOnClose={pane.props.destroyOnClose}
          >
            <div
              className={`${classPrefix}-content`}
              style={{ display: active ? 'block' : 'none' }}
            >
              {pane.props.children}
            </div>
          </ShouldRender>
        )
      })}
    </div>
  )
}
