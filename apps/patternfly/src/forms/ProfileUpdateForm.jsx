import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  ActionGroup,
} from '@patternfly/react-core'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Full name" isRequired fieldId="pf-profile-full-name">
        <TextInput
          isRequired
          type="text"
          id="pf-profile-full-name"
          name="fullName"
        />
      </FormGroup>
      <FormGroup label="Email address" isRequired fieldId="pf-profile-email">
        <TextInput isRequired type="email" id="pf-profile-email" name="email" />
      </FormGroup>
      <FormGroup label="Phone number" isRequired fieldId="pf-profile-phone">
        <TextInput isRequired type="tel" id="pf-profile-phone" name="phone" />
      </FormGroup>
      <FormGroup label="Short bio" isRequired fieldId="pf-profile-bio">
        <TextArea isRequired id="pf-profile-bio" name="bio" rows={3} />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Save changes
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default ProfileUpdateForm
