import { Button, Checkbox, Stack, TextInput, Textarea } from '@mantine/core'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-job-full-name"
          name="fullName"
          label="Full name"
          type="text"
          required
        />
        <TextInput
          id="mantine-job-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <TextInput
          id="mantine-job-phone"
          name="phone"
          label="Phone number"
          type="tel"
          inputMode="tel"
          required
        />
        <TextInput
          id="mantine-job-role"
          name="role"
          label="Role applied for"
          type="text"
          required
        />
        <TextInput
          id="mantine-job-resume"
          name="resume"
          label="Resume link"
          type="url"
          required
        />
        <Textarea
          id="mantine-job-cover-letter"
          name="coverLetter"
          label="Cover letter"
          rows={4}
          required
        />
        <Checkbox name="updates" label="Keep me informed about future roles" />
        <Button type="submit">Submit application</Button>
      </Stack>
    </form>
  )
}

export default JobApplicationForm
