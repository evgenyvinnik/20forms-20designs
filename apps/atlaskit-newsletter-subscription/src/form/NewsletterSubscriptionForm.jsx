import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

const frequencyOptions = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
]

function NewsletterSubscriptionForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data)
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field
              name="email"
              label="Email address"
              isRequired
              validate={(value) => {
                if (!value) {
                  return 'Email is required'
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  return 'Please enter a valid email address'
                }
                return undefined
              }}
            >
              {({ fieldProps, error }) => (
                <>
                  <Textfield
                    {...fieldProps}
                    type="email"
                    placeholder="Enter your email"
                  />
                  {error && (
                    <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                      {error}
                    </div>
                  )}
                </>
              )}
            </Field>

            <Field
              name="frequency"
              label="Frequency"
              isRequired
              validate={(value) => {
                if (!value) {
                  return 'Please select a frequency'
                }
                return undefined
              }}
            >
              {({ fieldProps, error }) => (
                <>
                  <Select
                    {...fieldProps}
                    options={frequencyOptions}
                    placeholder="Select frequency"
                    isClearable
                    onChange={(option) => fieldProps.onChange(option)}
                  />
                  {error && (
                    <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                      {error}
                    </div>
                  )}
                </>
              )}
            </Field>

            <Field name="productUpdates" defaultValue={false}>
              {({ fieldProps }) => (
                <Checkbox
                  {...fieldProps}
                  label="Receive product updates"
                  isChecked={fieldProps.value}
                  onChange={(e) => fieldProps.onChange(e.target.checked)}
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Subscribe
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default NewsletterSubscriptionForm
