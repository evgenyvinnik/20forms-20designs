import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale200">
        <FormControl label="Full name">
          <Input
            id="baseweb-job-full-name"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Email address">
          <Input
            id="baseweb-job-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Phone number">
          <Input
            id="baseweb-job-phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Role applied for">
          <Input
            id="baseweb-job-role"
            name="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Resume link">
          <Input
            id="baseweb-job-resume"
            name="resume"
            type="url"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Cover letter">
          <Textarea
            id="baseweb-job-cover-letter"
            name="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          />
        </FormControl>
        <Checkbox
          checked={updates}
          onChange={(e) => setUpdates(e.target.checked)}
        >
          Keep me informed about future roles
        </Checkbox>
        <Button type="submit">Submit application</Button>
      </Block>
    </form>
  )
}

export default JobApplicationForm
