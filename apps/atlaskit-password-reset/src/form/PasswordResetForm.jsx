import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Label } from '@atlaskit/form'
import { Box, Stack, Text } from '@atlaskit/primitives'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Text as="p">Request a password reset link via email.</Text>
        <Box>
          <Label htmlFor="atlaskit-password-reset-email">Email address</Label>
          <Textfield
            id="atlaskit-password-reset-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Send reset link</Button>
      </Stack>
    </form>
  )
}

export default PasswordResetForm
