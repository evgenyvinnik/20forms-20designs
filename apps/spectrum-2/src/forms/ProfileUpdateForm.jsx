import {
  Button,
  ButtonGroup,
  Form,
  TextArea,
  TextField,
} from '@react-spectrum/s2'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="First name" name="firstName" isRequired />
      <TextField label="Last name" name="lastName" isRequired />
      <TextField label="Email address" name="email" type="email" isRequired />
      <TextField
        label="Phone number"
        name="phone"
        type="tel"
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
        isRequired
      />
      <TextArea label="Short bio" name="bio" />
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Save changes
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default ProfileUpdateForm
