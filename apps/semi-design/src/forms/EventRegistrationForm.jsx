import { Form, Button, Select, InputNumber } from '@douyinfe/semi-ui'

function EventRegistrationForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Event registration submitted!')
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
        field="ticketType"
        label="Ticket type"
        placeholder="Select ticket"
        rules={[{ required: true, message: 'Please select a ticket type' }]}
        style={{ width: '100%' }}
      >
        <Select.Option value="general">General admission</Select.Option>
        <Select.Option value="vip">VIP</Select.Option>
        <Select.Option value="student">Student</Select.Option>
      </Form.Select>

      <Form.InputNumber
        field="guestCount"
        label="Number of guests"
        min={0}
        max={20}
        rules={[{ required: true, message: 'Please enter number of guests' }]}
        style={{ width: '100%' }}
      />

      <Form.Checkbox field="newsletter">
        Notify me about future events
      </Form.Checkbox>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Register
      </Button>
    </Form>
  )
}

export default EventRegistrationForm
