import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Checkbox,
  Button,
  Text,
  BlockStack,
} from '@shopify/polaris'

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

        <BlockStack gap="200">
          <Text as="legend" variant="headingSm">
            Communication channels
          </Text>
          <Checkbox
            label="Email updates"
            checked={emailOptIn}
            onChange={setEmailOptIn}
          />
          <Checkbox
            label="SMS notifications"
            checked={smsOptIn}
            onChange={setSmsOptIn}
          />
          <Checkbox
            label="Phone calls"
            checked={phoneOptIn}
            onChange={setPhoneOptIn}
          />
        </BlockStack>

        <BlockStack gap="200">
          <Text as="legend" variant="headingSm">
            Privacy options
          </Text>
          <Checkbox
            label="Allow analytics cookies"
            checked={analytics}
            onChange={setAnalytics}
          />
          <Checkbox
            label="Allow personalized content"
            checked={personalization}
            onChange={setPersonalization}
          />
        </BlockStack>

        <TextField
          label="Additional notes"
          value={notes}
          onChange={setNotes}
          multiline={3}
          autoComplete="off"
        />

        <Button submit variant="primary">
          Save preferences
        </Button>
      </FormLayout>
    </form>
  )
}

export default PrivacyConsentForm
