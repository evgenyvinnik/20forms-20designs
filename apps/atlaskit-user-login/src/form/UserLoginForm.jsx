import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Inline, Stack } from '@atlaskit/primitives'

function UserLoginForm() {
  const handleSubmit = () => {
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field name="identifier" label="Email or username" isRequired>
              {({ fieldProps }) => <Textfield {...fieldProps} />}
            </Field>

            <Field name="password" label="Password" isRequired>
              {({ fieldProps }) => (
                <Textfield {...fieldProps} type="password" />
              )}
            </Field>

            <Field name="remember">
              {({ fieldProps }) => (
                <Checkbox {...fieldProps} label="Keep me signed in" />
              )}
            </Field>

            <FormFooter>
              <Inline space="space.100">
                <Button type="submit" appearance="primary">
                  Sign in
                </Button>
                <Button
                  appearance="default"
                  onClick={() => alert('Password reset link flow placeholder')}
                >
                  Forgot password?
                </Button>
              </Inline>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default UserLoginForm
