import { useState, useCallback } from 'react'
import { FormLayout, TextField, Button } from '@shopify/polaris'

function AppointmentRequestForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Full name"
          type="text"
          value={fullName}
          onChange={setFullName}
          autoComplete="name"
          requiredIndicator
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <TextField
          label="Preferred date"
          type="date"
          value={date}
          onChange={setDate}
          autoComplete="off"
          requiredIndicator
        />
        <TextField
          label="Preferred time"
          type="time"
          value={time}
          onChange={setTime}
          autoComplete="off"
          requiredIndicator
        />
        <TextField
          label="Reason for visit"
          value={reason}
          onChange={setReason}
          multiline={3}
          autoComplete="off"
          requiredIndicator
        />
        <Button submit variant="primary">
          Request appointment
        </Button>
      </FormLayout>
    </form>
  )
}

export default AppointmentRequestForm
