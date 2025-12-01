import { Form, Input, Button, Typography, Space } from 'antd'

const { Text } = Typography

function TwoFactorAuthForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Verification submitted!')
  }

  const handleResend = () => {
    alert('Code resent!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
        Enter the 6-digit code from your authenticator app
      </Text>

      <Form.Item
        label="Verification code"
        name="verificationCode"
        rules={[
          { required: true, message: 'Please enter the verification code' },
        ]}
      >
        <Input maxLength={6} />
      </Form.Item>

      <Form.Item
        label="Backup code"
        name="backupCode"
        extra="Use this if you can't access your authenticator"
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Verify
          </Button>
          <Button onClick={handleResend}>Resend code</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default TwoFactorAuthForm
