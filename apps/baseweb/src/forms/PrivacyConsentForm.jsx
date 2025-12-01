import { FormControl } from 'baseui/form-control'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { HeadingSmall, ParagraphSmall } from 'baseui/typography'
import { useState } from 'react'

function PrivacyConsentForm() {
  const [emailUpdates, setEmailUpdates] = useState(false)
  const [smsUpdates, setSmsUpdates] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [thirdParty, setThirdParty] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!termsAccepted) {
      alert('Please accept the terms and conditions')
      return
    }
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <Block as="section">
          <HeadingSmall marginBottom="scale400">
            Communication Preferences
          </HeadingSmall>
          <Block display="flex" flexDirection="column" gridGap="scale300">
            <Checkbox
              checked={emailUpdates}
              onChange={(e) => setEmailUpdates(e.target.checked)}
            >
              Email updates
            </Checkbox>
            <Checkbox
              checked={smsUpdates}
              onChange={(e) => setSmsUpdates(e.target.checked)}
            >
              SMS updates
            </Checkbox>
            <Checkbox
              checked={pushNotifications}
              onChange={(e) => setPushNotifications(e.target.checked)}
            >
              Push notifications
            </Checkbox>
          </Block>
        </Block>

        <Block as="section">
          <HeadingSmall marginBottom="scale400">Privacy Options</HeadingSmall>
          <Block display="flex" flexDirection="column" gridGap="scale300">
            <Checkbox
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            >
              Allow analytics cookies
            </Checkbox>
            <Checkbox
              checked={thirdParty}
              onChange={(e) => setThirdParty(e.target.checked)}
            >
              Share data with third parties
            </Checkbox>
          </Block>
        </Block>

        <Block as="section">
          <HeadingSmall marginBottom="scale400">
            Terms & Conditions
          </HeadingSmall>
          <Checkbox
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          >
            I accept the terms and conditions
          </Checkbox>
        </Block>

        <Block display="flex" gridGap="scale400">
          <Button type="submit">Save Preferences</Button>
          <Button
            type="button"
            kind="secondary"
            onClick={() => {
              setEmailUpdates(false)
              setSmsUpdates(false)
              setPushNotifications(false)
              setAnalytics(false)
              setThirdParty(false)
              setTermsAccepted(false)
            }}
          >
            Reset All
          </Button>
        </Block>
      </Block>
    </form>
  )
}

export default PrivacyConsentForm
