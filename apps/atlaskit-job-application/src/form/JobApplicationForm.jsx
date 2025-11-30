import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

function JobApplicationForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data)
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field name="fullName" label="Full name" isRequired>
              {({ fieldProps }) => (
                <Textfield {...fieldProps} placeholder="Enter your full name" />
              )}
            </Field>

            <Field name="email" label="Email address" isRequired>
              {({ fieldProps }) => (
                <Textfield {...fieldProps} type="email" placeholder="Enter your email" />
              )}
            </Field>

            <Field name="phone" label="Phone number" isRequired>
              {({ fieldProps }) => (
                <Textfield {...fieldProps} type="tel" placeholder="Enter your phone number" />
              )}
            </Field>

            <Field name="role" label="Role applied for" isRequired>
              {({ fieldProps }) => (
                <Textfield {...fieldProps} placeholder="Enter the role you're applying for" />
              )}
            </Field>

            <Field name="resume" label="Resume link" isRequired>
              {({ fieldProps }) => (
                <Textfield {...fieldProps} type="url" placeholder="Enter your resume URL" />
              )}
            </Field>

            <Field name="coverLetter" label="Cover letter" isRequired>
              {({ fieldProps }) => (
                <TextArea
                  {...fieldProps}
                  placeholder="Write your cover letter"
                  minimumRows={4}
                />
              )}
            </Field>

            <Field name="updates">
              {({ fieldProps }) => (
                <Checkbox
                  {...fieldProps}
                  label="Keep me informed about future roles"
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Submit application
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default JobApplicationForm
