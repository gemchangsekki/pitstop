import React from 'react'
import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function DropDown() {

  const items = [
    {
      key: '1',
      label: (
        <div>헬멧</div>
      )
    },
    {
      key: '2',
      label: (
        <div>글러브</div>
      )
    },
    {
      key: '3',
      label: (
        <div>부츠</div>
      )
    },
    {
      key: '4',
      label: (
        <div>라이딩진</div>
      )
    },
    {
      key: '5',
      label: (
        <div>자켓</div>
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
        카테고리
        <DownOutlined/>
      </Space>
     </Button>
    </Dropdown>
  )
}

export default DropDown