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
      <FormGroup label="First name" isRequired fieldId="pf-profile-first-name">
        <TextInput
          isRequired
          type="text"
          id="pf-profile-first-name"
          name="firstName"
        />
      </FormGroup>
      <FormGroup label="Last name" isRequired fieldId="pf-profile-last-name">
        <TextInput
          isRequired
          type="text"
          id="pf-profile-last-name"
          name="lastName"
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
