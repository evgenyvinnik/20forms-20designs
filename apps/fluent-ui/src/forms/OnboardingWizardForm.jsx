import {
  Button,
  Checkbox,
  Divider,
  Field,
  Input,
  Select,
  Subtitle1,
  Textarea,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
  },
})

function OnboardingWizardForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.section}>
        <Subtitle1>Step 1: Account</Subtitle1>
        <Field label="Work email" required>
          <Input
            id="fluent-ui-onboarding-email"
            name="email"
            type="email"
            required
          />
        </Field>
        <Field label="Password" required>
          <Input
            id="fluent-ui-onboarding-password"
            name="password"
            type="password"
            minLength={8}
            required
          />
        </Field>
      </div>
      <Divider />
      <div className={styles.section}>
        <Subtitle1>Step 2: Team</Subtitle1>
        <Field label="Team name" required>
          <Input
            id="fluent-ui-onboarding-team-name"
            name="teamName"
            type="text"
            required
          />
        </Field>
        <Field label="Team size" required>
          <Select id="fluent-ui-onboarding-size" name="teamSize" required>
            <option value="">Select size</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
          </Select>
        </Field>
      </div>
      <Divider />
      <div className={styles.section}>
        <Subtitle1>Step 3: Preferences</Subtitle1>
        <Field label="Primary goal" required>
          <Textarea
            id="fluent-ui-onboarding-goal"
            name="goal"
            rows={3}
            required
          />
        </Field>
        <Checkbox name="updates" label="Send me product tips" />
      </div>
      <div className={styles.buttonGroup}>
        <Button
          type="button"
          appearance="secondary"
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </Button>
        <Button type="submit" appearance="primary">
          Finish setup
        </Button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
