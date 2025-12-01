import { Button, TextArea, TextInput } from '@gravity-ui/uikit'

import { Field, formStackStyle } from './common.jsx'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-appointment-name"
        label="Full name"
        name="fullName"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-appointment-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-appointment-date"
        label="Preferred date"
        name="date"
        placeholder="YYYY-MM-DD"
        controlProps={{ required: true, pattern: '\\d{4}-\\d{2}-\\d{2}' }}
      />
      <TextInput
        id="gravity-appointment-time"
        label="Preferred time"
        name="time"
        placeholder="HH:MM"
        controlProps={{ required: true, pattern: '\\d{2}:\\d{2}' }}
      />
      <Field label="Reason for visit" htmlFor="gravity-appointment-reason">
        <TextArea
          id="gravity-appointment-reason"
          name="reason"
          rows={3}
          controlProps={{ required: true }}
        />
      </Field>
      <Button view="action" type="submit">
        Request appointment
      </Button>
    </form>
  )
}

export default AppointmentRequestForm
