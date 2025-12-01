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

function UserRegistrationForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Full name" required>
        <Input
          id="fluent-ui-user-registration-name"
          name="fullName"
          type="text"
          required
        />
      </Field>
      <Field label="Email address" required>
        <Input
          id="fluent-ui-user-registration-email"
          name="email"
          type="email"
          required
        />
      </Field>
      <Field label="Username" required>
        <Input
          id="fluent-ui-user-registration-username"
          name="username"
          type="text"
          minLength={3}
          required
        />
      </Field>
      <Field label="Password" required>
        <Input
          id="fluent-ui-user-registration-password"
          name="password"
          type="password"
          minLength={8}
          required
        />
      </Field>
      <Field label="Confirm password" required>
        <Input
          id="fluent-ui-user-registration-confirm"
          name="confirmPassword"
          type="password"
          minLength={8}
          required
        />
      </Field>
      <Checkbox
        name="terms"
        label="I agree to the terms and conditions"
        required
      />
      <Button type="submit" appearance="primary">
        Create account
      </Button>
    </form>
  )
}

export default UserRegistrationForm
