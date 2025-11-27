import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-user-registration-name">Full name</Label>
        <Input
          id="shadcn-user-registration-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-user-registration-email">Email address</Label>
        <Input
          id="shadcn-user-registration-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-user-registration-username">Username</Label>
        <Input
          id="shadcn-user-registration-username"
          name="username"
          type="text"
          minLength="3"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-user-registration-password">Password</Label>
        <Input
          id="shadcn-user-registration-password"
          name="password"
          type="password"
          minLength="8"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-user-registration-confirm">
          Confirm password
        </Label>
        <Input
          id="shadcn-user-registration-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="terms" required />
        <Label htmlFor="terms" className="font-normal">
          I agree to the terms and conditions
        </Label>
      </div>
      <Button type="submit">Create account</Button>
    </form>
  )
}

export default UserRegistrationForm
