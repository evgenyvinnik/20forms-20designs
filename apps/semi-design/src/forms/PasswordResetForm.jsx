import { useState } from 'react'
import { Form, Button, Typography, Toast } from '@douyinfe/semi-ui'
import { IconMail } from '@douyinfe/semi-icons'

const { Text } = Typography

function PasswordResetForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      Toast.success('Password reset email sent!')
    }, 1000)
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="email"
        label="Account email address"
        type="email"
        prefix={<IconMail />}
        rules={[{ required: true, message: 'Please enter your email' }]}
      />
      <Text
        type="secondary"
        style={{ display: 'block', marginBottom: '16px', fontSize: '0.85rem' }}
      >
        Instructions will be sent to this address if an account exists.
      </Text>

      <Button
        type="primary"
        htmlType="submit"
        loading={loading}
        block
        style={{ marginTop: '8px' }}
      >
        Send reset instructions
      </Button>
    </Form>
  )
}

export default PasswordResetForm
