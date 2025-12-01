import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  Checkbox,
  ActionGroup,
  FormSelect,
  FormSelectOption,
} from '@patternfly/react-core'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Full name" isRequired fieldId="pf-contact-name">
        <TextInput
          isRequired
          type="text"
          id="pf-contact-name"
          name="fullName"
        />
      </FormGroup>
      <FormGroup label="Email address" isRequired fieldId="pf-contact-email">
        <TextInput isRequired type="email" id="pf-contact-email" name="email" />
      </FormGroup>
      <FormGroup label="Topic" isRequired fieldId="pf-contact-topic">
        <FormSelect id="pf-contact-topic" name="topic" isRequired>
          <FormSelectOption value="" label="Select topic" isPlaceholder />
          <FormSelectOption value="support" label="Support" />
          <FormSelectOption value="sales" label="Sales" />
          <FormSelectOption value="feedback" label="Feedback" />
          <FormSelectOption value="other" label="Other" />
        </FormSelect>
      </FormGroup>
      <FormGroup label="Message" isRequired fieldId="pf-contact-message">
        <TextArea isRequired id="pf-contact-message" name="message" rows={4} />
      </FormGroup>
      <FormGroup fieldId="pf-contact-consent">
        <Checkbox
          label="Allow follow-up communication"
          id="pf-contact-consent"
          name="consent"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Submit inquiry
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default ContactInquiryForm
