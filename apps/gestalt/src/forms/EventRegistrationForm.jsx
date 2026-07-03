import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  NumberField,
  SelectList,
  TextField,
} from 'gestalt'

function EventRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [ticketType, setTicketType] = useState('')
  const [guestCount, setGuestCount] = useState(0)
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-event-name"
          label="Full name"
          onChange={({ value }) => setFullName(value)}
          type="text"
          value={fullName}
        />
        <TextField
          id="gestalt-event-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <SelectList
          id="gestalt-event-ticket"
          label="Ticket type"
          onChange={({ value }) => setTicketType(value)}

          value={ticketType}
        >
          {[
            { label: 'General admission', value: 'general' },
            { label: 'VIP', value: 'vip' },
            { label: 'Student', value: 'student' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <NumberField
          id="gestalt-event-guests"
          label="Number of guests"
          max={20}
          min={0}
          onChange={({ value }) => setGuestCount(value)}
          value={guestCount}
        />
        <Checkbox
          checked={newsletter}
          id="gestalt-event-newsletter"
          label="Notify me about future events"
          onChange={({ checked }) => setNewsletter(checked)}
        />
        <Box>
          <Button color="red" text="Register" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default EventRegistrationForm
