import '@cloudscape-design/global-styles/index.css'
import { useState } from 'react'
import {
  Button,
  Container,
  DatePicker,
  FormField,
  Input,
  SpaceBetween,
  Textarea,
  TimeInput,
} from '@cloudscape-design/components'

function AppointmentRequestForm() {
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredTime, setPreferredTime] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
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
          <FormField label="Preferred date">
            <DatePicker
              name="date"
              placeholder="YYYY/MM/DD"
              value={preferredDate}
              onChange={({ detail }) => setPreferredDate(detail.value)}
            />
          </FormField>
          <FormField label="Preferred time">
            <TimeInput
              name="time"
              placeholder="hh:mm"
              value={preferredTime}
              onChange={({ detail }) => setPreferredTime(detail.value)}
            />
          </FormField>
          <FormField label="Reason for visit">
            <Textarea
              name="reason"
              placeholder="Describe your reason"
              rows={3}
            />
          </FormField>
          <Button variant="primary" formAction="submit">
            Request appointment
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default AppointmentRequestForm
