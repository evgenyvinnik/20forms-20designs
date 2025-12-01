import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Select } from 'baseui/select'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function EventRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [ticketType, setTicketType] = useState([])
  const [guestCount, setGuestCount] = useState('')
  const [newsletter, setNewsletter] = useState(false)

  const ticketOptions = [
    { label: 'General admission', id: 'general' },
    { label: 'VIP', id: 'vip' },
    { label: 'Student', id: 'student' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Full name">
          <Input
            id="baseweb-event-name"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Email address">
          <Input
            id="baseweb-event-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Ticket type">
          <Select
            id="baseweb-event-ticket"
            options={ticketOptions}
            value={ticketType}
            placeholder="Select ticket"
            onChange={(params) => setTicketType(params.value)}
            required
          />
        </FormControl>
        <FormControl label="Number of guests">
          <Input
            id="baseweb-event-guests"
            name="guestCount"
            type="number"
            min={0}
            max={20}
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            required
          />
        </FormControl>
        <Checkbox
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        >
          Notify me about future events
        </Checkbox>
        <Button type="submit">Register</Button>
      </Block>
    </form>
  )
}

export default EventRegistrationForm
