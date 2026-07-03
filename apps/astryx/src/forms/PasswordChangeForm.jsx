import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password updated!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        name="currentPassword"
        type="password"
        label="Current password"
        required
      />
      <TextInput
        name="newPassword"
        type="password"
        label="New password"
        required
      />
      <TextInput
        name="confirmPassword"
        type="password"
        label="Confirm new password"
        required
      />
      <CheckboxInput name="signOutOther" label="Sign out of other devices" />
      <Button type="submit" variant="primary">
        Update password
      </Button>
    </form>
  )
}

export default PasswordChangeForm
