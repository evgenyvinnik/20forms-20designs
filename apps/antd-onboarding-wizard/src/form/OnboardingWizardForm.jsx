import { Form, Input, Button, Select, Checkbox, Typography, Space, Divider } from 'antd'

const { TextArea } = Input
const { Title } = Typography

function OnboardingWizardForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Onboarding complete!')
  }

  const handleBack = () => {
    alert('Back action placeholder')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Title level={4}>Step 1: Account</Title>

      <Form.Item
        label="Work email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your work email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please enter your password' },
          { min: 8, message: 'Password must be at least 8 characters' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Divider />

      <Title level={4}>Step 2: Team</Title>

      <Form.Item
        label="Team name"
        name="teamName"
        rules={[{ required: true, message: 'Please enter your team name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Team size"
        name="teamSize"
        rules={[{ required: true, message: 'Please select your team size' }]}
      >
        <Select placeholder="Select size">
          <Select.Option value="1-5">1-5</Select.Option>
          <Select.Option value="6-20">6-20</Select.Option>
          <Select.Option value="21-50">21-50</Select.Option>
          <Select.Option value="50+">50+</Select.Option>
        </Select>
      </Form.Item>

      <Divider />

      <Title level={4}>Step 3: Preferences</Title>

      <Form.Item
        label="Primary goal"
        name="goal"
        rules={[{ required: true, message: 'Please enter your primary goal' }]}
      >
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item name="updates" valuePropName="checked">
        <Checkbox>Send me product tips</Checkbox>
      </Form.Item>

      <Form.Item>
        <Space>
          <Button onClick={handleBack}>Back</Button>
          <Button type="primary" htmlType="submit">
            Finish setup
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default OnboardingWizardForm
