import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="subject" type="text" label="Subject" required />
      <Selector
        name="priority"
        label="Priority"
        defaultValue="medium"
        options={[
          { value: 'low', label: 'Low' },
          { value: 'medium', label: 'Medium' },
          { value: 'high', label: 'High' },
        ]}
      />
      <TextInput
        name="description"
        label="Description"
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="primary">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
