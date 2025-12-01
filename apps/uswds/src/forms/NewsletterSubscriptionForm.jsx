import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function NewsletterSubscriptionForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
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
          htmlFor="uswds-newsletter-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-newsletter-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-newsletter-frequency"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Frequency
        </Label>
        <Select
          id="uswds-newsletter-frequency"
          name="frequency"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-newsletter-agree"
          name="agree"
          label="Receive product updates"
        />
      </FormGroup>
      <Button type="submit">Subscribe</Button>
    </Form>
  )
}

export default NewsletterSubscriptionForm
