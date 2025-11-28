import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Container,
  FormField,
  Input,
  SpaceBetween,
  Textarea,
} from '@cloudscape-design/components'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="First name">
            <Input
              id="cloudscape-profile-update-first-name"
              name="firstName"
              type="text"
              placeholder="Enter first name"
              required
            />
          </FormField>
          <FormField label="Last name">
            <Input
              id="cloudscape-profile-update-last-name"
              name="lastName"
              type="text"
              placeholder="Enter last name"
              required
            />
          </FormField>
          <FormField label="Email address">
            <Input
              id="cloudscape-profile-update-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </FormField>
          <FormField label="Phone number">
            <Input
              id="cloudscape-profile-update-phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
            />
          </FormField>
          <FormField label="Short bio">
            <Textarea
              id="cloudscape-profile-update-bio"
              name="bio"
              placeholder="Tell us about yourself"
              rows={3}
            />
          </FormField>
          <Button variant="primary" formAction="submit">
            Save changes
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default ProfileUpdateForm
