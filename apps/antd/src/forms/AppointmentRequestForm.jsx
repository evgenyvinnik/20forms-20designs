import { Form, Input, Button, DatePicker, TimePicker } from 'antd'

const { TextArea } = Input

function AppointmentRequestForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Appointment request submitted!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Full name"
        name="fullName"
        rules={[{ required: true, message: 'Please enter your full name' }]}
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
        label="Preferred date"
        name="date"
        rules={[{ required: true, message: 'Please select a date' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Preferred time"
        name="time"
        rules={[{ required: true, message: 'Please select a time' }]}
      >
        <TimePicker style={{ width: '100%' }} format="HH:mm" />
      </Form.Item>

      <Form.Item
        label="Reason for visit"
        name="reason"
        rules={[{ required: true, message: 'Please enter reason for visit' }]}
      >
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Request appointment
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AppointmentRequestForm
