import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

function PasswordChangeForm() {
  const handleSubmit = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    alert('Password change requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field
              name="currentPassword"
              label="Current password"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  type="password"
                  autoComplete="current-password"
                />
              )}
            </Field>

            <Field
              name="newPassword"
              label="New password"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  type="password"
                  autoComplete="new-password"
                />
              )}
            </Field>

            <Field
              name="confirmPassword"
              label="Confirm new password"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  type="password"
                  autoComplete="new-password"
                />
              )}
            </Field>

            <Field name="logoutOthers">
              {({ fieldProps }) => (
                <Checkbox
                  {...fieldProps}
                  label="Sign out of other devices"
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Update password
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default PasswordChangeForm
