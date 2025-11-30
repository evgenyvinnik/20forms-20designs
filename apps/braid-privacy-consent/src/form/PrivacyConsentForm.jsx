import { useState, useCallback } from 'react'
import {
  Box,
  Stack,
  TextField,
  Textarea,
  Checkbox,
  Button,
  Text,
} from 'braid-design-system'

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
    <form onSubmit={handleSubmit}>
      <Stack space="large">
        <TextField
          id="braid-privacy-name"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <TextField
          id="braid-privacy-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Stack space="small">
          <Text weight="medium">Communication channels</Text>
          <Checkbox
            id="braid-privacy-email-optin"
            label="Email updates"
            checked={emailOptIn}
            onChange={(e) => setEmailOptIn(e.target.checked)}
          />
          <Checkbox
            id="braid-privacy-sms-optin"
            label="SMS notifications"
            checked={smsOptIn}
            onChange={(e) => setSmsOptIn(e.target.checked)}
          />
          <Checkbox
            id="braid-privacy-phone-optin"
            label="Phone calls"
            checked={phoneOptIn}
            onChange={(e) => setPhoneOptIn(e.target.checked)}
          />
        </Stack>

        <Stack space="small">
          <Text weight="medium">Privacy options</Text>
          <Checkbox
            id="braid-privacy-analytics"
            label="Allow analytics cookies"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
          />
          <Checkbox
            id="braid-privacy-personalization"
            label="Allow personalized content"
            checked={personalization}
            onChange={(e) => setPersonalization(e.target.checked)}
          />
        </Stack>

        <Textarea
          id="braid-privacy-notes"
          label="Additional notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          lines={3}
        />

        <Box>
          <Button type="submit">Save preferences</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default PrivacyConsentForm
