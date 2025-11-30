import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

const topicOptions = [
  { label: 'Support', value: 'support' },
  { label: 'Sales', value: 'sales' },
  { label: 'Feedback', value: 'feedback' },
  { label: 'Other', value: 'other' },
]

function ContactInquiryForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data)
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field
              name="fullName"
              label="Full name"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield {...fieldProps} placeholder="Enter your full name" />
              )}
            </Field>

            <Field
              name="email"
              label="Email address"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield {...fieldProps} type="email" placeholder="Enter your email" />
              )}
            </Field>

            <Field
              name="topic"
              label="Topic"
              isRequired
            >
              {({ fieldProps }) => (
                <Select
                  {...fieldProps}
                  options={topicOptions}
                  placeholder="Select topic"
                  inputId={fieldProps.id}
                />
              )}
            </Field>

            <Field
              name="message"
              label="Message"
              isRequired
            >
              {({ fieldProps }) => (
                <TextArea
                  {...fieldProps}
                  placeholder="Enter your message"
                  minimumRows={4}
                />
              )}
            </Field>

            <Field name="consent">
              {({ fieldProps }) => (
                <Checkbox
                  {...fieldProps}
                  label="Allow follow-up communication"
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Submit inquiry
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default ContactInquiryForm
