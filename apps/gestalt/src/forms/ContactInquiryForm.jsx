import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  SelectList,
  TextArea,
  TextField,
} from 'gestalt'

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
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-contact-name"
          label="Full name"
          onChange={({ value }) => setFullName(value)}
          type="text"
          value={fullName}
        />
        <TextField
          id="gestalt-contact-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <SelectList
          id="gestalt-contact-topic"
          label="Topic"
          onChange={({ value }) => setTopic(value)}

          value={topic}
        >
          {[
            { label: 'Support', value: 'support' },
            { label: 'Sales', value: 'sales' },
            { label: 'Feedback', value: 'feedback' },
            { label: 'Other', value: 'other' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <TextArea
          id="gestalt-contact-message"
          label="Message"
          onChange={({ value }) => setMessage(value)}

          rows={4}
          value={message}
        />
        <Checkbox
          checked={consent}
          id="gestalt-contact-consent"
          label="Allow follow-up communication"
          onChange={({ checked }) => setConsent(checked)}
        />
        <Box>
          <Button color="red" text="Submit inquiry" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default ContactInquiryForm
