import { Button, Pane, TextInputField, TextareaField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField
        id="evergreen-profile-first-name"
        label="First name"
        name="firstName"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-profile-last-name"
        label="Last name"
        name="lastName"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-profile-email"
        label="Email address"
        name="email"
        type="email"
        required
      />
      <TextInputField
        id="evergreen-profile-phone"
        label="Phone number"
        name="phone"
        type="tel"
        inputMode="tel"
        pattern="[+0-9\\s-]{7,20}"
        required
      />
      <TextareaField id="evergreen-profile-bio" label="Short bio" name="bio" rows={3} required />
      <Button appearance="primary" type="submit">
        Save changes
      </Button>
    </Pane>
  )
}

export default ProfileUpdateForm
