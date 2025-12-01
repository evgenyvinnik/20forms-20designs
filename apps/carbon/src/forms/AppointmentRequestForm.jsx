import { Form, TextInput, TextArea, DatePicker, DatePickerInput, TimePicker, Button, Stack } from '@carbon/react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-appointment-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-appointment-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <DatePicker datePickerType="single">
          <DatePickerInput
            id="carbon-appointment-date"
            name="date"
            labelText="Preferred date"
            placeholder="mm/dd/yyyy"
            required
          />
        </DatePicker>
        <TimePicker
          id="carbon-appointment-time"
          name="time"
          labelText="Preferred time"
          required
        />
        <TextArea
          id="carbon-appointment-reason"
          name="reason"
          labelText="Reason for visit"
          rows={3}
          required
        />
        <Button type="submit">Request appointment</Button>
      </Stack>
    </Form>
  )
}

export default AppointmentRequestForm
