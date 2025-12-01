import {
  Button,
  Checkbox,
  Pane,
  SelectField,
  TextInputField,
  TextareaField,
} from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField
        id="evergreen-contact-name"
        label="Full name"
        name="fullName"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-contact-email"
        label="Email address"
        name="email"
        type="email"
        required
      />
      <SelectField
        id="evergreen-contact-topic"
        label="Topic"
        name="topic"
        defaultValue=""
        required
      >
        <option value="">Select topic</option>
        <option value="support">Support</option>
        <option value="sales">Sales</option>
        <option value="feedback">Feedback</option>
        <option value="other">Other</option>
      </SelectField>
      <TextareaField
        id="evergreen-contact-message"
        label="Message"
        name="message"
        rows={4}
        required
      />
      <Checkbox label="Allow follow-up communication" name="consent" />
      <Button appearance="primary" type="submit">
        Submit inquiry
      </Button>
    </Pane>
  )
}

export default ContactInquiryForm
