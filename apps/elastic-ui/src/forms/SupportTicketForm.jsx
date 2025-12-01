import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiTextArea,
  EuiRadioGroup,
  EuiFilePicker,
  EuiButton,
} from '@elastic/eui'

const priorityOptions = [
  { id: 'low', label: 'Low' },
  { id: 'medium', label: 'Medium' },
  { id: 'high', label: 'High' },
]

function SupportTicketForm() {
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState('')
  const [description, setDescription] = useState('')
  const [attachments, setAttachments] = useState([])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Subject">
        <EuiFieldText
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Priority" fullWidth>
        <EuiRadioGroup
          options={priorityOptions}
          idSelected={priority}
          onChange={(id) => setPriority(id)}
        />
      </EuiFormRow>

      <EuiFormRow label="Issue description">
        <EuiTextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Attachments">
        <EuiFilePicker multiple onChange={(files) => setAttachments(files)} />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Submit ticket
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default SupportTicketForm
