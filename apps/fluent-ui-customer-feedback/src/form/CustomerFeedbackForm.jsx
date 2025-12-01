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

function CustomerFeedbackForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Name" required>
        <Input id="fluent-ui-feedback-name" name="name" type="text" required />
      </Field>
      <Field label="Email address" required>
        <Input
          id="fluent-ui-feedback-email"
          name="email"
          type="email"
          required
        />
      </Field>
      <Field label="Overall rating" required>
        <Select id="fluent-ui-feedback-rating" name="rating" required>
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </Select>
      </Field>
      <Field label="Comments" required>
        <Textarea
          id="fluent-ui-feedback-comments"
          name="comments"
          rows={4}
          required
        />
      </Field>
      <Checkbox name="followUp" label="I would like a follow-up" />
      <Button type="submit" appearance="primary">
        Send feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
