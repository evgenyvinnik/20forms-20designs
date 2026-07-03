import { useState } from 'react'
import {
  TextInput,
  CheckboxInput,
  TextArea,
  Button,
  Heading,
} from '@astryxdesign/core'

function PrivacyConsentForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [emailOptIn, setEmailOptIn] = useState(false)
  const [smsOptIn, setSmsOptIn] = useState(false)
  const [phoneOptIn, setPhoneOptIn] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [personalization, setPersonalization] = useState(false)
  const [notes, setNotes] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <TextInput
        id="astryx-privacy-name"
        name="fullName"
        type="text"
        label="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-privacy-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <fieldset
        style={{
          border: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <Heading level={4}>Communication channels</Heading>
        <CheckboxInput
          name="emailOptIn"
          label="Email updates"
          checked={emailOptIn}
          onChange={(e) => setEmailOptIn(e.target.checked)}
        />
        <CheckboxInput
          name="smsOptIn"
          label="SMS notifications"
          checked={smsOptIn}
          onChange={(e) => setSmsOptIn(e.target.checked)}
        />
        <CheckboxInput
          name="phoneOptIn"
          label="Phone calls"
          checked={phoneOptIn}
          onChange={(e) => setPhoneOptIn(e.target.checked)}
        />
      </fieldset>

      <fieldset
        style={{
          border: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <Heading level={4}>Privacy options</Heading>
        <CheckboxInput
          name="analytics"
          label="Allow analytics cookies"
          checked={analytics}
          onChange={(e) => setAnalytics(e.target.checked)}
        />
        <CheckboxInput
          name="personalization"
          label="Allow personalized content"
          checked={personalization}
          onChange={(e) => setPersonalization(e.target.checked)}
        />
      </fieldset>

      <TextArea
        id="astryx-privacy-notes"
        name="notes"
        label="Additional notes"
        rows={3}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <Button type="submit" variant="primary">
        Save preferences
      </Button>
    </form>
  )
}

export default PrivacyConsentForm
