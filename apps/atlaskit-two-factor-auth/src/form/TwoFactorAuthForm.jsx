import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack, Inline, Text } from '@atlaskit/primitives'

function TwoFactorAuthForm() {
  const handleSubmit = (data) => {
    alert('Verification submitted!')
  }

  const handleResendCode = () => {
    alert('A new code has been sent!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Text as="p">
              Enter the code from your authenticator app or SMS.
            </Text>

            <Field
              name="code"
              label="Verification code"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  type="text"
                  inputMode="numeric"
                  pattern="\d{6}"
                  maxLength={6}
                  placeholder="Enter 6-digit code"
                />
              )}
            </Field>

            <Field
              name="backupCode"
              label="Backup code (optional)"
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  type="text"
                  pattern="[A-Za-z0-9]{6,12}"
                  placeholder="Enter backup code"
                />
              )}
            </Field>

            <FormFooter>
              <Inline space="space.100">
                <Button
                  type="button"
                  appearance="subtle"
                  onClick={handleResendCode}
                >
                  Resend code
                </Button>
                <Button type="submit" appearance="primary">
                  Verify
                </Button>
              </Inline>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default TwoFactorAuthForm
