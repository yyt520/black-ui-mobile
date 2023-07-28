import './demo1.less'

import React, { FC, useState } from 'react'
import { Button, Mask, Space } from 'uab-ui-mobile'
import { DemoBlock } from 'uab-ui-mobile-demos'

// 基础用法
const Simple: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>显示背景蒙层</Button>
      <Mask visible={visible} onMaskClick={() => setVisible(false)} />
    </>
  )
}

// 背景蒙层的颜色深度 - 深一些
const Thick: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask visible={visible} onMaskClick={() => setVisible(false)} opacity='thick' />
      <Button onClick={() => setVisible(true)}>显示深一些的背景蒙层</Button>
    </>
  )
}

// 背景蒙层的颜色深度 - 浅一些
const Thin: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask visible={visible} onMaskClick={() => setVisible(false)} opacity='thin' />
      <Button onClick={() => setVisible(true)}>显示浅一些的背景蒙层</Button>
    </>
  )
}

// // 背景蒙层的颜色深度 - 自定义
const CustomOpacity: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask visible={visible} onMaskClick={() => setVisible(false)} opacity={1} />
      <Button onClick={() => setVisible(true)}>显示自定义透明度的背景蒙层</Button>
    </>
  )
}

// 背景蒙层的颜色 - 自定义
const CustomColor: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask
        visible={visible}
        onMaskClick={() => setVisible(false)}
        color='rgba(219, 10, 10, 0.5)'
      />
      <Button onClick={() => setVisible(true)}>显示自定义颜色的背景蒙层</Button>
    </>
  )
}

// 白色的背景蒙层
const White: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>显示白色的背景蒙层</Button>
      <Mask color='white' visible={visible} onMaskClick={() => setVisible(false)} />
    </>
  )
}

// 自定义内容
const WithContent: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask visible={visible} onMaskClick={() => setVisible(false)}>
        <div className={'overlayContent'}>自定义内容</div>
      </Mask>
      <Button onClick={() => setVisible(true)}>显示带内容的背景蒙层</Button>
    </>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Simple />
      </DemoBlock>

      <DemoBlock title='背景蒙层的颜色深度'>
        <Space wrap>
          <Thin />
          <Thick />
          <CustomOpacity />
        </Space>
      </DemoBlock>

      <DemoBlock title='背景蒙层的颜色'>
        <White />
        <CustomColor />
      </DemoBlock>

      <DemoBlock title='自定义内容'>
        <WithContent />
      </DemoBlock>
    </>
  )
}
