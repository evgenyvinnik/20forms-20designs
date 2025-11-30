import { Form, Input, Button, Checkbox, Space } from 'antd'

function UserLoginForm() {
  const [form] = Form.useForm()

  const handleSubmit = (values) => {
    alert('Login submitted!')
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Email or username"
        name="identifier"
        rules={[{ required: true, message: 'Please enter your email or username' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Keep me signed in</Checkbox>
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
          <Button
            type="default"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default UserLoginForm
