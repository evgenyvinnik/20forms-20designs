import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const topicOptions = [
  { label: 'Support', value: 'support' },
  { label: 'Sales', value: 'sales' },
  { label: 'Feedback', value: 'feedback' },
  { label: 'Other', value: 'other' },
]

function ContactInquiryForm() {
  const [topic, setTopic] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-contact-name">Full name</Label>
          <Textfield
            id="atlaskit-contact-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-contact-email">Email address</Label>
          <Textfield
            id="atlaskit-contact-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-contact-topic">Topic</Label>
          <Select
            inputId="atlaskit-contact-topic"
            name="topic"
            options={topicOptions}
            value={topic}
            onChange={setTopic}
            placeholder="Select topic"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-contact-message">Message</Label>
          <TextArea
            id="atlaskit-contact-message"
            name="message"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="consent"
            label="Allow follow-up communication"
          />
        </Box>
        <Button type="submit" appearance="primary">Submit inquiry</Button>
      </Stack>
    </form>
  )
}

export default ContactInquiryForm
