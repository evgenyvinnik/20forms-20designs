import {
  Button,
  Field,
  Input,
  Text,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
})

function TwoFactorAuthForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Text>Enter the code from your authenticator app or SMS.</Text>
      <Field label="Verification code" required>
        <Input
          id="fluent-ui-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          required
        />
      </Field>
      <Field label="Backup code (optional)">
        <Input
          id="fluent-ui-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
        />
      </Field>
      <Button type="submit" appearance="primary">
        Verify
      </Button>
      <Button
        type="button"
        appearance="secondary"
        onClick={() => alert('A new code has been sent!')}
      >
        Resend code
      </Button>
    </form>
  )
}

export default TwoFactorAuthForm
