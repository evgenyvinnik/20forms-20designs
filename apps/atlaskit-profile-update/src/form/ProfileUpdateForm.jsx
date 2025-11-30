import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

function ProfileUpdateForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data)
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field
              name="firstName"
              label="First name"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter your first name"
                />
              )}
            </Field>

            <Field
              name="lastName"
              label="Last name"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter your last name"
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
                  placeholder="Enter your email address"
                />
              )}
            </Field>

            <Field
              name="phone"
              label="Phone number"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  type="tel"
                  placeholder="Enter your phone number"
                />
              )}
            </Field>

            <Field
              name="bio"
              label="Short bio"
              isRequired
            >
              {({ fieldProps }) => (
                <TextArea
                  {...fieldProps}
                  placeholder="Tell us about yourself"
                  minimumRows={3}
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Save changes
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default ProfileUpdateForm
