import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Checkbox,
  Container,
  FormField,
  Input,
  Select,
  SpaceBetween,
  Textarea,
} from '@cloudscape-design/components'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Full name">
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </FormField>
          <FormField label="Email address">
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </FormField>
          <FormField label="Topic">
            <Select
              name="topic"
              placeholder="Select topic"
              options={[
                { label: 'Support', value: 'support' },
                { label: 'Sales', value: 'sales' },
                { label: 'Feedback', value: 'feedback' },
                { label: 'Other', value: 'other' },
              ]}
              selectedOption={null}
            />
          </FormField>
          <FormField label="Message">
            <Textarea
              name="message"
              placeholder="Enter your message"
              rows={4}
            />
          </FormField>
          <Checkbox name="consent">Allow follow-up communication</Checkbox>
          <Button variant="primary" formAction="submit">
            Submit inquiry
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default ContactInquiryForm
