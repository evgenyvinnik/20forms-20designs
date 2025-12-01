import {
  Form,
  Button,
  Select,
  Typography,
  Divider,
  Space,
} from '@douyinfe/semi-ui'

const { Title } = Typography

function OnboardingWizardForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Onboarding complete!')
  }

  const handleBack = () => {
    alert('Back action placeholder')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Title heading={4}>Step 1: Account</Title>

      <Form.Input
        field="email"
        label="Work email"
        type="email"
        rules={[
          { required: true, message: 'Please enter your work email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      />

      <Form.Input
        field="password"
        label="Password"
        mode="password"
        rules={[
          { required: true, message: 'Please enter your password' },
          { min: 8, message: 'Password must be at least 8 characters' },
        ]}
      />

      <Divider />

      <Title heading={4}>Step 2: Team</Title>

      <Form.Input
        field="teamName"
        label="Team name"
        rules={[{ required: true, message: 'Please enter your team name' }]}
      />

      <Form.Select
        field="teamSize"
        label="Team size"
        placeholder="Select size"
        rules={[{ required: true, message: 'Please select your team size' }]}
        style={{ width: '100%' }}
      >
        <Select.Option value="1-5">1-5</Select.Option>
        <Select.Option value="6-20">6-20</Select.Option>
        <Select.Option value="21-50">21-50</Select.Option>
        <Select.Option value="50+">50+</Select.Option>
      </Form.Select>

      <Divider />

      <Title heading={4}>Step 3: Preferences</Title>

      <Form.TextArea
        field="goal"
        label="Primary goal"
        rows={3}
        rules={[{ required: true, message: 'Please enter your primary goal' }]}
      />

      <Form.Checkbox field="updates">Send me product tips</Form.Checkbox>

      <Space style={{ marginTop: 16 }}>
        <Button onClick={handleBack}>Back</Button>
        <Button type="primary" htmlType="submit">
          Finish setup
        </Button>
      </Space>
    </Form>
  )
}

export default OnboardingWizardForm
