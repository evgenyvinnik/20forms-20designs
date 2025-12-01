import { Form, Button } from 'semantic-ui-react'

function ProfileUpdateForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-profile-update-firstname"
        name="firstName"
        label="First name"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-profile-update-lastname"
        name="lastName"
        label="Last name"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-profile-update-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Form.Input
        id="semantic-ui-profile-update-phone"
        name="phone"
        label="Phone number"
        type="tel"
        required
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
      />
      <Form.TextArea
        id="semantic-ui-profile-update-bio"
        name="bio"
        label="Short bio"
        rows={3}
        required
      />
      <Button type="submit" primary>
        Save changes
      </Button>
    </Form>
  )
}

export default ProfileUpdateForm
