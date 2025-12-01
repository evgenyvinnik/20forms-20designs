import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-profile-first-name">First name</Label>
          <Textfield
            id="atlaskit-profile-first-name"
            name="firstName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-profile-last-name">Last name</Label>
          <Textfield
            id="atlaskit-profile-last-name"
            name="lastName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-profile-email">Email address</Label>
          <Textfield
            id="atlaskit-profile-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-profile-phone">Phone number</Label>
          <Textfield
            id="atlaskit-profile-phone"
            name="phone"
            type="tel"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-profile-bio">Short bio</Label>
          <TextArea
            id="atlaskit-profile-bio"
            name="bio"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Save changes</Button>
      </Stack>
    </form>
  )
}

export default ProfileUpdateForm
