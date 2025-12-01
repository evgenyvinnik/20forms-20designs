import {
  Button,
  Checkbox,
  Field,
  Input,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
})

function PasswordChangeForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Current password" required>
        <Input
          id="fluent-ui-password-change-current"
          name="currentPassword"
          type="password"
          required
        />
      </Field>
      <Field label="New password" required>
        <Input
          id="fluent-ui-password-change-new"
          name="newPassword"
          type="password"
          minLength={8}
          required
        />
      </Field>
      <Field label="Confirm new password" required>
        <Input
          id="fluent-ui-password-change-confirm"
          name="confirmPassword"
          type="password"
          minLength={8}
          required
        />
      </Field>
      <Checkbox name="logoutOthers" label="Sign out of other devices" />
      <Button type="submit" appearance="primary">
        Update password
      </Button>
    </form>
  )
}

export default PasswordChangeForm
