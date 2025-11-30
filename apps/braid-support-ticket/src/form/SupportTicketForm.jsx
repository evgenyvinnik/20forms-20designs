import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Textarea, Button } from 'braid-design-system'

function SupportTicketForm() {
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-ticket-subject"
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
          <legend style={{ marginBottom: '8px', fontWeight: 500 }}>Priority</legend>
          <Stack space="small">
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="radio"
                name="priority"
                value="low"
                checked={priority === 'low'}
                onChange={(e) => setPriority(e.target.value)}
                required
              />
              Low
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="radio"
                name="priority"
                value="medium"
                checked={priority === 'medium'}
                onChange={(e) => setPriority(e.target.value)}
              />
              Medium
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="radio"
                name="priority"
                value="high"
                checked={priority === 'high'}
                onChange={(e) => setPriority(e.target.value)}
              />
              High
            </label>
          </Stack>
        </fieldset>

        <Textarea
          id="braid-ticket-description"
          label="Issue description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          lines={4}
          required
        />

        <Box>
          <label
            htmlFor="braid-ticket-attachments"
            style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}
          >
            Attachments
          </label>
          <input
            id="braid-ticket-attachments"
            name="attachments"
            type="file"
            multiple
          />
        </Box>

        <Box>
          <Button type="submit">Submit ticket</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default SupportTicketForm
