import { Box, Button, Flex, Text, TextField, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password changed!')
  }

  return (
    <Theme>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-current-password"
            >
              Current password
            </Text>
            <TextField.Root
              id="radix-current-password"
              name="currentPassword"
              type="password"
              placeholder="Enter current password"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-new-password"
            >
              New password
            </Text>
            <TextField.Root
              id="radix-new-password"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-confirm-new-password"
            >
              Confirm new password
            </Text>
            <TextField.Root
              id="radix-confirm-new-password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              required
            />
          </Box>
          <Button type="submit">Change password</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default PasswordChangeForm
