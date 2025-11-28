import { Button, FormGroup, InputGroup, TextArea } from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup
        label="First name"
        labelFor="blueprint-profile-first-name"
      >
        <InputGroup
          id="blueprint-profile-first-name"
          name="firstName"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Last name" labelFor="blueprint-profile-last-name">
        <InputGroup
          id="blueprint-profile-last-name"
          name="lastName"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Email address" labelFor="blueprint-profile-email">
        <InputGroup
          id="blueprint-profile-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Phone number" labelFor="blueprint-profile-phone">
        <InputGroup
          id="blueprint-profile-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          pattern="[+0-9\\s-]{7,20}"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Short bio" labelFor="blueprint-profile-bio">
        <TextArea
          id="blueprint-profile-bio"
          name="bio"
          rows={3}
          required
          fill
        />
      </FormGroup>
      <Button intent="primary" type="submit">
        Save changes
      </Button>
    </form>
  )
}

export default ProfileUpdateForm
