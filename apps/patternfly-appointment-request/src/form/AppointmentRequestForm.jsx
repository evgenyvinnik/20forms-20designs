import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  ActionGroup,
  DatePicker,
  TimePicker,
} from '@patternfly/react-core'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Full name" isRequired fieldId="pf-appointment-name">
        <TextInput
          isRequired
          type="text"
          id="pf-appointment-name"
          name="fullName"
        />
      </FormGroup>
      <FormGroup
        label="Email address"
        isRequired
        fieldId="pf-appointment-email"
      >
        <TextInput
          isRequired
          type="email"
          id="pf-appointment-email"
          name="email"
        />
      </FormGroup>
      <FormGroup
        label="Preferred date"
        isRequired
        fieldId="pf-appointment-date"
      >
        <DatePicker id="pf-appointment-date" name="date" />
      </FormGroup>
      <FormGroup
        label="Preferred time"
        isRequired
        fieldId="pf-appointment-time"
      >
        <TimePicker id="pf-appointment-time" name="time" />
      </FormGroup>
      <FormGroup
        label="Reason for visit"
        isRequired
        fieldId="pf-appointment-reason"
      >
        <TextArea
          isRequired
          id="pf-appointment-reason"
          name="reason"
          rows={3}
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Request appointment
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default AppointmentRequestForm
