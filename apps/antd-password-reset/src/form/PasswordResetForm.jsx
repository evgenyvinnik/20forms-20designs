import { Form, Input, Button, Typography } from 'antd'

const { Paragraph } = Typography

function PasswordResetForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Password reset link requested!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Paragraph>Request a password reset link via email.</Paragraph>

      <Form.Item
        label="Email address"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send reset link
        </Button>
      </Form.Item>
    </Form>
  )
}

export default PasswordResetForm
