import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Textarea from '@salesforce/design-system-react/components/textarea'
import Button from '@salesforce/design-system-react/components/button'

function ProfileUpdateForm({ theme }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bio, setBio] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-profile-firstname"
          label="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-profile-lastname"
          label="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-profile-email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-profile-phone"
          type="tel"
          label="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[+0-9\s-]{7,20}"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Textarea
          id="slds-profile-bio"
          label="Short bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element">
        <Button
          type="submit"
          variant="brand"
          label="Save changes"
        />
      </div>
    </form>
  )
}

export default ProfileUpdateForm
