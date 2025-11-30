import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

function UserRegistrationForm() {
  const handleSubmit = () => {
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field name="fullName" label="Full name" isRequired>
              {({ fieldProps }) => <Textfield {...fieldProps} />}
            </Field>

            <Field name="email" label="Email address" isRequired>
              {({ fieldProps }) => <Textfield {...fieldProps} type="email" />}
            </Field>

            <Field name="username" label="Username" isRequired>
              {({ fieldProps }) => (
                <Textfield {...fieldProps} minLength={3} />
              )}
            </Field>

            <Field name="password" label="Password" isRequired>
              {({ fieldProps }) => (
                <Textfield {...fieldProps} type="password" minLength={8} />
              )}
            </Field>

            <Field name="confirmPassword" label="Confirm password" isRequired>
              {({ fieldProps }) => (
                <Textfield {...fieldProps} type="password" minLength={8} />
              )}
            </Field>

            <Field name="terms" isRequired>
              {({ fieldProps }) => (
                <Checkbox {...fieldProps} label="I agree to the terms and conditions" />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Create account
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default UserRegistrationForm
