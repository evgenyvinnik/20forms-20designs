import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Checkbox,
  Container,
  FormField,
  Input,
  SpaceBetween,
} from '@cloudscape-design/components'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Current password">
            <Input
              name="currentPassword"
              type="password"
              placeholder="Enter current password"
              required
            />
          </FormField>
          <FormField label="New password">
            <Input
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              required
            />
          </FormField>
          <FormField label="Confirm new password">
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              required
            />
          </FormField>
          <Checkbox name="logoutOthers">Sign out of other devices</Checkbox>
          <Button variant="primary" formAction="submit">
            Update password
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default PasswordChangeForm
