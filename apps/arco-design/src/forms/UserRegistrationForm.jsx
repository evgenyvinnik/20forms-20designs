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

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-user-registration-name"
          >
            Full name
          </label>
          <Input
            id="nocss-user-registration-name"
            name="fullName"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-user-registration-email"
          >
            Email address
          </label>
          <Input
            id="nocss-user-registration-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-user-registration-username"
          >
            Username
          </label>
          <Input
            id="nocss-user-registration-username"
            name="username"
            type="text"
            minLength="3"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-user-registration-password"
          >
            Password
          </label>
          <Input.Password
            id="nocss-user-registration-password"
            name="password"
            type="password"
            minLength="8"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-user-registration-confirm"
          >
            Confirm password
          </label>
          <Input.Password
            id="nocss-user-registration-confirm"
            name="confirmPassword"
            type="password"
            minLength="8"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>
            <Checkbox name="terms" required>
              I agree to the terms
            </Checkbox>
            and conditions
          </label>
        </div>
        <Button type="primary" htmlType="submit">
          Create account
        </Button>
      </Space>
    </form>
  )
}

export default UserRegistrationForm
