import { Button, Checkbox, TextArea, TextInput } from '@gravity-ui/uikit'

import { Field, formStackStyle } from './common.jsx'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-job-full-name"
        label="Full name"
        name="fullName"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-job-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-job-phone"
        label="Phone number"
        name="phone"
        type="tel"
        controlProps={{
          required: true,
          inputMode: 'tel',
          pattern: '[+0-9\\s-]{7,20}',
        }}
      />
      <TextInput
        id="gravity-job-role"
        label="Role applied for"
        name="role"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-job-resume"
        label="Resume link"
        name="resume"
        type="url"
        controlProps={{ required: true }}
      />
      <Field label="Cover letter" htmlFor="gravity-job-cover-letter">
        <TextArea
          id="gravity-job-cover-letter"
          name="coverLetter"
          rows={4}
          controlProps={{ required: true }}
        />
      </Field>
      <Checkbox
        name="updates"
        value="yes"
        content="Keep me informed about future roles"
      />
      <Button view="action" type="submit">
        Submit application
      </Button>
    </form>
  )
}

export default JobApplicationForm
