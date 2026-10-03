import {
  Button,
  ButtonGroup,
  Checkbox,
  Form,
  TextField,
} from '@react-spectrum/s2'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
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
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Update password
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default PasswordChangeForm
