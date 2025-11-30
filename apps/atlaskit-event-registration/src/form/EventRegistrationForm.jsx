import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

const ticketOptions = [
  { label: 'General admission', value: 'general' },
  { label: 'VIP', value: 'vip' },
  { label: 'Student', value: 'student' },
]

function EventRegistrationForm() {
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = (data) => {
    console.log('Form data:', { ...data, newsletter })
    alert('Event registration submitted!')
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

            <Field name="ticketType" label="Ticket type" isRequired>
              {({ fieldProps }) => (
                <Select
                  {...fieldProps}
                  options={ticketOptions}
                  placeholder="Select ticket"
                  onChange={(option) => fieldProps.onChange(option)}
                />
              )}
            </Field>

            <Field name="guestCount" label="Number of guests" isRequired>
              {({ fieldProps }) => (
                <Textfield {...fieldProps} type="number" min={0} max={20} />
              )}
            </Field>

            <Checkbox
              name="newsletter"
              label="Notify me about future events"
              isChecked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />

            <FormFooter>
              <Button type="submit" appearance="primary">
                Register
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default EventRegistrationForm
