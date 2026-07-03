import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        name="code"
        type="text"
        label="6-digit security code"
        maxLength={6}
        pattern="[0-9]{6}"
        required
      />
      <CheckboxInput name="trustDevice" label="Trust this device for 30 days" />
      <Button type="submit" variant="primary">
        Verify code
      </Button>
    </form>
  )
}

export default TwoFactorAuthForm
