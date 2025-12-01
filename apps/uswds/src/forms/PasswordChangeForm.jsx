import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function PasswordChangeForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-password-change-current"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Current password
        </Label>
        <TextInput
          id="uswds-password-change-current"
          name="currentPassword"
          type="password"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-password-change-new"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          New password
        </Label>
        <TextInput
          id="uswds-password-change-new"
          name="newPassword"
          type="password"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-password-change-confirm"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Confirm new password
        </Label>
        <TextInput
          id="uswds-password-change-confirm"
          name="confirmPassword"
          type="password"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-password-change-logout"
          name="logoutOthers"
          label="Sign out of other devices"
        />
      </FormGroup>
      <Button type="submit">Update password</Button>
    </Form>
  )
}

export default PasswordChangeForm
