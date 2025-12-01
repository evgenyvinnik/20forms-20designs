import {
  Button,
  Checkbox,
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

function JobApplicationForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Full name" required>
        <Input
          id="fluent-ui-job-full-name"
          name="fullName"
          type="text"
          required
        />
      </Field>
      <Field label="Email address" required>
        <Input id="fluent-ui-job-email" name="email" type="email" required />
      </Field>
      <Field label="Phone number" required>
        <Input
          id="fluent-ui-job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          required
        />
      </Field>
      <Field label="Role applied for" required>
        <Input id="fluent-ui-job-role" name="role" type="text" required />
      </Field>
      <Field label="Resume link" required>
        <Input id="fluent-ui-job-resume" name="resume" type="url" required />
      </Field>
      <Field label="Cover letter" required>
        <Textarea
          id="fluent-ui-job-cover-letter"
          name="coverLetter"
          rows={4}
          required
        />
      </Field>
      <Checkbox name="updates" label="Keep me informed about future roles" />
      <Button type="submit" appearance="primary">
        Submit application
      </Button>
    </form>
  )
}

export default JobApplicationForm
