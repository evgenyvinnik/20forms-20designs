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

function UserLoginForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Email or username" required>
        <Input
          id="fluent-ui-user-login-email"
          name="identifier"
          type="text"
          required
        />
      </Field>
      <Field label="Password" required>
        <Input
          id="fluent-ui-user-login-password"
          name="password"
          type="password"
          required
        />
      </Field>
      <Checkbox name="remember" label="Keep me signed in" />
      <Button type="submit" appearance="primary">
        Sign in
      </Button>
      <Button
        type="button"
        appearance="transparent"
        onClick={() => alert('Password reset link flow placeholder')}
      >
        Forgot password?
      </Button>
    </form>
  )
}

export default UserLoginForm
