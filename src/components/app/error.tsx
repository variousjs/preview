import React from 'react'
import { ErrorNode } from '@variousjs/various'
import { Alert, Button } from '@arco-design/web-react'

const errorComponent: ErrorNode = ({ $reload, $error }) => (
  <Alert
    style={{ minWidth: 500 }}
    type='error'
    title={$error.type}
    content={$error.message || 'unknow error'}
    action={$reload ? <Button size="small" type="outline" onClick={$reload}>Reload</Button> : undefined}
  />
)

export default errorComponent
