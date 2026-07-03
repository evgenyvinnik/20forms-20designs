import { Form, Button, Typography, Space } from '@douyinfe/semi-ui'

const { Text } = Typography

function TwoFactorAuthForm() {
  const handleSubmit = (values) => {
    alert('Verification submitted!')
  }

  const handleResend = () => {
    alert('A new code has been sent!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
        Enter the code from your authenticator app or SMS.
      </Text>

      <Form.Input
        field="code"
        label="Verification code"
        maxLength={6}
        rules={[
          { required: true, message: 'Please enter the verification code' },
        ]}
      />

      <Form.Input field="backupCode" label="Backup code (optional)" />

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
