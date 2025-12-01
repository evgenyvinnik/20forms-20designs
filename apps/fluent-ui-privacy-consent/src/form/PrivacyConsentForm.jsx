import {
  Button,
  Checkbox,
  Divider,
  Field,
  Input,
  Label,
  Textarea,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldset: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    border: 'none',
    padding: 0,
    margin: 0,
  },
})

function PrivacyConsentForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Full name" required>
        <Input
          id="fluent-ui-privacy-name"
          name="fullName"
          type="text"
          required
        />
      </Field>
      <Field label="Email address" required>
        <Input
          id="fluent-ui-privacy-email"
          name="email"
          type="email"
          required
        />
      </Field>
      <fieldset className={styles.fieldset}>
        <Label weight="semibold">Communication channels</Label>
        <Checkbox name="emailOptIn" label="Email updates" />
        <Checkbox name="smsOptIn" label="SMS notifications" />
        <Checkbox name="phoneOptIn" label="Phone calls" />
      </fieldset>
      <Divider />
      <fieldset className={styles.fieldset}>
        <Label weight="semibold">Privacy options</Label>
        <Checkbox name="analytics" label="Allow analytics cookies" />
        <Checkbox name="personalization" label="Allow personalized content" />
      </fieldset>
      <Field label="Additional notes">
        <Textarea id="fluent-ui-privacy-notes" name="notes" rows={3} />
      </Field>
      <Button type="submit" appearance="primary">
        Save preferences
      </Button>
    </form>
  )
}

export default PrivacyConsentForm
