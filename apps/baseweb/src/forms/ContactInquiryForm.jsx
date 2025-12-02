import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Select } from 'baseui/select'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function ContactInquiryForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState([])
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  const topicOptions = [
    { label: 'Support', id: 'support' },
    { label: 'Sales', id: 'sales' },
    { label: 'Feedback', id: 'feedback' },
    { label: 'Other', id: 'other' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale200">
        <FormControl label="Full name">
          <Input
            id="baseweb-contact-name"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Email address">
          <Input
            id="baseweb-contact-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Topic">
          <Select
            id="baseweb-contact-topic"
            options={topicOptions}
            value={topic}
            placeholder="Select topic"
            onChange={(params) => setTopic(params.value)}
            required
          />
        </FormControl>
        <FormControl label="Message">
          <Textarea
            id="baseweb-contact-message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </FormControl>
        <Checkbox
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        >
          Allow follow-up communication
        </Checkbox>
        <Button type="submit">Submit inquiry</Button>
      </Block>
    </form>
  )
}

export default ContactInquiryForm
