import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Select,
  TextInput,
} from 'grommet'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-newsletter-email"
        required
      >
        <TextInput id="grommet-newsletter-email" name="email" type="email" />
      </FormField>
      <FormField
        label="Frequency"
        name="frequency"
        htmlFor="grommet-newsletter-frequency"
        required
      >
        <Select
          id="grommet-newsletter-frequency"
          name="frequency"
          options={['Weekly', 'Monthly', 'Quarterly']}
        />
      </FormField>
      <FormField name="agree" htmlFor="grommet-newsletter-agree">
        <CheckBox
          id="grommet-newsletter-agree"
          name="agree"
          label="Receive product updates"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Subscribe" />
      </Box>
    </Form>
  )
}

export default NewsletterSubscriptionForm
