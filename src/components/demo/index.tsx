import React, { useRef, useState } from 'react'
import { renderComponent, defineDependencies } from '@variousjs/various'
import { HashRouter } from 'react-router-dom'
import { Button, Modal } from '@douyinfe/semi-ui'
import { IconSettingStroked } from '@douyinfe/semi-icons'
import Form from './form'
import csses from './index.less'

const S = () => {
  const version = useRef(0)
  const [visible, setVisible] = useState(false)
  const remove = useRef<() => void>()
  const [bg, setBg] = useState('px')

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
      delete depes.react
      delete depes['react-dom']
      delete depes['@variousjs/various']
      delete depes['react-router-dom']
      delete depes.vue
      defineDependencies(depes)
    }

    remove.current = renderComponent({
      type: v.type as 'react',
      name: 'Component-' + version.current,
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
        theme="solid"
        className={csses.icon}
        icon={<IconSettingStroked />}
        onClick={() => setVisible(true)}
      />
      <div className={`${csses.demo} ${csses[bg]}`}>
        <div id="demo" />
      </div>
      <Modal
        keepDOM
        style={{ width: 680 }}
        title='Preview Config'
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form
          onSubmit={(v) => {
            setVisible(false)
            remove.current?.()
            // @ts-ignore
            window.requirejs.undef('Component-' + version.current)
            version.current += 1
            setTimeout(() => {
              render(v)
            }, 100)
            setBg(v.background)
          }}
          onBgChange={(v) => {
            setBg(v)
          }}
        />
      </Modal>
    </>
  )
}

export default S
