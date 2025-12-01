import { Form, TextField, TextArea, Checkbox, Button, Flex } from '@adobe/react-spectrum'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          isRequired
        />
        <TextField
          label="Email address"
          name="email"
          type="email"
          isRequired
        />
        <TextField
          label="Phone number"
          name="phone"
          type="tel"
          inputMode="tel"
          isRequired
        />
        <TextField
          label="Role applied for"
          name="role"
          type="text"
          isRequired
        />
        <TextField
          label="Resume link"
          name="resume"
          type="url"
          isRequired
        />
        <TextArea
          label="Cover letter"
          name="coverLetter"
          isRequired
        />
        <Checkbox name="updates">Keep me informed about future roles</Checkbox>
        <Button type="submit" variant="accent">
          Submit application
        </Button>
      </Flex>
    </Form>
  )
}

export default JobApplicationForm
