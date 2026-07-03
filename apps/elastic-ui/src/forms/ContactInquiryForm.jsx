import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiTextArea,
  EuiSelect,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'

const topicOptions = [
  { value: '', text: 'Select topic' },
  { value: 'support', text: 'Support' },
  { value: 'sales', text: 'Sales' },
  { value: 'feedback', text: 'Feedback' },
  { value: 'other', text: 'Other' },
]

function ContactInquiryForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Full name">
        <EuiFieldText
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Email address">
        <EuiFieldText
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Topic">
        <EuiSelect
          name="topic"
          options={topicOptions}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Message">
        <EuiTextArea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="consent-checkbox"
          name="consent"
          label="Allow follow-up communication"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Submit inquiry
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default ContactInquiryForm
