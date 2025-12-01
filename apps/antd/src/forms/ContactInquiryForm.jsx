import { Form, Input, Button, Select, Checkbox } from 'antd'

const { TextArea } = Input

function ContactInquiryForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Inquiry submitted!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Full name"
        name="fullName"
        rules={[{ required: true, message: 'Please enter your full name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email address"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Topic"
        name="topic"
        rules={[{ required: true, message: 'Please select a topic' }]}
      >
        <Select placeholder="Select topic">
          <Select.Option value="support">Support</Select.Option>
          <Select.Option value="sales">Sales</Select.Option>
          <Select.Option value="feedback">Feedback</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please enter your message' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item name="consent" valuePropName="checked">
        <Checkbox>Allow follow-up communication</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit inquiry
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ContactInquiryForm
