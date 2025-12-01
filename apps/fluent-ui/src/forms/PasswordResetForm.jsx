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

function PasswordResetForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Text>Request a password reset link via email.</Text>
      <Field label="Email address" required>
        <Input
          id="fluent-ui-password-reset-email"
          name="email"
          type="email"
          required
        />
      </Field>
      <Button type="submit" appearance="primary">
        Send reset link
      </Button>
    </form>
  )
}

export default PasswordResetForm
