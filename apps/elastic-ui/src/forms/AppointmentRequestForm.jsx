import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiTextArea,
  EuiButton,
} from '@elastic/eui'

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
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Full name">
        <EuiFieldText
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Preferred date">
        <EuiFieldText
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Preferred time">
        <EuiFieldText
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Reason for visit">
        <EuiTextArea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows={3}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Request appointment
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default AppointmentRequestForm
