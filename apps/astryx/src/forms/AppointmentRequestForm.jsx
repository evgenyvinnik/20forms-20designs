import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="fullName" type="text" label="Full name" required />
      <TextInput name="email" type="email" label="Email address" required />
      <TextInput name="date" type="date" label="Preferred date" required />
      <TextInput name="time" type="time" label="Preferred time" required />
      <TextInput
        name="reason"
        label="Reason for visit"
        multiline
        rows={3}
        required
      />
      <Button type="submit" variant="primary">
        Request appointment
      </Button>
    </form>
  )
}

export default AppointmentRequestForm
