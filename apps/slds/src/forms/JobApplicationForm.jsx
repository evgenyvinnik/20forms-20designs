import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Textarea from '@salesforce/design-system-react/components/textarea'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

function JobApplicationForm({ theme }) {
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
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-job-fullname"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-job-email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-job-phone"
          type="tel"
          label="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[+0-9\s-]{7,20}"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-job-role"
          label="Role applied for"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-job-resume"
          type="url"
          label="Resume link"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Textarea
          id="slds-job-coverletter"
          label="Cover letter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Checkbox
          id="slds-job-updates"
          labels={{ label: 'Keep me informed about future roles' }}
          checked={updates}
          onChange={() => setUpdates(!updates)}
        />
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Submit application" />
      </div>
    </form>
  )
}

export default JobApplicationForm
