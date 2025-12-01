import { useState } from 'react'
import { Form, Input, Button, Typography, Toast } from '@douyinfe/semi-ui'
import { IconMail } from '@douyinfe/semi-icons'

const { Title, Text } = Typography

function PasswordResetForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values) => {
    setLoading(true)
    console.log('Password reset requested for:', values)
    
    setTimeout(() => {
      setLoading(false)
      Toast.success('Password reset email sent! Check your inbox.')
    }, 1000)
  }

  return (
    <div>
      <Title heading={3} style={{ marginBottom: '8px' }}>
        Reset Password
      </Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: '24px' }}>
        Enter your email address and we'll send you a link to reset your password.
      </Text>

      <Form onSubmit={handleSubmit} labelPosition="top">
        <Form.Input
          field="email"
          label="Email Address"
          placeholder="Enter your email"
          prefix={<IconMail />}
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        />

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          block
          style={{ marginTop: '16px' }}
        >
          Send Reset Link
        </Button>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <Text type="secondary">
            Remember your password?{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Sign in
            </a>
          </Text>
        </div>
      </Form>
    </div>
  )
}

export default PasswordResetForm
