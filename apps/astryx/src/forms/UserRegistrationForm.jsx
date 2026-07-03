import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="fullName" type="text" label="Full name" required />
      <TextInput name="email" type="email" label="Email address" required />
      <TextInput name="username" type="text" label="Username" required />
      <TextInput name="password" type="password" label="Password" required />
      <TextInput
        name="confirmPassword"
        type="password"
        label="Confirm password"
        required
      />
      <CheckboxInput
        name="terms"
        label="I agree to the terms and conditions"
        required
      />
      <Button type="submit" variant="primary">
        Create account
      </Button>
    </form>
  )
}

export default UserRegistrationForm
