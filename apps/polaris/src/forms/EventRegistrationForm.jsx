import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Select,
  Checkbox,
  Button,
} from '@shopify/polaris'

function EventRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [ticketType, setTicketType] = useState('')
  const [guestCount, setGuestCount] = useState('')
  const [notifyFutureEvents, setNotifyFutureEvents] = useState(false)

  const ticketOptions = [
    { label: 'Select ticket', value: '' },
    { label: 'General admission', value: 'general' },
    { label: 'VIP', value: 'vip' },
    { label: 'Student', value: 'student' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Event registration submitted!')
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
        <Select
          label="Ticket type"
          options={ticketOptions}
          value={ticketType}
          onChange={setTicketType}
          requiredIndicator
        />
        <TextField
          label="Number of guests"
          type="number"
          value={guestCount}
          onChange={setGuestCount}
          min={0}
          max={20}
          requiredIndicator
        />
        <Checkbox
          label="Notify me about future events"
          checked={notifyFutureEvents}
          onChange={setNotifyFutureEvents}
        />
        <Button submit variant="primary">
          Register
        </Button>
      </FormLayout>
    </form>
  )
}

export default EventRegistrationForm
