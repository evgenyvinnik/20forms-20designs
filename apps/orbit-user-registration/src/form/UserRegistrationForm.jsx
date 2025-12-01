import { InputField, Button, Checkbox, Stack } from '@kiwicom/orbit-components'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Full name" name="fullName" type="text" required />
        <InputField label="Email address" name="email" type="email" required />
        <InputField label="Username" name="username" type="text" minLength={3} required />
        <InputField label="Password" name="password" type="password" minLength={8} required />
        <InputField label="Confirm password" name="confirmPassword" type="password" minLength={8} required />
        <Checkbox label="I agree to the terms and conditions" name="terms" required />
        <Button type="primary" submit>
          Create account
        </Button>
      </Stack>
    </form>
  )
}

export default UserRegistrationForm
