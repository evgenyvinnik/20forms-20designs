import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="fullName" type="text" label="Full name" required />
      <TextInput name="email" type="email" label="Email address" required />
      <Selector
        name="ticketType"
        label="Ticket type"
        defaultValue="general"
        options={[
          { value: 'general', label: 'General admission' },
          { value: 'vip', label: 'VIP' },
          { value: 'student', label: 'Student' },
        ]}
        required
      />
      <TextInput
        name="guests"
        type="number"
        label="Number of guests"
        defaultValue="1"
        required
      />
      <CheckboxInput name="notify" label="Notify me about future events" />
      <Button type="submit" variant="primary">
        Register
      </Button>
    </form>
  )
}

export default EventRegistrationForm
