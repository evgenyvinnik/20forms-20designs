import { useState } from 'react'
import {
  Button,
  RadioGroup,
  Text,
  TextArea,
  TextInput,
  useFileInput,
} from '@gravity-ui/uikit'

import { Field, formStackStyle } from './common.jsx'

const priorityOptions = [
  { value: 'low', content: 'Low' },
  { value: 'medium', content: 'Medium' },
  { value: 'high', content: 'High' },
]

function SupportTicketForm() {
  const [attachments, setAttachments] = useState([])
  const { controlProps, triggerProps } = useFileInput({
    onUpdate: (files) => setAttachments(files.map((file) => file.name)),
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-ticket-subject"
        label="Subject"
        name="subject"
        controlProps={{ required: true }}
      />
      <RadioGroup
        label="Priority"
        name="priority"
        defaultValue="low"
        options={priorityOptions}
      />
      <Field label="Issue description" htmlFor="gravity-ticket-description">
        <TextArea
          id="gravity-ticket-description"
          name="description"
          rows={4}
          controlProps={{ required: true }}
        />
      </Field>
      <Field label="Attachments" htmlFor="gravity-ticket-attachments">
        <input
          {...controlProps}
          id="gravity-ticket-attachments"
          name="attachments"
          multiple
        />
        <Button view="flat" type="button" {...triggerProps}>
          Choose files
        </Button>
        {attachments.length > 0 && (
          <Text variant="caption-1">{attachments.join(', ')}</Text>
        )}
      </Field>
      <Button view="action" type="submit">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
