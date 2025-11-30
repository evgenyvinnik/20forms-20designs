import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiTextArea,
  EuiCheckbox,
  EuiButton,
  EuiTitle,
  EuiSpacer,
} from '@elastic/eui'

function PrivacyConsentForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [emailOptIn, setEmailOptIn] = useState(false)
  const [smsOptIn, setSmsOptIn] = useState(false)
  const [phoneOptIn, setPhoneOptIn] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [personalization, setPersonalization] = useState(false)
  const [notes, setNotes] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Full name">
        <EuiFieldText
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiSpacer size="m" />

      <EuiTitle size="xs">
        <legend>Communication channels</legend>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiFormRow>
        <EuiCheckbox
          id="emailOptIn"
          label="Email updates"
          checked={emailOptIn}
          onChange={(e) => setEmailOptIn(e.target.checked)}
        />
      </EuiFormRow>
      <EuiFormRow>
        <EuiCheckbox
          id="smsOptIn"
          label="SMS notifications"
          checked={smsOptIn}
          onChange={(e) => setSmsOptIn(e.target.checked)}
        />
      </EuiFormRow>
      <EuiFormRow>
        <EuiCheckbox
          id="phoneOptIn"
          label="Phone calls"
          checked={phoneOptIn}
          onChange={(e) => setPhoneOptIn(e.target.checked)}
        />
      </EuiFormRow>

      <EuiSpacer size="m" />

      <EuiTitle size="xs">
        <legend>Privacy options</legend>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiFormRow>
        <EuiCheckbox
          id="analytics"
          label="Allow analytics cookies"
          checked={analytics}
          onChange={(e) => setAnalytics(e.target.checked)}
        />
      </EuiFormRow>
      <EuiFormRow>
        <EuiCheckbox
          id="personalization"
          label="Allow personalized content"
          checked={personalization}
          onChange={(e) => setPersonalization(e.target.checked)}
        />
      </EuiFormRow>

      <EuiSpacer size="m" />

      <EuiFormRow label="Additional notes">
        <EuiTextArea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Save preferences
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default PrivacyConsentForm
