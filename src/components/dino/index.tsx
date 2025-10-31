import React from 'react'
import DinoGame from 'react-chrome-dino-ts'
import 'react-chrome-dino-ts/index.css'
import './index.less'

export default function Dino(props: any) {
  return (
    <div style={{ width: '60vw', padding: 20, backgroundColor: '#fff', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 1px 1px' }}>
      <DinoGame {...props} />
    </div>
  )
}
