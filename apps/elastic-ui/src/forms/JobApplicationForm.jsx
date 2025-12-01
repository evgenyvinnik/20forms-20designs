import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiTextArea,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'

function JobApplicationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [resume, setResume] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Application submitted!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Full name">
        <EuiFieldText
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Phone number">
        <EuiFieldText
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Role applied for">
        <EuiFieldText
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Resume link">
        <EuiFieldText
          type="url"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Cover letter">
        <EuiTextArea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          rows={4}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="updates"
          label="Keep me informed about future roles"
          checked={updates}
          onChange={(e) => setUpdates(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Submit application
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default JobApplicationForm
