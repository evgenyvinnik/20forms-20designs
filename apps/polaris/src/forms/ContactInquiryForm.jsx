import { useState, useCallback } from 'react'
import { FormLayout, TextField, Select, Button } from '@shopify/polaris'

function ContactInquiryForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const subjectOptions = [
    { label: 'Select a subject', value: '' },
    { label: 'General inquiry', value: 'general' },
    { label: 'Sales', value: 'sales' },
    { label: 'Support', value: 'support' },
    { label: 'Feedback', value: 'feedback' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Inquiry submitted successfully!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Name"
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
          label="Subject"
          options={subjectOptions}
          value={subject}
          onChange={setSubject}
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
        <Button submit variant="primary">
          Send message
        </Button>
      </FormLayout>
    </form>
  )
}

export default ContactInquiryForm
