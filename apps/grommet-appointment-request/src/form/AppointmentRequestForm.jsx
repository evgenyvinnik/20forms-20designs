import {
  Box,
  Button,
  DateInput,
  Form,
  FormField,
  TextArea,
  TextInput,
} from 'grommet'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Full name"
        name="fullName"
        htmlFor="grommet-appointment-name"
        required
      >
        <TextInput id="grommet-appointment-name" name="fullName" type="text" />
      </FormField>
      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-appointment-email"
        required
      >
        <TextInput id="grommet-appointment-email" name="email" type="email" />
      </FormField>
      <FormField
        label="Preferred date"
        name="date"
        htmlFor="grommet-appointment-date"
        required
      >
        <DateInput
          id="grommet-appointment-date"
          name="date"
          format="mm/dd/yyyy"
        />
      </FormField>
      <FormField
        label="Preferred time"
        name="time"
        htmlFor="grommet-appointment-time"
        required
      >
        <TextInput id="grommet-appointment-time" name="time" type="time" />
      </FormField>
      <FormField
        label="Reason for visit"
        name="reason"
        htmlFor="grommet-appointment-reason"
        required
      >
        <TextArea id="grommet-appointment-reason" name="reason" rows={3} />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Request appointment" />
      </Box>
    </Form>
  )
}

export default AppointmentRequestForm
