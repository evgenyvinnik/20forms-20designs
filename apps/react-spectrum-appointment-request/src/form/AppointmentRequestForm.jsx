import { Form, TextField, TextArea, Button, Flex } from '@adobe/react-spectrum'
import { DatePicker, TimeField } from '@adobe/react-spectrum'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField label="Full name" name="fullName" type="text" isRequired />
        <TextField label="Email address" name="email" type="email" isRequired />
        <DatePicker label="Preferred date" name="date" isRequired />
        <TimeField label="Preferred time" name="time" isRequired />
        <TextArea label="Reason for visit" name="reason" isRequired />
        <Button type="submit" variant="accent">
          Request appointment
        </Button>
      </Flex>
    </Form>
  )
}

export default AppointmentRequestForm
