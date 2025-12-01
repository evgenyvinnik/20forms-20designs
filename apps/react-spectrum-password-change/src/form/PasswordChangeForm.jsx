import { Form, TextField, Checkbox, Button, Flex } from '@adobe/react-spectrum'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password changed!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Current password"
          name="currentPassword"
          type="password"
          isRequired
        />
        <TextField
          label="New password"
          name="newPassword"
          type="password"
          minLength={8}
          isRequired
        />
        <TextField
          label="Confirm new password"
          name="confirmPassword"
          type="password"
          minLength={8}
          isRequired
        />
        <Checkbox name="logoutOthers">Sign out of other devices</Checkbox>
        <Button type="submit" variant="accent">
          Update password
        </Button>
      </Flex>
    </Form>
  )
}

export default PasswordChangeForm
