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

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-contact-name"
          >
            Full name
          </label>
          <Input
            id="nocss-contact-name"
            name="fullName"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-contact-email"
          >
            Email address
          </label>
          <Input
            id="nocss-contact-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-contact-topic"
          >
            Topic
          </label>
          <Select
            id="nocss-contact-topic"
            name="topic"
            required
            style={{ width: '100%' }}
          >
            <Select.Option value="">Select topic</Select.Option>
            <Select.Option value="support">Support</Select.Option>
            <Select.Option value="sales">Sales</Select.Option>
            <Select.Option value="feedback">Feedback</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-contact-message"
          >
            Message
          </label>
          <Input.TextArea
            id="nocss-contact-message"
            name="message"
            rows="4"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>
            <Checkbox name="consent">Allow follow-up communication</Checkbox>
          </label>
        </div>
        <Button type="primary" htmlType="submit">
          Submit inquiry
        </Button>
      </Space>
    </form>
  )
}

export default ContactInquiryForm
