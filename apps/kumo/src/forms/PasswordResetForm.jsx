import { Button, Input, Text } from '@cloudflare/kumo'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Text variant="secondary">Request a password reset link via email.</Text>
      <Input label="Email address" name="email" type="email" required />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Send reset link
        </Button>
      </div>
    </form>
  )
}

export default PasswordResetForm
