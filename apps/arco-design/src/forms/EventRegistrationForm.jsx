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

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-event-name"
          >
            Full name
          </label>
          <Input
            id="nocss-event-name"
            name="fullName"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-event-email"
          >
            Email address
          </label>
          <Input
            id="nocss-event-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-event-ticket"
          >
            Ticket type
          </label>
          <Select
            id="nocss-event-ticket"
            name="ticketType"
            required
            style={{ width: '100%' }}
          >
            <Select.Option value="">Select ticket</Select.Option>
            <Select.Option value="general">General admission</Select.Option>
            <Select.Option value="vip">VIP</Select.Option>
            <Select.Option value="student">Student</Select.Option>
          </Select>
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-event-guests"
          >
            Number of guests
          </label>
          <InputNumber
            id="nocss-event-guests"
            name="guestCount"
            type="number"
            min="0"
            max="20"
            required
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>
            <Checkbox name="newsletter">Notify me about future events</Checkbox>
          </label>
        </div>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Space>
    </form>
  )
}

export default EventRegistrationForm
