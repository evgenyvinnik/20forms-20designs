import {
  Button,
  Field,
  Input,
  Textarea,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
})

function AppointmentRequestForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Full name" required>
        <Input
          id="fluent-ui-appointment-name"
          name="fullName"
          type="text"
          required
        />
      </Field>
      <Field label="Email address" required>
        <Input
          id="fluent-ui-appointment-email"
          name="email"
          type="email"
          required
        />
      </Field>
      <Field label="Preferred date" required>
        <Input
          id="fluent-ui-appointment-date"
          name="date"
          type="date"
          required
        />
      </Field>
      <Field label="Preferred time" required>
        <Input
          id="fluent-ui-appointment-time"
          name="time"
          type="time"
          required
        />
      </Field>
      <Field label="Reason for visit" required>
        <Textarea
          id="fluent-ui-appointment-reason"
          name="reason"
          rows={3}
          required
        />
      </Field>
      <Button type="submit" appearance="primary">
        Request appointment
      </Button>
    </form>
  )
}

export default AppointmentRequestForm
