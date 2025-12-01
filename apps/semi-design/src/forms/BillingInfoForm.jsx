import { Form, Button, Select, Row, Col } from '@douyinfe/semi-ui'

function BillingInfoForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="cardName"
        label="Name on card"
        rules={[{ required: true, message: 'Please enter name on card' }]}
      />

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
            label="Expiration date"
            placeholder="MM/YY"
            rules={[{ required: true, message: 'Please enter expiration' }]}
          />
        </Col>
        <Col span={12}>
          <Form.Input
            field="cvc"
            label="Security code"
            maxLength={4}
            rules={[{ required: true, message: 'Please enter security code' }]}
          />
        </Col>
      </Row>

      <Form.Input
        field="address"
        label="Billing address"
        rules={[{ required: true, message: 'Please enter billing address' }]}
      />

      <Form.Select
        field="country"
        label="Country"
        placeholder="Select country"
        rules={[{ required: true, message: 'Please select a country' }]}
        style={{ width: '100%' }}
      >
        <Select.Option value="US">United States</Select.Option>
        <Select.Option value="CA">Canada</Select.Option>
      </Form.Select>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Save billing details
      </Button>
    </Form>
  )
}

export default BillingInfoForm
