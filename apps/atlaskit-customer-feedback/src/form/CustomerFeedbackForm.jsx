import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

const ratingOptions = [
  { label: 'Excellent', value: 'excellent' },
  { label: 'Good', value: 'good' },
  { label: 'Average', value: 'average' },
  { label: 'Poor', value: 'poor' },
]

function CustomerFeedbackForm() {
  const [followUp, setFollowUp] = useState(false)

  const handleSubmit = (data) => {
    console.log('Form data:', { ...data, followUp })
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field
              name="name"
              label="Name"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter your name"
                />
              )}
            </Field>

            <Field
              name="email"
              label="Email address"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  type="email"
                  placeholder="Enter your email"
                />
              )}
            </Field>

            <Field
              name="rating"
              label="Overall rating"
              isRequired
            >
              {({ fieldProps }) => (
                <Select
                  {...fieldProps}
                  options={ratingOptions}
                  placeholder="Select rating"
                  isClearable
                />
              )}
            </Field>

            <Field
              name="comments"
              label="Comments"
              isRequired
            >
              {({ fieldProps }) => (
                <TextArea
                  {...fieldProps}
                  placeholder="Enter your comments"
                  minimumRows={4}
                />
              )}
            </Field>

            <Checkbox
              name="followUp"
              label="I would like a follow-up"
              isChecked={followUp}
              onChange={(e) => setFollowUp(e.target.checked)}
            />

            <FormFooter>
              <Button type="submit" appearance="primary">
                Send feedback
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default CustomerFeedbackForm
