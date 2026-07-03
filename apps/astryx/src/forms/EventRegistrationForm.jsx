import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="name" type="text" label="Attendee name" required />
      <TextInput name="email" type="email" label="Email address" required />
      <Selector
        name="ticket"
        label="Ticket pass"
        defaultValue="general"
        options={[
          { value: 'general', label: 'General Admission' },
          { value: 'vip', label: 'VIP Access' },
        ]}
      />
      <Button type="submit" variant="primary">
        Register for event
      </Button>
    </form>
  )
}

export default EventRegistrationForm
