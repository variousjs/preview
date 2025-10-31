import React from 'react'
import DinoGame from 'react-chrome-dino-ts'
import 'react-chrome-dino-ts/index.css'
import './index.less'

export default function Dino() {
  return (
    <div style={{ borderRadius: 6, padding: 20, backgroundColor: '#fff', textAlign: 'center' }}>
      <DinoGame />
    </div>
  )
}
