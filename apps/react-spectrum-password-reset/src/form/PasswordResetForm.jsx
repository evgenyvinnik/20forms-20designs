import { Form, TextField, Button, Flex, Text } from '@adobe/react-spectrum'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link sent!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <Text>Request a password reset link via email.</Text>
        <TextField label="Email address" name="email" type="email" isRequired />
        <Button type="submit" variant="accent">
          Send reset link
        </Button>
      </Flex>
    </Form>
  )
}

export default PasswordResetForm
