import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Textarea from '@salesforce/design-system-react/components/textarea'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

function PrivacyConsentForm({ theme }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [emailOptIn, setEmailOptIn] = useState(false)
  const [smsOptIn, setSmsOptIn] = useState(false)
  const [phoneOptIn, setPhoneOptIn] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [personalization, setPersonalization] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-privacy-fullname"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-privacy-email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Textarea
          id="slds-privacy-notes"
          label="Additional notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <fieldset className="slds-form-element slds-m-bottom_medium">
        <legend className="slds-form-element__legend slds-form-element__label">
          Communication Channels
        </legend>
        <div className="slds-form-element__control">
          <Checkbox
            id="slds-privacy-email-optin"
            labels={{ label: 'Email updates' }}
            checked={emailOptIn}
            onChange={() => setEmailOptIn(!emailOptIn)}
          />
          <Checkbox
            id="slds-privacy-sms-optin"
            labels={{ label: 'SMS notifications' }}
            checked={smsOptIn}
            onChange={() => setSmsOptIn(!smsOptIn)}
          />
          <Checkbox
            id="slds-privacy-phone-optin"
            labels={{ label: 'Phone calls' }}
            checked={phoneOptIn}
            onChange={() => setPhoneOptIn(!phoneOptIn)}
          />
        </div>
      </fieldset>

      <fieldset className="slds-form-element slds-m-bottom_medium">
        <legend className="slds-form-element__legend slds-form-element__label">
          Privacy Options
        </legend>
        <div className="slds-form-element__control">
          <Checkbox
            id="slds-privacy-analytics"
            labels={{ label: 'Allow analytics cookies' }}
            checked={analytics}
            onChange={() => setAnalytics(!analytics)}
          />
          <Checkbox
            id="slds-privacy-personalization"
            labels={{ label: 'Allow personalized content' }}
            checked={personalization}
            onChange={() => setPersonalization(!personalization)}
          />
        </div>
      </fieldset>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Save preferences" />
      </div>
    </form>
  )
}

export default PrivacyConsentForm
