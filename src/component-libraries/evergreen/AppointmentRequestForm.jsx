import { Button, Pane, TextInputField, TextareaField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField
        id="evergreen-appointment-name"
        label="Full name"
        name="fullName"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-appointment-email"
        label="Email address"
        name="email"
        type="email"
        required
      />
      <TextInputField
        id="evergreen-appointment-date"
        label="Preferred date"
        name="date"
        type="date"
        required
      />
      <TextInputField
        id="evergreen-appointment-time"
        label="Preferred time"
        name="time"
        type="time"
        required
      />
      <TextareaField
        id="evergreen-appointment-reason"
        label="Reason for visit"
        name="reason"
        rows={3}
        required
      />
      <Button appearance="primary" type="submit">
        Request appointment
      </Button>
    </Pane>
  )
}

export default AppointmentRequestForm
