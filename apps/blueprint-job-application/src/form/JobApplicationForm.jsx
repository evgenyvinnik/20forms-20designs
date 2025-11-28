import {
  Button,
  Checkbox,
  FormGroup,
  InputGroup,
  TextArea,
} from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Full name" labelFor="blueprint-job-full-name">
        <InputGroup
          id="blueprint-job-full-name"
          name="fullName"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Email address" labelFor="blueprint-job-email">
        <InputGroup
          id="blueprint-job-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Phone number" labelFor="blueprint-job-phone">
        <InputGroup
          id="blueprint-job-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          pattern="[+0-9\\s-]{7,20}"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Role applied for" labelFor="blueprint-job-role">
        <InputGroup
          id="blueprint-job-role"
          name="role"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Resume link" labelFor="blueprint-job-resume">
        <InputGroup
          id="blueprint-job-resume"
          name="resume"
          type="url"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Cover letter" labelFor="blueprint-job-cover-letter">
        <TextArea
          id="blueprint-job-cover-letter"
          name="coverLetter"
          rows={4}
          required
          fill
        />
      </FormGroup>
      <Checkbox
        label="Keep me informed about future roles"
        name="updates"
      />
      <Button intent="primary" type="submit">
        Submit application
      </Button>
    </form>
  )
}

export default JobApplicationForm
