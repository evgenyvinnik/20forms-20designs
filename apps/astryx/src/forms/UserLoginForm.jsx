import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        name="identifier"
        type="text"
        label="Email or username"
        required
      />
      <TextInput name="password" type="password" label="Password" required />
      <CheckboxInput name="remember" label="Keep me signed in" />
      <Button type="submit" variant="primary">
        Sign in
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={() => alert('Password reset link flow placeholder')}
      >
        Forgot password?
      </Button>
    </form>
  )
}

export default UserLoginForm
