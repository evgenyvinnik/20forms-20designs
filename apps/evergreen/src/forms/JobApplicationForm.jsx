import {
  Button,
  Checkbox,
  Pane,
  TextInputField,
  TextareaField,
} from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField
        id="evergreen-job-full-name"
        label="Full name"
        name="fullName"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-job-email"
        label="Email address"
        name="email"
        type="email"
        required
      />
      <TextInputField
        id="evergreen-job-phone"
        label="Phone number"
        name="phone"
        type="tel"
        inputMode="tel"
        pattern="[+0-9\\s-]{7,20}"
        required
      />
      <TextInputField
        id="evergreen-job-role"
        label="Role applied for"
        name="role"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-job-resume"
        label="Resume link"
        name="resume"
        type="url"
        required
      />
      <TextareaField
        id="evergreen-job-cover-letter"
        label="Cover letter"
        name="coverLetter"
        rows={4}
        required
      />
      <Checkbox label="Keep me informed about future roles" name="updates" />
      <Button appearance="primary" type="submit">
        Submit application
      </Button>
    </Pane>
  )
}

export default JobApplicationForm
