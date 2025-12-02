import { Button, Card, Label, TextInput } from 'flowbite-react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Password Reset</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <p className="text-gray-600 dark:text-gray-400">
          Request a password reset link via email.
        </p>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-password-reset-email"
              value="Email address"
            />
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
    </Card>
  )
}

export default PasswordResetForm
