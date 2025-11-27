import { Button, Checkbox, TextInput } from '@gravity-ui/uikit'

import { SingleSelectField, formStackStyle } from './common.jsx'

const ticketOptions = [
  { value: 'general', content: 'General admission' },
  { value: 'vip', content: 'VIP' },
  { value: 'student', content: 'Student' },
]

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-event-name"
        label="Full name"
        name="fullName"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-event-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <SingleSelectField
        id="gravity-event-ticket"
        label="Ticket type"
        name="ticketType"
        options={[{ value: '', content: 'Select ticket' }, ...ticketOptions]}
        placeholder="Select ticket"
      />
      <TextInput
        id="gravity-event-guests"
        label="Number of guests"
        name="guestCount"
        type="number"
        controlProps={{ required: true, min: 0, max: 20 }}
      />
      <Checkbox name="newsletter" value="true" content="Notify me about future events" />
      <Button view="action" type="submit">
        Register
      </Button>
    </form>
  )
}

export default EventRegistrationForm
