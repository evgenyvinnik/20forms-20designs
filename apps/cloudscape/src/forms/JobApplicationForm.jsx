import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Checkbox,
  Container,
  FormField,
  Input,
  SpaceBetween,
  Textarea,
} from '@cloudscape-design/components'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Full name">
            <Input
              id="cloudscape-job-application-full-name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </FormField>
          <FormField label="Email address">
            <Input
              id="cloudscape-job-application-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </FormField>
          <FormField label="Phone number">
            <Input
              id="cloudscape-job-application-phone"
              name="phone"
              type="tel"
              placeholder="+1 234 567 8900"
              required
            />
          </FormField>
          <FormField label="Role applied for">
            <Input
              id="cloudscape-job-application-role"
              name="role"
              type="text"
              placeholder="Position title"
              required
            />
          </FormField>
          <FormField label="Resume link">
            <Input
              id="cloudscape-job-application-resume"
              name="resume"
              type="url"
              placeholder="https://"
              required
            />
          </FormField>
          <FormField label="Cover letter">
            <Textarea
              id="cloudscape-job-application-cover-letter"
              name="coverLetter"
              placeholder="Tell us why you're a great fit"
              rows={4}
            />
          </FormField>
          <Checkbox name="updates">
            Keep me informed about future roles
          </Checkbox>
          <Button variant="primary" formAction="submit">
            Submit application
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default JobApplicationForm
