import { Form, Button, Input } from 'rsuite'

function ProfileUpdateForm() {
  const handleSubmit = () => {
    alert('Profile updated!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
        <Form.ControlLabel>First name</Form.ControlLabel>
        <Form.Control name="firstName" type="text" required />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.ControlLabel>Last name</Form.ControlLabel>
        <Form.Control name="lastName" type="text" required />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.ControlLabel>Email address</Form.ControlLabel>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.ControlLabel>Phone number</Form.ControlLabel>
        <Form.Control name="phone" type="tel" required />
      </Form.Group>

      <Form.Group controlId="bio">
        <Form.ControlLabel>Short bio</Form.ControlLabel>
        <Form.Control name="bio" accepter={Input} as="textarea" rows={3} required />
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Save changes
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ProfileUpdateForm
