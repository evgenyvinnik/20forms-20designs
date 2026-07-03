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
    <form onSubmit={handleSubmit}>
      <SpaceBetween direction="vertical" size="l">
        <FormField label="First name">
          <Input
            id="cloudscape-profile-update-first-name"
            name="firstName"
            type="text"

            required
          />
        </FormField>
        <FormField label="Last name">
          <Input
            id="cloudscape-profile-update-last-name"
            name="lastName"
            type="text"

            required
          />
        </FormField>
        <FormField label="Email address">
          <Input
            id="cloudscape-profile-update-email"
            name="email"
            type="email"

            required
          />
        </FormField>
        <FormField label="Phone number">
          <Input id="cloudscape-profile-update-phone" name="phone" type="tel" />
        </FormField>
        <FormField label="Short bio">
          <Textarea
            id="cloudscape-profile-update-bio"
            name="bio"

            rows={3}
          />
        </FormField>
        <Button variant="primary" formAction="submit">
          Save changes
        </Button>
      </SpaceBetween>
    </form>
  )
}

export default ProfileUpdateForm
