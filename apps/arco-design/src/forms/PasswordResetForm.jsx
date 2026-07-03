import {
  Button,
  Input,
  Checkbox,
  Select,
  DatePicker,
  Radio,
  InputNumber,
  TimePicker,
  Switch,
  Form,
  Space,
} from '@arco-design/web-react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <p>Request a password reset link via email.</p>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-password-reset-email"
          >
            Email address
          </label>
          <Input
            id="nocss-password-reset-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <Button type="primary" htmlType="submit">
          Send reset link
        </Button>
      </Space>
    </form>
  )
}

export default PasswordResetForm
