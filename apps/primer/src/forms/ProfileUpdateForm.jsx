import { Box, FormControl, TextInput, Textarea, Button } from '@primer/react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>First name</FormControl.Label>
        <TextInput
          id="primer-profile-firstname"
          name="firstName"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Last name</FormControl.Label>
        <TextInput
          id="primer-profile-lastname"
          name="lastName"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput id="primer-profile-email" name="email" type="email" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Phone number</FormControl.Label>
        <TextInput
          id="primer-profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Short bio</FormControl.Label>
        <Textarea id="primer-profile-bio" name="bio" rows={3} block />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Save changes
      </Button>
    </Box>
  )
}

export default ProfileUpdateForm
