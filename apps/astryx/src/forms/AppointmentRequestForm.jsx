import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment requested!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="name" type="text" label="Your name" required />
      <Selector
        name="service"
        label="Service requested"
        defaultValue="consultation"
        options={[
          { value: 'consultation', label: 'Initial Consultation' },
          { value: 'followup', label: 'Follow-up Session' },
        ]}
      />
      <TextInput name="date" type="date" label="Preferred date" required />
      <TextInput name="notes" label="Notes" multiline rows={3} />
      <Button type="submit" variant="primary">
        Request appointment
      </Button>
    </form>
  )
}

export default AppointmentRequestForm
