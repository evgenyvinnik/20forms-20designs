import '@cloudscape-design/global-styles/index.css'
import { useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
  FormField,
  Input,
  Select,
  SpaceBetween,
} from '@cloudscape-design/components'

function EventRegistrationForm() {
  const [selectedTicketType, setSelectedTicketType] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Full name">
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </FormField>
          <FormField label="Email address">
            <Input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </FormField>
          <FormField label="Ticket type">
            <Select
              name="ticketType"
              placeholder="Select ticket"
              options={[
                { label: 'General admission', value: 'general' },
                { label: 'VIP', value: 'vip' },
                { label: 'Student', value: 'student' },
              ]}
              selectedOption={selectedTicketType}
              onChange={({ detail }) =>
                setSelectedTicketType(detail.selectedOption)
              }
            />
          </FormField>
          <FormField label="Number of guests">
            <Input
              name="guestCount"
              type="number"
              inputMode="numeric"
              placeholder="0"
              required
            />
          </FormField>
          <Checkbox name="newsletter">Notify me about future events</Checkbox>
          <Button variant="primary" formAction="submit">
            Register
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default EventRegistrationForm
