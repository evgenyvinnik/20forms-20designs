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
    <form onSubmit={handleSubmit}>
      <SpaceBetween direction="vertical" size="l">
        <FormField label="Current password">
          <Input
            name="currentPassword"
            type="password"

            required
          />
        </FormField>
        <FormField label="New password">
          <Input
            name="newPassword"
            type="password"

            required
          />
        </FormField>
        <FormField label="Confirm new password">
          <Input
            name="confirmPassword"
            type="password"

            required
          />
        </FormField>
        <Checkbox name="logoutOthers">Sign out of other devices</Checkbox>
        <Button variant="primary" formAction="submit">
          Update password
        </Button>
      </SpaceBetween>
    </form>
  )
}

export default PasswordChangeForm
