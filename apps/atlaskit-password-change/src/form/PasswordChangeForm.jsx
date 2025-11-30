import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-password-change-current">Current password</Label>
          <Textfield
            id="atlaskit-password-change-current"
            name="currentPassword"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-password-change-new">New password</Label>
          <Textfield
            id="atlaskit-password-change-new"
            name="newPassword"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-password-change-confirm">Confirm new password</Label>
          <Textfield
            id="atlaskit-password-change-confirm"
            name="confirmPassword"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="logoutOthers"
            label="Sign out of other devices"
          />
        </Box>
        <Button type="submit" appearance="primary">Update password</Button>
      </Stack>
    </form>
  )
}

export default PasswordChangeForm
