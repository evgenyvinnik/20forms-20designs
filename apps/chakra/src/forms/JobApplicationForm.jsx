import {
  Button,
  Field,
  Input,
  Stack,
  Textarea,
  Checkbox,
} from '@chakra-ui/react'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Full name</Field.Label>
          <Input id="chakra-job-full-name" name="fullName" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input id="chakra-job-email" name="email" type="email" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Phone number</Field.Label>
          <Input
            id="chakra-job-phone"
            name="phone"
            type="tel"
            pattern="[+0-9\s-]{7,20}"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Role applied for</Field.Label>
          <Input id="chakra-job-role" name="role" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Resume link</Field.Label>
          <Input id="chakra-job-resume" name="resume" type="url" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Cover letter</Field.Label>
          <Textarea id="chakra-job-cover-letter" name="coverLetter" rows={4} />
        </Field.Root>
        <Checkbox.Root name="updates">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Keep me informed about future roles</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit" colorPalette="blue">
          Submit application
        </Button>
      </Stack>
    </form>
  )
}

export default JobApplicationForm
