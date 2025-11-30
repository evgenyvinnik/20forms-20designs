import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter, Fieldset } from '@atlaskit/form'
import { Stack, Text } from '@atlaskit/primitives'

function PrivacyConsentForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data)
    alert('Privacy preferences saved!')
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

            <Fieldset legend="Communication channels">
              <Stack space="space.100">
                <Field name="emailOptIn">
                  {({ fieldProps }) => (
                    <Checkbox
                      {...fieldProps}
                      label="Email updates"
                    />
                  )}
                </Field>
                <Field name="smsOptIn">
                  {({ fieldProps }) => (
                    <Checkbox
                      {...fieldProps}
                      label="SMS notifications"
                    />
                  )}
                </Field>
                <Field name="phoneOptIn">
                  {({ fieldProps }) => (
                    <Checkbox
                      {...fieldProps}
                      label="Phone calls"
                    />
                  )}
                </Field>
              </Stack>
            </Fieldset>

            <Fieldset legend="Privacy options">
              <Stack space="space.100">
                <Field name="analytics">
                  {({ fieldProps }) => (
                    <Checkbox
                      {...fieldProps}
                      label="Allow analytics cookies"
                    />
                  )}
                </Field>
                <Field name="personalization">
                  {({ fieldProps }) => (
                    <Checkbox
                      {...fieldProps}
                      label="Allow personalized content"
                    />
                  )}
                </Field>
              </Stack>
            </Fieldset>

            <Field name="notes" label="Additional notes">
              {({ fieldProps }) => <TextArea {...fieldProps} rows={3} />}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Save preferences
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default PrivacyConsentForm
