import { Form, Button, Typography } from '@douyinfe/semi-ui'
import { IconMail } from '@douyinfe/semi-icons'

const { Text } = Typography

function PasswordResetForm() {
  const handleSubmit = (values) => {
    alert('Password reset link requested!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>
        Request a password reset link via email.
      </Text>
      <Form.Input
        field="email"
        label="Email address"
        type="email"
        prefix={<IconMail />}
        rules={[{ required: true, message: 'Please enter your email' }]}
      />

      <Button
        type="primary"
        htmlType="submit"
        block
        style={{ marginTop: '8px' }}
      >
        Send reset link
      </Button>
    </Form>
  )
}

export default PasswordResetForm
