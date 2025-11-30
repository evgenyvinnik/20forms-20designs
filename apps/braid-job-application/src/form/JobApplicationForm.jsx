import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Textarea, Checkbox, Button } from 'braid-design-system'

function JobApplicationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [resume, setResume] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Application submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-job-full-name"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <TextField
          id="braid-job-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          id="braid-job-phone"
          label="Phone number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          inputMode="tel"
          required
        />

        <TextField
          id="braid-job-role"
          label="Role applied for"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />

        <TextField
          id="braid-job-resume"
          label="Resume link"
          type="url"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          required
        />

        <Textarea
          id="braid-job-cover-letter"
          label="Cover letter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          lines={4}
          required
        />

        <Checkbox
          id="braid-job-updates"
          label="Keep me informed about future roles"
          checked={updates}
          onChange={(e) => setUpdates(e.target.checked)}
        />

        <Box>
          <Button type="submit">Submit application</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default JobApplicationForm
