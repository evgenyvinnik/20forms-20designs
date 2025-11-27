import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-slate-600">
        Request a password reset link via email.
      </p>
      <div className="space-y-2">
        <Label htmlFor="shadcn-password-reset-email">Email address</Label>
        <Input
          id="shadcn-password-reset-email"
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
