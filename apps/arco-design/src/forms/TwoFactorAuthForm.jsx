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

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <p>Enter the code from your authenticator app or SMS.</p>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-two-factor-code"
          >
            Verification code
          </label>
          <Input
            id="nocss-two-factor-code"
            name="code"
            type="text"
            inputMode="numeric"
            pattern="\\d{6}"
            maxLength="6"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-two-factor-backup"
          >
            Backup code (optional)
          </label>
          <Input
            id="nocss-two-factor-backup"
            name="backupCode"
            type="text"
            pattern="[A-Za-z0-9]{6,12}"
            style={{ width: '100%' }}
          />
        </div>
        <Space size="medium">
          <Button type="primary" htmlType="submit">
            Verify
          </Button>
          <Button
            htmlType="button"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </Button>
        </Space>
      </Space>
    </form>
  )
}

export default TwoFactorAuthForm
