import { Form, Button, DatePicker, TimePicker } from '@douyinfe/semi-ui'

function AppointmentRequestForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Appointment request submitted!')
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

      <Form.DatePicker
        field="date"
        label="Preferred date"
        rules={[{ required: true, message: 'Please select a date' }]}
        style={{ width: '100%' }}
      />

      <Form.TimePicker
        field="time"
        label="Preferred time"
        rules={[{ required: true, message: 'Please select a time' }]}
        style={{ width: '100%' }}
        format="HH:mm"
      />

      <Form.TextArea
        field="reason"
        label="Reason for visit"
        rows={3}
        rules={[{ required: true, message: 'Please enter reason for visit' }]}
      />

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Request appointment
      </Button>
    </Form>
  )
}

export default AppointmentRequestForm
