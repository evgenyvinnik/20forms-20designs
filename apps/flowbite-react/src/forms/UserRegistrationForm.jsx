import { Button, Checkbox, Label, TextInput } from 'flowbite-react'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-user-registration-name">Full name</Label>
        </div>
        <TextInput
          id="flowbite-user-registration-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-user-registration-email">
            Email address
          </Label>
        </div>
        <TextInput
          id="flowbite-user-registration-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-user-registration-username">Username</Label>
        </div>
        <TextInput
          id="flowbite-user-registration-username"
          name="username"
          type="text"
          minLength={3}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-user-registration-password">Password</Label>
        </div>
        <TextInput
          id="flowbite-user-registration-password"
          name="password"
          type="password"
          minLength={8}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-user-registration-confirm">
            Confirm password
          </Label>
        </div>
        <TextInput
          id="flowbite-user-registration-confirm"
          name="confirmPassword"
          type="password"
          minLength={8}
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="flowbite-user-registration-terms" name="terms" required />
        <Label htmlFor="flowbite-user-registration-terms">
          I agree to the terms and conditions
        </Label>
      </div>
      <Button type="submit">Create account</Button>
    </form>
  )
}

export default UserRegistrationForm
