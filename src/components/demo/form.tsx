import React from 'react'
import { Form, Input, Button } from '@arco-design/web-react'

interface Props {
  onSubmit: (v: Record<string, string>) => void;
}

const FormItem = Form.Item

export default function form(props: Props) {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      initialValues={{
        url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
        props: '{"checked":true}',
      }}
      style={{ maxWidth: 600 }}
      autoComplete='off'
      onSubmit={props.onSubmit}
    >
      <FormItem label="URL" field='url' rules={[{ required: true, message: ' ', match: /^https?:\/\/[^\s/?#]+[^\s]*$/i }]}>
        <Input placeholder='preview component url, suffix *.js' />
      </FormItem>
      <FormItem label="SubModule" field='subModule'>
        <Input placeholder='if module exports multiple entry, can specify the preview entry' />
      </FormItem>
      <FormItem label="Props" field='props'>
        <Input placeholder='pass in attributes, JSON structure' />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type='primary' htmlType='submit' style={{ marginRight: 24 }}>
          Confirm
        </Button>
      </FormItem>
    </Form>
  );
}
