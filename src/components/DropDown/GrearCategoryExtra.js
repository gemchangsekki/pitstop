import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


function DropDown() {

  const items = [
    {
      key: '1',
      label: (
        <div>레이싱</div>
      )
    },
    {
      key: '2',
      label: (
        <div>여름용</div>
      )
    },
    {
      key: '3',
      label: (
        <div>겨울용</div>
      )
    },
    {
      key: '4',
      label: (
        <div>사계절용</div>
      )
    },
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
        하위 카테고리
        <DownOutlined/>
      </Space>
     </Button>
    </Dropdown>
  )
}

export default DropDown