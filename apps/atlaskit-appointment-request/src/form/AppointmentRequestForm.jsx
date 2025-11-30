import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

function AppointmentRequestForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data)
    alert('Appointment request submitted!')
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
              name="date"
              label="Preferred date"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield {...fieldProps} type="date" />
              )}
            </Field>

            <Field
              name="time"
              label="Preferred time"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield {...fieldProps} type="time" />
              )}
            </Field>

            <Field
              name="reason"
              label="Reason for visit"
              isRequired
            >
              {({ fieldProps }) => (
                <TextArea
                  {...fieldProps}
                  placeholder="Enter reason for your visit"
                  minimumRows={3}
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Request appointment
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default AppointmentRequestForm
