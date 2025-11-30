import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import Range from '@atlaskit/range'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack, Text } from '@atlaskit/primitives'

const ticketOptions = [
  { label: 'General admission', value: 'general' },
  { label: 'VIP', value: 'vip' },
  { label: 'Student', value: 'student' },
]

function EventRegistrationForm() {
  const [ticket, setTicket] = useState(null)
  const [guestCount, setGuestCount] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-event-name">Full name</Label>
          <Textfield
            id="atlaskit-event-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-event-email">Email address</Label>
          <Textfield
            id="atlaskit-event-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-event-ticket">Ticket type</Label>
          <Select
            inputId="atlaskit-event-ticket"
            name="ticketType"
            options={ticketOptions}
            value={ticket}
            onChange={setTicket}
            placeholder="Select ticket"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-event-guests">Number of guests: {guestCount}</Label>
          <Range
            id="atlaskit-event-guests"
            min={0}
            max={20}
            value={guestCount}
            onChange={setGuestCount}
          />
        </Box>
        <Box>
          <Checkbox
            name="newsletter"
            label="Notify me about future events"
          />
        </Box>
        <Button type="submit" appearance="primary">Register</Button>
      </Stack>
    </form>
  )
}

export default EventRegistrationForm
