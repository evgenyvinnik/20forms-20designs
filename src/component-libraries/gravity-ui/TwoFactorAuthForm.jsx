import { Button, Text, TextInput } from '@gravity-ui/uikit'

import { formStackStyle } from './common.jsx'

const buttonRowStyle = { display: 'flex', gap: 12, flexWrap: 'wrap' }

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <Text variant="body-2">Enter the code from your authenticator app or SMS.</Text>
      <TextInput
        id="gravity-two-factor-code"
        label="Verification code"
        name="code"
        controlProps={{ required: true, inputMode: 'numeric', pattern: '\\d{6}', maxLength: 6 }}
      />
      <TextInput
        id="gravity-two-factor-backup"
        label="Backup code (optional)"
        name="backupCode"
        controlProps={{ pattern: '[A-Za-z0-9]{6,12}' }}
      />
      <div style={buttonRowStyle}>
        <Button view="action" type="submit">
          Verify
        </Button>
        <Button view="flat" type="button" onClick={() => alert('A new code has been sent!')}>
          Resend code
        </Button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
