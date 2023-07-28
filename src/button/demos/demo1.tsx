import React from 'react'
import { Button, Space } from 'uab-ui-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'uab-ui-mobile-demos'
import { sleep } from 'uab-ui-mobile-utils'

export default () => {
  return (
    <>
      <DemoBlock title='按钮颜色'>
        <Space wrap>
          <Button>Default</Button>
          <Button color='primary'>Primary</Button>
          <Button color='success'>Success</Button>
          <Button color='danger'>Danger</Button>
          <Button color='warning'>Warning</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='填充模式'>
        <Space wrap>
          <Button color='primary' fill='solid'>
            solid
          </Button>
          <Button color='primary' fill='outline'>
            outline
          </Button>
          <Button color='primary' fill='none'>
            none
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='按钮大小'>
        <Space wrap>
          <Button color='primary' size='mini'>
            Mini
          </Button>
          <Button color='primary' size='small'>
            Small
          </Button>
          <Button color='primary' size='middle'>
            Middle
          </Button>
          <Button color='primary' size='large'>
            Large
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='块级按钮'>
        <Button color='primary' block>
          Black Button
        </Button>
      </DemoBlock>

      <DemoBlock title='按钮形状'>
        <Space wrap>
          <Button color='primary' shape='default'>
            Default Button
          </Button>
          <Button color='primary' shape='rounded'>
            Rounded Button
          </Button>
          <Button color='primary' shape='rectangular'>
            Rectangular Button
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义图标'>
        <Space wrap>
          <Button>
            <SearchOutline />
            <span>搜索</span>
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Space wrap>
          <Button disabled>Disabled</Button>
          <Button color='primary' disabled>
            Disabled
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='加载状态'>
        <Space wrap>
          <Button loading>Loading</Button>
          <Button loading color='primary' loadingText='loading'>
            Loading
          </Button>
          <Button
            loading='auto'
            loadingText='loading'
            onClick={async () => {
              await sleep(1000)
            }}
          >
            Click Loading
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}
