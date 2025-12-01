import { Box, Button, Form, FormField, TextArea, TextInput } from 'grommet'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="First name"
        name="firstName"
        htmlFor="grommet-profile-first-name"
        required
      >
        <TextInput
          id="grommet-profile-first-name"
          name="firstName"
          type="text"
        />
      </FormField>
      <FormField
        label="Last name"
        name="lastName"
        htmlFor="grommet-profile-last-name"
        required
      >
        <TextInput id="grommet-profile-last-name" name="lastName" type="text" />
      </FormField>
      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-profile-email"
        required
      >
        <TextInput id="grommet-profile-email" name="email" type="email" />
      </FormField>
      <FormField
        label="Phone number"
        name="phone"
        htmlFor="grommet-profile-phone"
        required
      >
        <TextInput id="grommet-profile-phone" name="phone" type="tel" />
      </FormField>
      <FormField
        label="Short bio"
        name="bio"
        htmlFor="grommet-profile-bio"
        required
      >
        <TextArea id="grommet-profile-bio" name="bio" rows={3} />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Save changes" />
      </Box>
    </Form>
  )
}

export default ProfileUpdateForm
