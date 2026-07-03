import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="subject" type="text" label="Subject" required />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>
          Priority
        </label>
        <div style={{ display: 'flex', gap: '16px' }}>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.875rem',
            }}
          >
            <input type="radio" name="priority" value="low" /> Low
          </label>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.875rem',
            }}
          >
            <input type="radio" name="priority" value="medium" defaultChecked />{' '}
            Medium
          </label>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.875rem',
            }}
          >
            <input type="radio" name="priority" value="high" /> High
          </label>
        </div>
      </div>
      <TextInput
        name="description"
        label="Issue description"
        multiline
        rows={4}
        required
      />
      <TextInput name="attachment" type="file" label="Attachments" />
      <Button type="submit" variant="primary">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
