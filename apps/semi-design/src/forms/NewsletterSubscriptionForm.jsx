import { Form, Button, Select } from '@douyinfe/semi-ui'

function NewsletterSubscriptionForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
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
        field="frequency"
        label="Frequency"
        placeholder="Select frequency"
        rules={[{ required: true, message: 'Please select a frequency' }]}
        style={{ width: '100%' }}
      >
        <Select.Option value="weekly">Weekly</Select.Option>
        <Select.Option value="monthly">Monthly</Select.Option>
        <Select.Option value="quarterly">Quarterly</Select.Option>
      </Form.Select>

      <Form.Checkbox field="productUpdates">
        Receive product updates
      </Form.Checkbox>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Subscribe
      </Button>
    </Form>
  )
}

export default NewsletterSubscriptionForm
