import { useState } from 'react'
import { TextInput, TextArea, Button } from '@astryxdesign/core'

function AppointmentRequestForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-appointment-name"
        name="fullName"
        type="text"
        label="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-appointment-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        id="astryx-appointment-date"
        name="date"
        type="date"
        label="Preferred date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <TextInput
        id="astryx-appointment-time"
        name="time"
        type="time"
        label="Preferred time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      <TextArea
        id="astryx-appointment-reason"
        name="reason"
        label="Reason for visit"
        rows={3}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
      />

      <Button type="submit" variant="primary">
        Request appointment
      </Button>
    </form>
  )
}

export default AppointmentRequestForm
