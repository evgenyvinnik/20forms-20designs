import { useState } from 'react'
import { TextInput, TextArea, CheckboxInput, Button } from '@astryxdesign/core'

function JobApplicationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [resume, setResume] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-job-full-name"
        name="fullName"
        type="text"
        label="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-job-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        id="astryx-job-phone"
        name="phone"
        type="tel"
        label="Phone number"
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <TextInput
        id="astryx-job-role"
        name="role"
        type="text"
        label="Role applied for"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />

      <TextInput
        id="astryx-job-resume"
        name="resume"
        type="url"
        label="Resume link"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        required
      />

      <TextArea
        id="astryx-job-cover-letter"
        name="coverLetter"
        label="Cover letter"
        rows={4}
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
        required
      />

      <CheckboxInput
        name="updates"
        label="Keep me informed about future roles"
        checked={updates}
        onChange={(e) => setUpdates(e.target.checked)}
      />

      <Button type="submit" variant="primary">
        Submit application
      </Button>
    </form>
  )
}

export default JobApplicationForm
