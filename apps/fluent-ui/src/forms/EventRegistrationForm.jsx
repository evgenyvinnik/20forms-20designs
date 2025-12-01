import {
  Button,
  Checkbox,
  Field,
  Input,
  Select,
  SpinButton,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
})

function EventRegistrationForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Full name" required>
        <Input id="fluent-ui-event-name" name="fullName" type="text" required />
      </Field>
      <Field label="Email address" required>
        <Input id="fluent-ui-event-email" name="email" type="email" required />
      </Field>
      <Field label="Ticket type" required>
        <Select id="fluent-ui-event-ticket" name="ticketType" required>
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </Select>
      </Field>
      <Field label="Number of guests" required>
        <SpinButton
          id="fluent-ui-event-guests"
          name="guestCount"
          min={0}
          max={20}
          defaultValue={0}
        />
      </Field>
      <Checkbox name="newsletter" label="Notify me about future events" />
      <Button type="submit" appearance="primary">
        Register
      </Button>
    </form>
  )
}

export default EventRegistrationForm
