import {
  Button,
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

function ProfileUpdateForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="First name" required>
        <Input
          id="fluent-ui-profile-first-name"
          name="firstName"
          type="text"
          required
        />
      </Field>
      <Field label="Last name" required>
        <Input
          id="fluent-ui-profile-last-name"
          name="lastName"
          type="text"
          required
        />
      </Field>
      <Field label="Email address" required>
        <Input
          id="fluent-ui-profile-email"
          name="email"
          type="email"
          required
        />
      </Field>
      <Field label="Phone number" required>
        <Input
          id="fluent-ui-profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          required
        />
      </Field>
      <Field label="Short bio" required>
        <Textarea id="fluent-ui-profile-bio" name="bio" rows={3} required />
      </Field>
      <Button type="submit" appearance="primary">
        Save changes
      </Button>
    </form>
  )
}

export default ProfileUpdateForm
