import { Form, Input, Button, Select, Checkbox, InputNumber } from 'antd'

function EventRegistrationForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Event registration submitted!')
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
        label="Ticket type"
        name="ticketType"
        rules={[{ required: true, message: 'Please select a ticket type' }]}
      >
        <Select placeholder="Select ticket">
          <Select.Option value="general">General admission</Select.Option>
          <Select.Option value="vip">VIP</Select.Option>
          <Select.Option value="student">Student</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Number of guests"
        name="guestCount"
        rules={[{ required: true, message: 'Please enter number of guests' }]}
      >
        <InputNumber min={0} max={20} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name="newsletter" valuePropName="checked">
        <Checkbox>Notify me about future events</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default EventRegistrationForm
