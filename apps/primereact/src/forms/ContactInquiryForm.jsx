import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputTextarea } from 'primereact/inputtextarea'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

const topicOptions = [
  { label: 'Select topic', value: '' },
  { label: 'Support', value: 'support' },
  { label: 'Sales', value: 'sales' },
  { label: 'Feedback', value: 'feedback' },
  { label: 'Other', value: 'other' },
]

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

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-contact-name"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Full name
        </label>
        <InputText
          id="primereact-contact-name"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-contact-email"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Email address
        </label>
        <InputText
          id="primereact-contact-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-contact-topic"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Topic
        </label>
        <Dropdown
          id="primereact-contact-topic"
          name="topic"
          value={topic}
          options={topicOptions}
          onChange={(e) => setTopic(e.value)}
          placeholder="Select topic"
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-contact-message"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Message
        </label>
        <InputTextarea
          id="primereact-contact-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div
        className="field-checkbox"
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Checkbox
          inputId="primereact-contact-consent"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.checked)}
        />
        <label htmlFor="primereact-contact-consent">
          Allow follow-up communication
        </label>
      </div>
      <Button type="submit" label="Submit inquiry" />
    </form>
  )
}

export default ContactInquiryForm
