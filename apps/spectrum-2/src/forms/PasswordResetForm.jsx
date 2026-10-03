import { Button, ButtonGroup, Form, TextField } from '@react-spectrum/s2'
import { style } from '@react-spectrum/s2/style' with { type: 'macro' }

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p className={style({ font: 'body', margin: 0 })}>
        Request a password reset link via email.
      </p>
      <TextField label="Email address" name="email" type="email" isRequired />
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Send reset link
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default PasswordResetForm
