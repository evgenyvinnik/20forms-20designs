import { Form, Input, Button, Select, Row, Col } from 'antd'

function BillingInfoForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Billing details saved!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Name on card"
        name="cardName"
        rules={[{ required: true, message: 'Please enter name on card' }]}
      >
        <Input />
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
            label="Expiration date"
            name="expiration"
            rules={[{ required: true, message: 'Please enter expiration' }]}
          >
            <Input placeholder="MM/YY" inputMode="numeric" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Security code"
            name="cvc"
            rules={[{ required: true, message: 'Please enter security code' }]}
          >
            <Input maxLength={4} inputMode="numeric" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Billing address"
        name="address"
        rules={[{ required: true, message: 'Please enter billing address' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: 'Please select a country' }]}
      >
        <Select placeholder="Select country">
          <Select.Option value="US">United States</Select.Option>
          <Select.Option value="CA">Canada</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save billing details
        </Button>
      </Form.Item>
    </Form>
  )
}

export default BillingInfoForm
