import { Form, Button, Select } from '@douyinfe/semi-ui'

function ContactInquiryForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="fullName"
        label="Full name"
        rules={[{ required: true, message: 'Please enter your full name' }]}
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

      <Form.Select
        field="topic"
        label="Topic"
        placeholder="Select topic"
        rules={[{ required: true, message: 'Please select a topic' }]}
        style={{ width: '100%' }}
      >
        <Select.Option value="support">Support</Select.Option>
        <Select.Option value="sales">Sales</Select.Option>
        <Select.Option value="feedback">Feedback</Select.Option>
        <Select.Option value="other">Other</Select.Option>
      </Form.Select>

      <Form.TextArea
        field="message"
        label="Message"
        rows={4}
        rules={[{ required: true, message: 'Please enter your message' }]}
      />

      <Form.Checkbox field="consent">
        Allow follow-up communication
      </Form.Checkbox>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Submit inquiry
      </Button>
    </Form>
  )
}

export default ContactInquiryForm
