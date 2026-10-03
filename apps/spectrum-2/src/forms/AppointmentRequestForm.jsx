import {
  Button,
  ButtonGroup,
  DatePicker,
  Form,
  TextArea,
  TextField,
  TimeField,
} from '@react-spectrum/s2'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Full name" name="fullName" isRequired />
      <TextField label="Email address" name="email" type="email" isRequired />
      <DatePicker label="Preferred date" name="date" isRequired />
      <TimeField label="Preferred time" name="time" isRequired />
      <TextArea label="Reason for visit" name="reason" isRequired />
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Request appointment
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default AppointmentRequestForm
