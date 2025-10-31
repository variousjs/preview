import React, { useState } from 'react'
import { Button, JsonViewer, Modal, Toast } from '@douyinfe/semi-ui'

export interface Props {
  onChange: (v: string) => void,
  value: string,
  title?: string,
}

function JsonEditor(props: Props) {
  const [visible, setVisible] = useState(false)
  const JsonRef = React.useRef<JsonViewer>(null)

  const onOk = () => {
    const v = JsonRef.current?.getValue() || ''
    try {
      JSON.parse(v)
      props.onChange(v)
      setVisible(false)
    } catch (e) {
      Toast.error('JSON format error')
    }
  }

  return (
    <>
      <Button onClick={() => setVisible(true)}>Edit</Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        title={props.title || "Edit JSON"}
        footer={[
          <Button key="format" type="warning" onClick={() => JsonRef.current?.format()}>Format</Button>,
          <Button key="ok" onClick={onOk}>Confirm</Button>,
        ]}
        fullScreen
      >
        <JsonViewer
          ref={JsonRef}
          width="100%"
          height="98%"
          value={props.value}
          showSearch={false}
          options={{
            autoWrap: false,
          }}
        />
      </Modal>
    </>
  )
}

export default JsonEditor
