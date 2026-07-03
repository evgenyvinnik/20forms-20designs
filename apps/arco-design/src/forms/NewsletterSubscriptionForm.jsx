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

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-newsletter-email"
          >
            Email address
          </label>
          <Input
            id="nocss-newsletter-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-newsletter-frequency"
          >
            Frequency
          </label>
          <Select
            id="nocss-newsletter-frequency"
            name="frequency"
            required
            style={{ width: '100%' }}
          >
            <Select.Option value="">Select frequency</Select.Option>
            <Select.Option value="weekly">Weekly</Select.Option>
            <Select.Option value="monthly">Monthly</Select.Option>
            <Select.Option value="quarterly">Quarterly</Select.Option>
          </Select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>
            <Checkbox name="agree">Receive product updates</Checkbox>
          </label>
        </div>
        <Button type="primary" htmlType="submit">
          Subscribe
        </Button>
      </Space>
    </form>
  )
}

export default NewsletterSubscriptionForm
