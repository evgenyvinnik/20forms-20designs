import { InputField, Button, Stack, Textarea } from '@kiwicom/orbit-components'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="First name" name="firstName" type="text" required />
        <InputField label="Last name" name="lastName" type="text" required />
        <InputField label="Email address" name="email" type="email" required />
        <InputField label="Phone number" name="phone" type="tel" inputMode="tel" required />
        <Textarea label="Short bio" name="bio" rows={3} required />
        <Button type="primary" submit>
          Save changes
        </Button>
      </Stack>
    </form>
  )
}

export default ProfileUpdateForm
