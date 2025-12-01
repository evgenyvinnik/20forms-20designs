import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Textarea,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function ContactInquiryForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-contact-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Full name
        </Label>
        <TextInput
          id="uswds-contact-name"
          name="fullName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-contact-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-contact-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-contact-topic"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Topic
        </Label>
        <Select
          id="uswds-contact-topic"
          name="topic"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-contact-message"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Message
        </Label>
        <Textarea
          id="uswds-contact-message"
          name="message"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-contact-consent"
          name="consent"
          label="Allow follow-up communication"
        />
      </FormGroup>
      <Button type="submit">Submit inquiry</Button>
    </Form>
  )
}

export default ContactInquiryForm
