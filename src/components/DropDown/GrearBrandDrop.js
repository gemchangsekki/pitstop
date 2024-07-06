import React from 'react'
import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function DropDown() {

  const items = [
    {
      key: '1',
      label: (
        <div>다이네즈</div>
      )
    },
    {
      key: '2',
      label: (
        <div>레빗 Rev'it</div>
      )
    },
    {
      key: '3',
      label: (
        <div>알파인스타즈</div>
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
        브랜드
        <DownOutlined/>
      </Space>
     </Button>
    </Dropdown>
  )
}

export default DropDown