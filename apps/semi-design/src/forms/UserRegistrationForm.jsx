import { Form, Button } from '@douyinfe/semi-ui'

function UserRegistrationForm() {
  const handleSubmit = () => {
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="fullName"
        label="Full name"
        rules={[{ required: true, message: 'Please enter your full name' }]}
      />

      <Form.Input
        field="email"
        label="Email address"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      />

      <Form.Input
        field="username"
        label="Username"
        rules={[
          { required: true, message: 'Please enter a username' },
          { min: 3, message: 'Username must be at least 3 characters' },
        ]}
      />

      <Form.Input
        field="password"
        label="Password"
        mode="password"
        rules={[
          { required: true, message: 'Please enter a password' },
          { min: 8, message: 'Password must be at least 8 characters' },
        ]}
      />

      <Form.Input
        field="confirmPassword"
        label="Confirm password"
        mode="password"
        rules={[
          { required: true, message: 'Please confirm your password' },
          { min: 8, message: 'Password must be at least 8 characters' },
        ]}
      />

      <Form.Checkbox field="terms" noLabel>
        I agree to the terms and conditions
      </Form.Checkbox>

      <Button type="primary" htmlType="submit" style={{ marginTop: '16px' }}>
        Create account
      </Button>
    </Form>
  )
}

export default UserRegistrationForm
