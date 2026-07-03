import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function EventRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [ticketType, setTicketType] = useState('')
  const [guestCount, setGuestCount] = useState('')
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  const ticketOptions = [
    { value: '', label: 'Select ticket' },
    { value: 'general', label: 'General admission' },
    { value: 'vip', label: 'VIP' },
    { value: 'student', label: 'Student' },
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-event-name"
        name="fullName"
        type="text"
        label="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-event-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Selector
        id="astryx-event-ticket"
        name="ticketType"
        label="Ticket type"
        value={ticketType}
        onChange={(val) => setTicketType(val)}
        options={ticketOptions}
        placeholder="Select ticket"
      />

      <TextInput
        id="astryx-event-guests"
        name="guestCount"
        type="number"
        label="Number of guests"
        min="0"
        max="20"
        value={guestCount}
        onChange={(e) => setGuestCount(e.target.value)}
        required
      />

      <CheckboxInput
        name="newsletter"
        label="Notify me about future events"
        checked={newsletter}
        onChange={(e) => setNewsletter(e.target.checked)}
      />

      <Button type="submit" variant="primary">
        Register
      </Button>
    </form>
  )
}

export default EventRegistrationForm
