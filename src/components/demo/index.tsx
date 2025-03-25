import React, { useState } from 'react'
import { renderComponent, defineDependencies } from '@variousjs/various'
import { HashRouter } from 'react-router-dom'
import { Button, Modal } from '@arco-design/web-react'
import { IconSettings } from '@arco-design/web-react/icon'
import Form from './form'
import csses from './index.less'

const S = () => {
  const [visible, setVisible] = useState(false)

  const render = (v: Record<string, string>) => {
    let props: any = {}
    let depes: any

    try {
      props = JSON.parse(v.props)
      depes = JSON.parse(v.dependencies)
    } catch (e) {
      // ignore
    }

    if (depes) {
      defineDependencies(depes)
    }

    renderComponent({
      name: v.name || 'Demo',
      module: v.subModule,
      props,
      target: document.querySelector('#demo'),
      renderNode(children) {
        return (<HashRouter>{children}</HashRouter>)
      },
      url: v.url,
    })
  }

  return (
    <>
      <Button
        size="large"
        type="primary"
        shape="round"
        className={csses.icon}
        icon={<IconSettings />}
        onClick={() => setVisible(true)}
      />
      <div className={csses.demo}>
        <div id="demo" />
      </div>
      <Modal
        style={{ width: 680 }}
        title='Preview Config'
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form onSubmit={(v) => {
          setVisible(false)
          render(v)
        }} />
      </Modal>
    </>
  )
}

export default S
