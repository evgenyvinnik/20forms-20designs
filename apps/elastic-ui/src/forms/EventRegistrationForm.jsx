import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldNumber,
  EuiSelect,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'

const ticketTypeOptions = [
  { value: '', text: 'Select ticket' },
  { value: 'general', text: 'General admission' },
  { value: 'vip', text: 'VIP' },
  { value: 'student', text: 'Student' },
]

function EventRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [ticketType, setTicketType] = useState('')
  const [guestCount, setGuestCount] = useState(0)
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Event registration submitted!')
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

      <EuiFormRow label="Ticket type">
        <EuiSelect
          options={ticketTypeOptions}
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Number of guests">
        <EuiFieldNumber
          value={guestCount}
          onChange={(e) => setGuestCount(Number(e.target.value))}
          min={0}
          max={20}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="newsletter"
          label="Notify me about future events"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Register
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default EventRegistrationForm
