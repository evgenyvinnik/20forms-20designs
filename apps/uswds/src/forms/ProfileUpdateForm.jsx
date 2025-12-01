import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Button,
} from '@trussworks/react-uswds'

function ProfileUpdateForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-profile-first-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          First name
        </Label>
        <TextInput
          id="uswds-profile-first-name"
          name="firstName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-profile-last-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Last name
        </Label>
        <TextInput
          id="uswds-profile-last-name"
          name="lastName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-profile-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-profile-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-profile-phone"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Phone number
        </Label>
        <TextInput
          id="uswds-profile-phone"
          name="phone"
          type="tel"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-profile-bio"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Short bio
        </Label>
        <Textarea
          id="uswds-profile-bio"
          name="bio"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Button type="submit">Save changes</Button>
    </Form>
  )
}

export default ProfileUpdateForm
