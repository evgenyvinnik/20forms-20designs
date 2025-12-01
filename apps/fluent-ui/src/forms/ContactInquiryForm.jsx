import {
  Button,
  Checkbox,
  Field,
  Input,
  Select,
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

function ContactInquiryForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Full name" required>
        <Input
          id="fluent-ui-contact-name"
          name="fullName"
          type="text"
          required
        />
      </Field>
      <Field label="Email address" required>
        <Input
          id="fluent-ui-contact-email"
          name="email"
          type="email"
          required
        />
      </Field>
      <Field label="Topic" required>
        <Select id="fluent-ui-contact-topic" name="topic" required>
          <option value="">Select topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </Select>
      </Field>
      <Field label="Message" required>
        <Textarea
          id="fluent-ui-contact-message"
          name="message"
          rows={4}
          required
        />
      </Field>
      <Checkbox name="consent" label="Allow follow-up communication" />
      <Button type="submit" appearance="primary">
        Submit inquiry
      </Button>
    </form>
  )
}

export default ContactInquiryForm
