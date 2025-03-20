import React from 'react'
import { createComponent } from '@variousjs/various'
import { HashRouter as Router } from 'react-router-dom'

const Demo = createComponent({ name: 'demo' })

export default function D() {
  return (
    <Router>
      <Demo />
    </Router>
  )
}
