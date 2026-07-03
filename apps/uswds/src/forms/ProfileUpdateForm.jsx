import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Button,
} from '@trussworks/react-uswds'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-profile-first-name">First name</Label>
        <TextInput
          id="uswds-profile-first-name"
          name="firstName"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-profile-last-name">Last name</Label>
        <TextInput
          id="uswds-profile-last-name"
          name="lastName"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-profile-email">Email address</Label>
        <TextInput
          id="uswds-profile-email"
          name="email"
          type="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-profile-phone">Phone number</Label>
        <TextInput id="uswds-profile-phone" name="phone" type="tel" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-profile-bio">Short bio</Label>
        <Textarea id="uswds-profile-bio" />
      </FormGroup>
      <Button type="submit">Save changes</Button>
    </Form>
  )
}

export default ProfileUpdateForm
