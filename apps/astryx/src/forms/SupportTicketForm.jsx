import { useState } from 'react'
import {
  TextInput,
  RadioList,
  RadioListItem,
  TextArea,
  FileInput,
  Button,
} from '@astryxdesign/core'

function SupportTicketForm() {
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState('low')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-ticket-subject"
        name="subject"
        type="text"
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <RadioList
        label="Priority"
        value={priority}
        onChange={(val) => setPriority(val)}
      >
        <RadioListItem value="low" label="Low" />
        <RadioListItem value="medium" label="Medium" />
        <RadioListItem value="high" label="High" />
      </RadioList>

      <TextArea
        id="astryx-ticket-description"
        name="description"
        label="Issue description"
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <FileInput
        id="astryx-ticket-attachments"
        name="attachments"
        label="Attachments"
        multiple
      />

      <Button type="submit" variant="primary">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
