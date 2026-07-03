import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function PasswordResetForm() {
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
        name="email"
        type="email"
        label="Account email address"
        required
      />
      <Button type="submit" variant="primary">
        Send reset instructions
      </Button>
    </form>
  )
}

export default PasswordResetForm
