import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Dropdown, Textarea, Checkbox, Button } from 'braid-design-system'

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
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-contact-name"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <TextField
          id="braid-contact-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Dropdown
          id="braid-contact-topic"
          label="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Select topic"
        >
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </Dropdown>

        <Textarea
          id="braid-contact-message"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          lines={4}
          required
        />

        <Checkbox
          id="braid-contact-consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        >
          Allow follow-up communication
        </Checkbox>

        <Box>
          <Button type="submit">Submit inquiry</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default ContactInquiryForm
