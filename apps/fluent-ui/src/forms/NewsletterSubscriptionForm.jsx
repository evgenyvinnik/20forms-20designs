import {
  Button,
  Checkbox,
  Field,
  Input,
  Select,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
})

function NewsletterSubscriptionForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Email address" required>
        <Input
          id="fluent-ui-newsletter-email"
          name="email"
          type="email"
          required
        />
      </Field>
      <Field label="Frequency" required>
        <Select id="fluent-ui-newsletter-frequency" name="frequency" required>
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </Select>
      </Field>
      <Checkbox name="agree" label="Receive product updates" />
      <Button type="submit" appearance="primary">
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
