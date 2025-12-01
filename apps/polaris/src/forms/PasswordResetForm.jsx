import { useState, useCallback } from 'react'
import { FormLayout, TextField, Button, Text } from '@shopify/polaris'

function PasswordResetForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <Text as="p">Request a password reset link via email.</Text>
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <Button submit variant="primary">
          Send reset link
        </Button>
      </FormLayout>
    </form>
  )
}

export default PasswordResetForm
