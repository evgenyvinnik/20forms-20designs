import { Button, Stack, TextInput, Textarea } from '@mantine/core'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-profile-first-name"
          name="firstName"
          label="First name"
          type="text"
          required
        />
        <TextInput
          id="mantine-profile-last-name"
          name="lastName"
          label="Last name"
          type="text"
          required
        />
        <TextInput
          id="mantine-profile-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <TextInput
          id="mantine-profile-phone"
          name="phone"
          label="Phone number"
          type="tel"
          inputMode="tel"
          required
        />
        <Textarea
          id="mantine-profile-bio"
          name="bio"
          label="Short bio"
          rows={3}
          required
        />
        <Button type="submit">Save changes</Button>
      </Stack>
    </form>
  )
}

export default ProfileUpdateForm
