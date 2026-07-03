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

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <section>
          <h3>Step 1: Account</h3>
          <div>
            <label
              style={{ display: 'block', marginBottom: '4px' }}
              htmlFor="nocss-onboarding-email"
            >
              Work email
            </label>
            <Input
              id="nocss-onboarding-email"
              name="email"
              type="email"
              required
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label
              style={{ display: 'block', marginBottom: '4px' }}
              htmlFor="nocss-onboarding-password"
            >
              Password
            </label>
            <Input.Password
              id="nocss-onboarding-password"
              name="password"
              type="password"
              minLength="8"
              required
              style={{ width: '100%' }}
            />
          </div>
        </section>
        <section>
          <h3>Step 2: Team</h3>
          <div>
            <label
              style={{ display: 'block', marginBottom: '4px' }}
              htmlFor="nocss-onboarding-team-name"
            >
              Team name
            </label>
            <Input
              id="nocss-onboarding-team-name"
              name="teamName"
              type="text"
              required
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label
              style={{ display: 'block', marginBottom: '4px' }}
              htmlFor="nocss-onboarding-size"
            >
              Team size
            </label>
            <Select
              id="nocss-onboarding-size"
              name="teamSize"
              required
              style={{ width: '100%' }}
            >
              <Select.Option value="">Select size</Select.Option>
              <Select.Option value="1-5">1-5</Select.Option>
              <Select.Option value="6-20">6-20</Select.Option>
              <Select.Option value="21-50">21-50</Select.Option>
              <Select.Option value="50+">50+</Select.Option>
            </Select>
          </div>
        </section>
        <section>
          <h3>Step 3: Preferences</h3>
          <div>
            <label
              style={{ display: 'block', marginBottom: '4px' }}
              htmlFor="nocss-onboarding-goal"
            >
              Primary goal
            </label>
            <Input.TextArea
              id="nocss-onboarding-goal"
              name="goal"
              rows="3"
              required
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px' }}>
              <Checkbox name="updates">Send me product tips</Checkbox>
            </label>
          </div>
        </section>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
            marginTop: '8px',
          }}
        >
          <Button
            htmlType="button"
            type="secondary"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="primary" htmlType="submit">
            Finish setup
          </Button>
        </div>
      </Space>
    </form>
  )
}

export default OnboardingWizardForm
