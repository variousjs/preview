import React from 'react'
import { Spin } from '@douyinfe/semi-ui'
import { FallbackProps } from '@variousjs/various'

export default function Loader(props: FallbackProps) {
  const { $self } = props
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: $self.name === 'json' ? 'flex-start' : 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Spin />
    </div>
  )
}
