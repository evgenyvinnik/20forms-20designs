import {
  Box,
  FormControl,
  TextInput,
  Textarea,
  Checkbox,
  Button,
} from '@primer/react'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Full name</FormControl.Label>
        <TextInput id="primer-job-fullname" name="fullName" type="text" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput id="primer-job-email" name="email" type="email" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Phone number</FormControl.Label>
        <TextInput
          id="primer-job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Role applied for</FormControl.Label>
        <TextInput id="primer-job-role" name="role" type="text" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Resume link</FormControl.Label>
        <TextInput id="primer-job-resume" name="resume" type="url" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Cover letter</FormControl.Label>
        <Textarea id="primer-job-cover" name="coverLetter" rows={4} block />
      </FormControl>

      <FormControl>
        <Checkbox id="primer-job-updates" name="updates" />
        <FormControl.Label>
          Keep me informed about future roles
        </FormControl.Label>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Submit application
      </Button>
    </Box>
  )
}

export default JobApplicationForm
