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

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Name">
            <Input name="name" type="text" placeholder="Your name" required />
          </FormField>
          <FormField label="Email address">
            <Input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </FormField>
          <FormField label="Overall rating">
            <Select
              name="rating"
              placeholder="Select rating"
              options={[
                { label: 'Excellent', value: 'excellent' },
                { label: 'Good', value: 'good' },
                { label: 'Average', value: 'average' },
                { label: 'Poor', value: 'poor' },
              ]}
              selectedOption={null}
            />
          </FormField>
          <FormField label="Comments">
            <Textarea
              name="comments"
              placeholder="Share your feedback"
              rows={4}
            />
          </FormField>
          <Checkbox name="followUp">I would like a follow-up</Checkbox>
          <Button variant="primary" formAction="submit">
            Send feedback
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default CustomerFeedbackForm
