import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Checkbox,
  ActionGroup,
  FormSelect,
  FormSelectOption,
  NumberInput,
} from '@patternfly/react-core'
import { useState } from 'react'

function EventRegistrationForm() {
  const [guestCount, setGuestCount] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Full name" isRequired fieldId="pf-event-name">
        <TextInput isRequired type="text" id="pf-event-name" name="fullName" />
      </FormGroup>
      <FormGroup label="Email address" isRequired fieldId="pf-event-email">
        <TextInput isRequired type="email" id="pf-event-email" name="email" />
      </FormGroup>
      <FormGroup label="Ticket type" isRequired fieldId="pf-event-ticket">
        <FormSelect id="pf-event-ticket" name="ticketType" isRequired>
          <FormSelectOption value="" label="Select ticket" isPlaceholder />
          <FormSelectOption value="general" label="General admission" />
          <FormSelectOption value="vip" label="VIP" />
          <FormSelectOption value="student" label="Student" />
        </FormSelect>
      </FormGroup>
      <FormGroup label="Number of guests" isRequired fieldId="pf-event-guests">
        <NumberInput
          id="pf-event-guests"
          name="guestCount"
          value={guestCount}
          min={0}
          max={20}
          onMinus={() => setGuestCount(Math.max(0, guestCount - 1))}
          onPlus={() => setGuestCount(Math.min(20, guestCount + 1))}
          onChange={(event) => {
            const value = Number(event.target.value)
            if (!isNaN(value) && value >= 0 && value <= 20) {
              setGuestCount(value)
            }
          }}
        />
      </FormGroup>
      <FormGroup fieldId="pf-event-newsletter">
        <Checkbox
          label="Notify me about future events"
          id="pf-event-newsletter"
          name="newsletter"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default EventRegistrationForm
