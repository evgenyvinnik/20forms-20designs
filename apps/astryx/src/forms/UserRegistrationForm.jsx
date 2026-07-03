import { useState } from 'react'
import { TextInput, CheckboxInput, Button } from '@astryxdesign/core'

function UserRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-user-registration-name"
        name="fullName"
        type="text"
        label="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-user-registration-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        id="astryx-user-registration-username"
        name="username"
        type="text"
        label="Username"
        minLength={3}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <TextInput
        id="astryx-user-registration-password"
        name="password"
        type="password"
        label="Password"
        minLength={8}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <TextInput
        id="astryx-user-registration-confirm"
        name="confirmPassword"
        type="password"
        label="Confirm password"
        minLength={8}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <CheckboxInput
        name="terms"
        label="I agree to the terms and conditions"
        checked={terms}
        onChange={(e) => setTerms(e.target.checked)}
        required
      />

      <Button type="submit" variant="primary">
        Create account
      </Button>
    </form>
  )
}

export default UserRegistrationForm
