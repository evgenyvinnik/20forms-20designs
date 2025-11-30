import { Form, Input, Button, Select, Checkbox } from 'antd'

function NewsletterSubscriptionForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
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
        label="Frequency"
        name="frequency"
        rules={[{ required: true, message: 'Please select a frequency' }]}
      >
        <Select placeholder="Select frequency">
          <Select.Option value="weekly">Weekly</Select.Option>
          <Select.Option value="monthly">Monthly</Select.Option>
          <Select.Option value="quarterly">Quarterly</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="productUpdates" valuePropName="checked">
        <Checkbox>Receive product updates</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Subscribe
        </Button>
      </Form.Item>
    </Form>
  )
}

export default NewsletterSubscriptionForm
