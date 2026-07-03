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

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-password-change-current"
          >
            Current password
          </label>
          <Input.Password
            id="nocss-password-change-current"
            name="currentPassword"
            type="password"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-password-change-new"
          >
            New password
          </label>
          <Input.Password
            id="nocss-password-change-new"
            name="newPassword"
            type="password"
            minLength="8"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-password-change-confirm"
          >
            Confirm new password
          </label>
          <Input.Password
            id="nocss-password-change-confirm"
            name="confirmPassword"
            type="password"
            minLength="8"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>
            <Checkbox name="logoutOthers">Sign out of other devices</Checkbox>
          </label>
        </div>
        <Button type="primary" htmlType="submit">
          Update password
        </Button>
      </Space>
    </form>
  )
}

export default PasswordChangeForm
