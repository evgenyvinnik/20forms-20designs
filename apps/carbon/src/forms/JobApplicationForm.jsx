import { Form, TextInput, TextArea, Button, Checkbox, Stack } from '@carbon/react'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-job-full-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-job-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <TextInput
          id="carbon-job-phone"
          name="phone"
          type="tel"
          labelText="Phone number"
          required
        />
        <TextInput
          id="carbon-job-role"
          name="role"
          labelText="Role applied for"
          required
        />
        <TextInput
          id="carbon-job-resume"
          name="resume"
          type="url"
          labelText="Resume link"
          required
        />
        <TextArea
          id="carbon-job-cover-letter"
          name="coverLetter"
          labelText="Cover letter"
          rows={4}
          required
        />
        <Checkbox
          id="carbon-job-updates"
          name="updates"
          labelText="Keep me informed about future roles"
        />
        <Button type="submit">Submit application</Button>
      </Stack>
    </Form>
  )
}

export default JobApplicationForm
