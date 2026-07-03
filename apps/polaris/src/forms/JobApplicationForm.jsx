import { useState, useCallback } from 'react'
import { FormLayout, TextField, Checkbox, Button } from '@shopify/polaris'

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
      <FormLayout>
        <TextField
          label="Full name"
          type="text"
          value={fullName}
          onChange={setFullName}
          autoComplete="name"
          requiredIndicator
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <TextField
          label="Phone number"
          type="tel"
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          requiredIndicator
        />
        <TextField
          label="Role applied for"
          type="text"
          value={role}
          onChange={setRole}
          autoComplete="off"
          requiredIndicator
        />
        <TextField
          label="Resume link"
          type="url"
          value={resume}
          onChange={setResume}
          autoComplete="url"
          requiredIndicator
        />
        <TextField
          label="Cover letter"
          value={coverLetter}
          onChange={setCoverLetter}
          multiline={4}
          autoComplete="off"
          requiredIndicator
        />
        <Checkbox
          label="Keep me informed about future roles"
          checked={updates}
          onChange={setUpdates}
        />
        <Button submit variant="primary">
          Submit application
        </Button>
      </FormLayout>
    </form>
  )
}

export default JobApplicationForm
