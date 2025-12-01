import { Form, Button, Checkbox } from 'semantic-ui-react'

function JobApplicationForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-job-application-fullname"
        name="fullName"
        label="Full name"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-job-application-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Form.Input
        id="semantic-ui-job-application-phone"
        name="phone"
        label="Phone number"
        type="tel"
        required
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
      />
      <Form.Input
        id="semantic-ui-job-application-role"
        name="role"
        label="Role applied for"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-job-application-resume"
        name="resume"
        label="Resume link"
        type="url"
        required
      />
      <Form.TextArea
        id="semantic-ui-job-application-cover-letter"
        name="coverLetter"
        label="Cover letter"
        rows={4}
        required
      />
      <Form.Field>
        <Checkbox
          name="updates"
          label="Keep me informed about future roles"
        />
      </Form.Field>
      <Button type="submit" primary>
        Submit application
      </Button>
    </Form>
  )
}

export default JobApplicationForm
