import { Form, TextField, TextArea, Button, Flex } from '@adobe/react-spectrum'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField label="First name" name="firstName" type="text" isRequired />
        <TextField label="Last name" name="lastName" type="text" isRequired />
        <TextField label="Email address" name="email" type="email" isRequired />
        <TextField
          label="Phone number"
          name="phone"
          type="tel"
          inputMode="tel"
          isRequired
        />
        <TextArea label="Short bio" name="bio" isRequired />
        <Button type="submit" variant="accent">
          Save changes
        </Button>
      </Flex>
    </Form>
  )
}

export default ProfileUpdateForm
