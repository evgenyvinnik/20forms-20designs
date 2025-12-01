import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiTextArea,
  EuiSelect,
  EuiButton,
} from '@elastic/eui'

const subjectOptions = [
  { value: '', text: 'Select a subject' },
  { value: 'general', text: 'General Inquiry' },
  { value: 'support', text: 'Technical Support' },
  { value: 'sales', text: 'Sales' },
  { value: 'feedback', text: 'Feedback' },
]

function ContactInquiryForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Inquiry submitted successfully!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Name">
        <EuiFieldText
          value={name}
          onChange={(e) => setName(e.target.value)}
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

      <EuiFormRow label="Subject">
        <EuiSelect
          options={subjectOptions}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Message">
        <EuiTextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Send message
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default ContactInquiryForm
