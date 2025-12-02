import { useState, useCallback } from 'react'
import { FormLayout, TextField, Select, Checkbox, Button } from '@shopify/polaris'

function ContactInquiryForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  const topicOptions = [
    { label: 'Select topic', value: '' },
    { label: 'Support', value: 'support' },
    { label: 'Sales', value: 'sales' },
    { label: 'Feedback', value: 'feedback' },
    { label: 'Other', value: 'other' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Full name"
          type="text"
          value={name}
          onChange={setName}
          autoComplete="name"
          requiredIndicator
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <Select
          label="Topic"
          options={topicOptions}
          value={topic}
          onChange={setTopic}
          requiredIndicator
        />
        <TextField
          label="Message"
          value={message}
          onChange={setMessage}
          multiline={4}
          autoComplete="off"
          requiredIndicator
        />
        <Checkbox
          label="Allow follow-up communication"
          checked={consent}
          onChange={setConsent}
        />
        <Button submit variant="primary">
          Submit inquiry
        </Button>
      </FormLayout>
    </form>
  )
}

export default ContactInquiryForm
