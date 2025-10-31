import React from 'react'
import { ErrorNode } from '@variousjs/various'
import { Banner, Button } from '@douyinfe/semi-ui'

const errorComponent: ErrorNode = ({ $reload, $error }) => (
  <Banner
    fullMode={false}
    title={$error.type}
    description={$error.message || 'unknow error'}
    bordered
    type="warning"
  >
    <Button type="warning" onClick={$reload}>Reload</Button>
  </Banner>
)

export default errorComponent
