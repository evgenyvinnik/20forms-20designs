import {
  Button,
  ButtonGroup,
  Checkbox,
  Form,
  TextArea,
  TextField,
} from '@react-spectrum/s2'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Full name" name="fullName" isRequired />
      <TextField label="Email address" name="email" type="email" isRequired />
      <TextField
        label="Phone number"
        name="phone"
        type="tel"
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
        isRequired
      />
      <TextField label="Role applied for" name="role" isRequired />
      <TextField label="Resume link" name="resume" type="url" isRequired />
      <TextArea label="Cover letter" name="coverLetter" isRequired />
      <Checkbox name="updates">Keep me informed about future roles</Checkbox>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Submit application
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default JobApplicationForm
