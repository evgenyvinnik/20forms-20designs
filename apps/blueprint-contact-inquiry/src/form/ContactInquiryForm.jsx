import {
  Button,
  Checkbox,
  FormGroup,
  HTMLSelect,
  InputGroup,
  TextArea,
} from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Full name" labelFor="blueprint-contact-name">
        <InputGroup
          id="blueprint-contact-name"
          name="fullName"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Email address" labelFor="blueprint-contact-email">
        <InputGroup
          id="blueprint-contact-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Topic" labelFor="blueprint-contact-topic">
        <HTMLSelect
          id="blueprint-contact-topic"
          name="topic"
          required
          fill
          options={[
            { label: 'Select topic', value: '' },
            { label: 'Support', value: 'support' },
            { label: 'Sales', value: 'sales' },
            { label: 'Feedback', value: 'feedback' },
            { label: 'Other', value: 'other' },
          ]}
        />
      </FormGroup>
      <FormGroup label="Message" labelFor="blueprint-contact-message">
        <TextArea
          id="blueprint-contact-message"
          name="message"
          rows={4}
          required
          fill
        />
      </FormGroup>
      <Checkbox label="Allow follow-up communication" name="consent" />
      <Button intent="primary" type="submit">
        Submit inquiry
      </Button>
    </form>
  )
}

export default ContactInquiryForm
