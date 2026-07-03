import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Checkbox,
  ActionGroup,
} from '@patternfly/react-core'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup
        label="Current password"
        isRequired
        fieldId="pf-password-change-current"
      >
        <TextInput
          isRequired
          type="password"
          id="pf-password-change-current"
          name="currentPassword"
        />
      </FormGroup>
      <FormGroup
        label="New password"
        isRequired
        fieldId="pf-password-change-new"
      >
        <TextInput
          isRequired
          type="password"
          id="pf-password-change-new"
          name="newPassword"
          minLength={8}
        />
      </FormGroup>
      <FormGroup
        label="Confirm new password"
        isRequired
        fieldId="pf-password-change-confirm"
      >
        <TextInput
          isRequired
          type="password"
          id="pf-password-change-confirm"
          name="confirmPassword"
          minLength={8}
        />
      </FormGroup>
      <FormGroup fieldId="pf-password-change-logout">
        <Checkbox
          label="Sign out of other devices"
          id="pf-password-change-logout"
          name="logoutOthers"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Update password
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default PasswordChangeForm
