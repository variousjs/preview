import React, { useMemo, useRef } from 'react'
import { createComponent } from '@variousjs/various'
import { IconHelpCircle } from '@douyinfe/semi-icons';
import { Button, Form, Tooltip, withField } from '@douyinfe/semi-ui'
import { BaseFormApi } from '@douyinfe/semi-foundation/lib/es/form/interface'
import { Props as JsonEditorProps } from '../json'
import csses from './index.module.less'

interface Props {
  onSubmit: (v: Record<string, string>) => void;
  onBgChange: (v: string) => void;
}

const JsonEditor = createComponent<JsonEditorProps>({ module: 'json' })

export default function form(props: Props) {
  const JsonEditorField = useMemo(() => withField(JsonEditor), [])
  const formCtx = useRef<BaseFormApi>(undefined)

  return (
    <Form
      getFormApi={(api) => formCtx.current = api}
      initValues={{
        url: location.origin + location.pathname + 'dist/dino.js',
        props: '{ "instructions": "Press space to jump" }',
        dependencies: '{}',
        background: 'px',
        type: 'react',
      }}
      style={{ maxWidth: 600 }}
      labelPosition="left"
      labelAlign="right"
      autoComplete='off'
      labelWidth={150}
      onSubmit={props.onSubmit}
      onValueChange={(_, v) => {
        if (v.background) {
          props.onBgChange(v.background)
        }
        if (v.type) {
          const isUrlTouched = formCtx.current?.getTouched('url')
          if (!isUrlTouched) {
            formCtx.current?.setValue('url', 'https://esm.sh/vue-toggles@2.2.1?external=vue')
          }
        }
      }}
    >
      <Form.RadioGroup field='background' label='Background'>
        <Form.Radio value='px'>
          <div className={`${csses.px} ${csses.bg}`} />
        </Form.Radio>
        <Form.Radio value='white'>
          <div className={csses.bg} />
        </Form.Radio>
        <Form.Radio value='black'>
          <div className={`${csses.black} ${csses.bg}`} />
        </Form.Radio>
        <Form.Radio value='grey'>
          <div className={`${csses.grey} ${csses.bg}`} />
        </Form.Radio>
      </Form.RadioGroup>
      <Form.RadioGroup type="button" field='type' label='Type'>
        <Form.Radio value='react'>
          React
        </Form.Radio>
        <Form.Radio value='vue3'>
          Vue3
        </Form.Radio>
      </Form.RadioGroup>
      <Form.Input rules={[{ required: true, message: 'url error', type: 'url' }]} field="url" label="URL" placeholder='preview component url, suffix *.js' />
      <Form.Input field="subModule" label="Module Entry" placeholder='specify the module entry' />
      <JsonEditorField
        label={{
        text: 'Props',
        extra: <Tooltip content='custom component props'>
          <IconHelpCircle style={{ color: 'var(--semi-color-text-2)' }}/>
          </Tooltip>
        }}
        field="props"
        title="Edit Props"
      />
      <JsonEditorField
        label={{
        text: 'Dependencies',
        extra: <Tooltip content='component dependencies'>
          <IconHelpCircle style={{ color: 'var(--semi-color-text-2)' }}/>
          </Tooltip>
        }}
        field="dependencies"
        title="Edit Dependencies"
      />
      <div style={{ padding: '20px 0 30px', marginLeft: 150, display: 'flex', alignItems: 'center', gap: 10 }}>
        <Button size="large" type="warning" theme="solid" htmlType="reset">
          Reset
        </Button>
        <Button size="large" type="primary" theme="solid" htmlType="submit">
          Confirm
        </Button>
      </div>
    </Form>
  );
}
