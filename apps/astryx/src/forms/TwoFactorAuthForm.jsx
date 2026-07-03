import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('2FA code submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
        Enter the code from your authenticator app or SMS.
      </p>
      <TextInput
        name="code"
        type="text"
        label="Verification code"
        maxLength={6}
        pattern="[0-9]{6}"
        required
      />
      <TextInput name="backupCode" type="text" label="Backup code (optional)" />
      <CheckboxInput name="trustDevice" label="Trust this device for 30 days" />
      <Button type="submit" variant="primary">
        Verify
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={() => alert('Resending code placeholder')}
      >
        Resend code
      </Button>
    </form>
  )
}

export default TwoFactorAuthForm
