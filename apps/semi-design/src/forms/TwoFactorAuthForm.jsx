import { Form, Button, Typography, Space } from '@douyinfe/semi-ui'

const { Text } = Typography

function TwoFactorAuthForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Verification submitted!')
  }

  const handleResend = () => {
    alert('Code resent!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
        Enter the 6-digit code from your authenticator app
      </Text>

      <Form.Input
        field="verificationCode"
        label="Verification code"
        maxLength={6}
        rules={[
          { required: true, message: 'Please enter the verification code' },
        ]}
      />

      <Form.Input
        field="backupCode"
        label="Backup code"
        extraText="Use this if you can't access your authenticator"
      />

      <Space style={{ marginTop: 16 }}>
        <Button type="primary" htmlType="submit">
          Verify
        </Button>
        <Button onClick={handleResend}>Resend code</Button>
      </Space>
    </Form>
  )
}

export default TwoFactorAuthForm
