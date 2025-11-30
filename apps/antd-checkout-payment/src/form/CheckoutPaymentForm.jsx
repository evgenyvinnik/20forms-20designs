import { Form, Input, Button, Select, Row, Col } from 'antd'

function CheckoutPaymentForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Checkout submitted!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Email for receipt"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Shipping method"
        name="shippingMethod"
        rules={[{ required: true, message: 'Please select shipping method' }]}
      >
        <Select placeholder="Select shipping">
          <Select.Option value="standard">Standard</Select.Option>
          <Select.Option value="express">Express</Select.Option>
          <Select.Option value="overnight">Overnight</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Card number"
        name="cardNumber"
        rules={[{ required: true, message: 'Please enter card number' }]}
      >
        <Input maxLength={19} inputMode="numeric" />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Expiration"
            name="expiration"
            rules={[{ required: true, message: 'Please enter expiration' }]}
          >
            <Input placeholder="MM/YY" inputMode="numeric" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="CVC"
            name="cvc"
            rules={[{ required: true, message: 'Please enter CVC' }]}
          >
            <Input maxLength={4} inputMode="numeric" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Promo code" name="promoCode">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Place order
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CheckoutPaymentForm
