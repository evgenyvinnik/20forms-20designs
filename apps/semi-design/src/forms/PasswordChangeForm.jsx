import { Form, Button } from '@douyinfe/semi-ui'

function PasswordChangeForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Password change requested!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="currentPassword"
        label="Current password"
        mode="password"
        rules={[
          { required: true, message: 'Please enter your current password' },
        ]}
      />

      <Form.Input
        field="newPassword"
        label="New password"
        mode="password"
        rules={[
          { required: true, message: 'Please enter a new password' },
          { min: 8, message: 'Password must be at least 8 characters' },
        ]}
      />

      <Form.Input
        field="confirmPassword"
        label="Confirm new password"
        mode="password"
        rules={[
          { required: true, message: 'Please confirm your new password' },
          { min: 8, message: 'Password must be at least 8 characters' },
        ]}
      />

      <Form.Checkbox field="logoutOthers">
        Sign out of other devices
      </Form.Checkbox>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Update password
      </Button>
    </Form>
  )
}

export default PasswordChangeForm
