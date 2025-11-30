import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-user-registration-name">Full name</Label>
          <Textfield
            id="atlaskit-user-registration-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-user-registration-email">Email address</Label>
          <Textfield
            id="atlaskit-user-registration-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-user-registration-username">Username</Label>
          <Textfield
            id="atlaskit-user-registration-username"
            name="username"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-user-registration-password">Password</Label>
          <Textfield
            id="atlaskit-user-registration-password"
            name="password"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-user-registration-confirm">Confirm password</Label>
          <Textfield
            id="atlaskit-user-registration-confirm"
            name="confirmPassword"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="terms"
            label="I agree to the terms and conditions"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Create account</Button>
      </Stack>
    </form>
  )
}

export default UserRegistrationForm
