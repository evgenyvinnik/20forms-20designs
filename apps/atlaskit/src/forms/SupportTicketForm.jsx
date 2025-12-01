import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { RadioGroup } from '@atlaskit/radio'
import { Label } from '@atlaskit/form'
import { Box, Stack, Text } from '@atlaskit/primitives'

const priorityOptions = [
  { name: 'priority', value: 'low', label: 'Low' },
  { name: 'priority', value: 'medium', label: 'Medium' },
  { name: 'priority', value: 'high', label: 'High' },
]

function SupportTicketForm() {
  const [priority, setPriority] = useState('low')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-ticket-subject">Subject</Label>
          <Textfield
            id="atlaskit-ticket-subject"
            name="subject"
            isRequired
          />
        </Box>
        <Box>
          <Text as="strong">Priority</Text>
          <RadioGroup
            name="priority"
            options={priorityOptions}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-ticket-description">Issue description</Label>
          <TextArea
            id="atlaskit-ticket-description"
            name="description"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-ticket-attachments">Attachments</Label>
          <input
            id="atlaskit-ticket-attachments"
            name="attachments"
            type="file"
            multiple
            style={{ display: 'block', marginTop: '8px' }}
          />
        </Box>
        <Button type="submit" appearance="primary">Submit ticket</Button>
      </Stack>
    </form>
  )
}

export default SupportTicketForm
