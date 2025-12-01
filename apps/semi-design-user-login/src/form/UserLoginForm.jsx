import { Form, Button, Checkbox, Space } from '@douyinfe/semi-ui'

function UserLoginForm() {
  const handleSubmit = (values) => {
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="identifier"
        label="Email or username"
        rules={[
          { required: true, message: 'Please enter your email or username' },
        ]}
      />

      <Form.Input
        field="password"
        label="Password"
        mode="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      />

      <Form.Checkbox field="remember" noLabel>
        Keep me signed in
      </Form.Checkbox>

      <Space>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
        <Button
          type="tertiary"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </Space>
    </Form>
  )
}

export default UserLoginForm
