import { Form, TextInput, TextArea, Button, Stack } from '@carbon/react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-profile-first-name"
          name="firstName"
          labelText="First name"
          required
        />
        <TextInput
          id="carbon-profile-last-name"
          name="lastName"
          labelText="Last name"
          required
        />
        <TextInput
          id="carbon-profile-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <TextInput
          id="carbon-profile-phone"
          name="phone"
          type="tel"
          labelText="Phone number"
          required
        />
        <TextArea
          id="carbon-profile-bio"
          name="bio"
          labelText="Short bio"
          rows={3}
          required
        />
        <Button type="submit">Save changes</Button>
      </Stack>
    </Form>
  )
}

export default ProfileUpdateForm
