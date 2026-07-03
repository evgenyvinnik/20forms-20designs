import {
  Button,
  Input,
  Checkbox,
  Select,
  DatePicker,
  Radio,
  InputNumber,
  TimePicker,
  Switch,
  Form,
  Space,
} from '@arco-design/web-react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-appointment-name"
          >
            Full name
          </label>
          <Input
            id="nocss-appointment-name"
            name="fullName"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-appointment-email"
          >
            Email address
          </label>
          <Input
            id="nocss-appointment-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-appointment-date"
          >
            Preferred date
          </label>
          <DatePicker
            id="nocss-appointment-date"
            name="date"
            type="date"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-appointment-time"
          >
            Preferred time
          </label>
          <TimePicker
            id="nocss-appointment-time"
            name="time"
            type="time"
            required
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-appointment-reason"
          >
            Reason for visit
          </label>
          <Input.TextArea
            id="nocss-appointment-reason"
            name="reason"
            rows="3"
            required
            style={{ width: '100%' }}
          />
        </div>
        <Button type="primary" htmlType="submit">
          Request appointment
        </Button>
      </Space>
    </form>
  )
}

export default AppointmentRequestForm
