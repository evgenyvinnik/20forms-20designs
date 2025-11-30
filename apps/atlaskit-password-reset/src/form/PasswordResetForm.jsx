import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack, Text } from '@atlaskit/primitives'

function PasswordResetForm() {
  const handleSubmit = () => {
    alert('Password reset link requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Text>Request a password reset link via email.</Text>

            <Field name="email" label="Email address" isRequired>
              {({ fieldProps }) => <Textfield {...fieldProps} type="email" />}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Send reset link
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default PasswordResetForm
