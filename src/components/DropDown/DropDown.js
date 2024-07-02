import React from 'react'
import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function DropDown() {

  const items = [
    {
      key: '1',
      label: (
        <div>인기판매순</div>
      )
    },
    {
      key: '2',
      label: (
        <div>높은가격순</div>
      )
    },
    {
      key: '3',
      label: (
        <div>낮은가격순</div>
      )
    }
  ]

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
     <Button>
      <Space>
        상품정렬
        <DownOutlined/>
      </Space>
     </Button>
    </Dropdown>
  )
}

export default DropDown