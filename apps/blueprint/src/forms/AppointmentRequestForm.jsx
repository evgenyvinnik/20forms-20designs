import { Button, FormGroup, InputGroup, TextArea } from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Full name" labelFor="blueprint-appointment-name">
        <InputGroup
          id="blueprint-appointment-name"
          name="fullName"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Email address" labelFor="blueprint-appointment-email">
        <InputGroup
          id="blueprint-appointment-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Preferred date" labelFor="blueprint-appointment-date">
        <InputGroup
          id="blueprint-appointment-date"
          name="date"
          type="date"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Preferred time" labelFor="blueprint-appointment-time">
        <InputGroup
          id="blueprint-appointment-time"
          name="time"
          type="time"
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Reason for visit"
        labelFor="blueprint-appointment-reason"
      >
        <TextArea
          id="blueprint-appointment-reason"
          name="reason"
          rows={3}
          required
          fill
        />
      </FormGroup>
      <Button intent="primary" type="submit">
        Request appointment
      </Button>
    </form>
  )
}

export default AppointmentRequestForm
