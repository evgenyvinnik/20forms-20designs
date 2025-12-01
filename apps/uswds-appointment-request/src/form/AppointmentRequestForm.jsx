import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Button,
} from '@trussworks/react-uswds'

function AppointmentRequestForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Full name
        </Label>
        <TextInput
          id="uswds-appointment-name"
          name="fullName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-appointment-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-date"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Preferred date
        </Label>
        <TextInput
          id="uswds-appointment-date"
          name="date"
          type="date"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-time"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Preferred time
        </Label>
        <TextInput
          id="uswds-appointment-time"
          name="time"
          type="time"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-reason"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Reason for visit
        </Label>
        <Textarea
          id="uswds-appointment-reason"
          name="reason"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Button type="submit">Request appointment</Button>
    </Form>
  )
}

export default AppointmentRequestForm
