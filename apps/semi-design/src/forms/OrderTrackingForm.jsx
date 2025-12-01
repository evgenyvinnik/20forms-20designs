import { Form, Button } from '@douyinfe/semi-ui'

function OrderTrackingForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Order lookup submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="orderNumber"
        label="Order number"
        rules={[{ required: true, message: 'Please enter your order number' }]}
      />

      <Form.Input
        field="email"
        label="Email address"
        type="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      />

      <Form.Input
        field="postalCode"
        label="Postal code"
        rules={[{ required: true, message: 'Please enter your postal code' }]}
      />

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Find order
      </Button>
    </Form>
  )
}

export default OrderTrackingForm
