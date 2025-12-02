import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">User Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-user-registration-name"
              value="Full name"
            />
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
            <Label
              htmlFor="flowbite-user-registration-email"
              value="Email address"
            />
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
            <Label
              htmlFor="flowbite-user-registration-username"
              value="Username"
            />
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
            <Label
              htmlFor="flowbite-user-registration-password"
              value="Password"
            />
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
            <Label
              htmlFor="flowbite-user-registration-confirm"
              value="Confirm password"
            />
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
          <Checkbox
            id="flowbite-user-registration-terms"
            name="terms"
            required
          />
          <Label htmlFor="flowbite-user-registration-terms">
            I agree to the terms and conditions
          </Label>
        </div>
        <Button type="submit">Create account</Button>
      </form>
    </Card>
  )
}

export default UserRegistrationForm
