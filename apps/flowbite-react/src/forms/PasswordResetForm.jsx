import { Button, Label, TextInput } from 'flowbite-react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Request a password reset link via email.
      </p>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-password-reset-email">Email address</Label>
        </div>
        <TextInput
          id="flowbite-password-reset-email"
          name="email"
          type="email"
          required
        />
      </div>
      <Button type="submit">Send reset link</Button>
    </form>
  )
}

export default PasswordResetForm
