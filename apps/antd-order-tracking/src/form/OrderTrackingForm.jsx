import { Form, Input, Button } from 'antd'

function OrderTrackingForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Order lookup submitted!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Order number"
        name="orderNumber"
        rules={[{ required: true, message: 'Please enter your order number' }]}
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
        label="Postal code"
        name="postalCode"
        rules={[{ required: true, message: 'Please enter your postal code' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Find order
        </Button>
      </Form.Item>
    </Form>
  )
}

export default OrderTrackingForm
