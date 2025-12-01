import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Select,
  TextArea,
  TextInput,
} from 'grommet'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Full name"
        name="fullName"
        htmlFor="grommet-contact-name"
        required
      >
        <TextInput id="grommet-contact-name" name="fullName" type="text" />
      </FormField>
      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-contact-email"
        required
      >
        <TextInput id="grommet-contact-email" name="email" type="email" />
      </FormField>
      <FormField
        label="Topic"
        name="topic"
        htmlFor="grommet-contact-topic"
        required
      >
        <Select
          id="grommet-contact-topic"
          name="topic"
          options={['Support', 'Sales', 'Feedback', 'Other']}
          placeholder="Select topic"
        />
      </FormField>
      <FormField
        label="Message"
        name="message"
        htmlFor="grommet-contact-message"
        required
      >
        <TextArea id="grommet-contact-message" name="message" rows={4} />
      </FormField>
      <FormField name="consent" htmlFor="grommet-contact-consent">
        <CheckBox
          id="grommet-contact-consent"
          name="consent"
          label="Allow follow-up communication"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Submit inquiry" />
      </Box>
    </Form>
  )
}

export default ContactInquiryForm
