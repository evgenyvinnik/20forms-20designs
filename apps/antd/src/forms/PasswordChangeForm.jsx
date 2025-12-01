import { Form, Input, Button, Checkbox } from 'antd'

function PasswordChangeForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Password change requested!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Current password"
        name="currentPassword"
        rules={[
          { required: true, message: 'Please enter your current password' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="New password"
        name="newPassword"
        rules={[
          { required: true, message: 'Please enter a new password' },
          { min: 8, message: 'Password must be at least 8 characters' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm new password"
        name="confirmPassword"
        rules={[
          { required: true, message: 'Please confirm your new password' },
          { min: 8, message: 'Password must be at least 8 characters' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="logoutOthers" valuePropName="checked">
        <Checkbox>Sign out of other devices</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update password
        </Button>
      </Form.Item>
    </Form>
  )
}

export default PasswordChangeForm
