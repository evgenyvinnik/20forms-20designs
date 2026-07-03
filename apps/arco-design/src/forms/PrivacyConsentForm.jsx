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

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-privacy-name"
          >
            Full name
          </label>
          <Input
            id="nocss-privacy-name"
            name="fullName"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-privacy-email"
          >
            Email address
          </label>
          <Input
            id="nocss-privacy-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <fieldset>
          <legend>Communication channels</legend>
          <label>
            <Checkbox name="emailOptIn">Email updates</Checkbox>
          </label>
          <label>
            <Checkbox name="smsOptIn">SMS notifications</Checkbox>
          </label>
          <label>
            <Checkbox name="phoneOptIn">Phone calls</Checkbox>
          </label>
        </fieldset>
        <fieldset>
          <legend>Privacy options</legend>
          <label>
            <Checkbox name="analytics">Allow analytics cookies</Checkbox>
          </label>
          <label>
            <Checkbox name="personalization">
              Allow personalized content
            </Checkbox>
          </label>
        </fieldset>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-privacy-notes"
          >
            Additional notes
          </label>
          <Input.TextArea
            id="nocss-privacy-notes"
            name="notes"
            rows="3"
            style={{ width: '100%' }}
          />
        </div>
        <Button type="primary" htmlType="submit">
          Save preferences
        </Button>
      </Space>
    </form>
  )
}

export default PrivacyConsentForm
