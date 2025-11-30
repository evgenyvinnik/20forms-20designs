import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Dropdown, Checkbox, Button } from 'braid-design-system'

function EventRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [ticketType, setTicketType] = useState('')
  const [guestCount, setGuestCount] = useState('')
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-event-name"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <TextField
          id="braid-event-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Dropdown
          id="braid-event-ticket"
          label="Ticket type"
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value)}
          placeholder="Select ticket"
        >
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </Dropdown>

        <TextField
          id="braid-event-guests"
          label="Number of guests"
          type="number"
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
          required
        />

        <Checkbox
          id="braid-event-newsletter"
          label="Notify me about future events"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />

        <Box>
          <Button type="submit">Register</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default EventRegistrationForm
