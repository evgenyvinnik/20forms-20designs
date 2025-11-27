import { Box, Button, Flex, Text, TextField } from '@radix-ui/themes'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password changed!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="current-password">
            Current password
          </Text>
          <TextField.Root
            id="current-password"
            name="currentPassword"
            type="password"
            placeholder="Enter current password"
            required
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="new-password">
            New password
          </Text>
          <TextField.Root
            id="new-password"
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
            htmlFor="confirm-new-password"
          >
            Confirm new password
          </Text>
          <TextField.Root
            id="confirm-new-password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            required
          />
        </Box>
        <Button type="submit">Change password</Button>
      </Flex>
    </form>
  )
}

export default PasswordChangeForm
