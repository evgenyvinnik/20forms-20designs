import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset requested!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
        Request a password reset link via email.
      </p>
      <TextInput
        name="email"
        type="email"
        label="Account email address"
        required
      />
      <Button type="submit" variant="primary">
        Send reset link
      </Button>
    </form>
  )
}

export default PasswordResetForm
