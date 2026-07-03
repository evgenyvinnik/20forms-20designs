import { useState } from 'react'
import {
  TextInput,
  Selector,
  TextArea,
  CheckboxInput,
  Button,
} from '@astryxdesign/core'

function ContactInquiryForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  const topicOptions = [
    { value: '', label: 'Select topic' },
    { value: 'support', label: 'Support' },
    { value: 'sales', label: 'Sales' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' },
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-contact-name"
        name="fullName"
        type="text"
        label="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-contact-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Selector
        id="astryx-contact-topic"
        name="topic"
        label="Topic"
        value={topic}
        onChange={(val) => setTopic(val)}
        options={topicOptions}
      />

      <TextArea
        id="astryx-contact-message"
        name="message"
        label="Message"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <CheckboxInput
        name="consent"
        label="Allow follow-up communication"
        checked={consent}
        onChange={(e) => setConsent(e.target.checked)}
      />

      <Button type="submit" variant="primary">
        Submit inquiry
      </Button>
    </form>
  )
}

export default ContactInquiryForm
