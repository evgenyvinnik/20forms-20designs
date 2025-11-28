import { Form, Button } from 'react-bootstrap'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-profile-first-name">
        <Form.Label>First name</Form.Label>
        <Form.Control name="firstName" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-profile-last-name">
        <Form.Label>Last name</Form.Label>
        <Form.Control name="lastName" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-profile-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-profile-phone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          name="phone"
          type="tel"
          pattern={'[+0-9\\s-]{7,20}'}
          inputMode="tel"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-profile-bio">
        <Form.Label>Short bio</Form.Label>
        <Form.Control as="textarea" name="bio" rows={3} required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save changes
      </Button>
    </Form>
  )
}

export default ProfileUpdateForm
