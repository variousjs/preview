import React from 'react'
import { Spin } from '@douyinfe/semi-ui'

export default function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Spin />
    </div>
  )
}
