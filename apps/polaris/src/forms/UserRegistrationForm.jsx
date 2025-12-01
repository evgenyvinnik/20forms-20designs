import { useState, useCallback } from 'react'
import { FormLayout, TextField, Checkbox, Button } from '@shopify/polaris'

function UserRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Full name"
          value={fullName}
          onChange={setFullName}
          autoComplete="name"
          requiredIndicator
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <TextField
          label="Username"
          value={username}
          onChange={setUsername}
          autoComplete="username"
          minLength={3}
          requiredIndicator
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
          minLength={8}
          requiredIndicator
        />
        <TextField
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          autoComplete="new-password"
          minLength={8}
          requiredIndicator
        />
        <Checkbox
          label="I agree to the terms and conditions"
          checked={terms}
          onChange={setTerms}
        />
        <Button submit variant="primary">
          Create account
        </Button>
      </FormLayout>
    </form>
  )
}

export default UserRegistrationForm
