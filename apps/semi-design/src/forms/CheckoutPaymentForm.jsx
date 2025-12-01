import { Form, Button, Select, Row, Col } from '@douyinfe/semi-ui'

function CheckoutPaymentForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="email"
        label="Email for receipt"
        type="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      />

      <Form.Select
        field="shippingMethod"
        label="Shipping method"
        placeholder="Select shipping"
        rules={[{ required: true, message: 'Please select shipping method' }]}
        style={{ width: '100%' }}
      >
        <Select.Option value="standard">Standard</Select.Option>
        <Select.Option value="express">Express</Select.Option>
        <Select.Option value="overnight">Overnight</Select.Option>
      </Form.Select>

      <Form.Input
        field="cardNumber"
        label="Card number"
        maxLength={19}
        rules={[{ required: true, message: 'Please enter card number' }]}
      />

      <Row gutter={16}>
        <Col span={12}>
          <Form.Input
            field="expiration"
            label="Expiration"
            placeholder="MM/YY"
            rules={[{ required: true, message: 'Please enter expiration' }]}
          />
        </Col>
        <Col span={12}>
          <Form.Input
            field="cvc"
            label="CVC"
            maxLength={4}
            rules={[{ required: true, message: 'Please enter CVC' }]}
          />
        </Col>
      </Row>

      <Form.Input field="promoCode" label="Promo code" />

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Place order
      </Button>
    </Form>
  )
}

export default CheckoutPaymentForm
