import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { HeadingSmall } from 'baseui/typography'
import { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Full name">
          <Input
            id="baseweb-privacy-name"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl label="Email address">
          <Input
            id="baseweb-privacy-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>

        <Block as="fieldset">
          <HeadingSmall marginBottom="scale400">
            Communication channels
          </HeadingSmall>
          <Block display="flex" flexDirection="column" gridGap="scale300">
            <Checkbox
              checked={emailOptIn}
              onChange={(e) => setEmailOptIn(e.target.checked)}
            >
              Email updates
            </Checkbox>
            <Checkbox
              checked={smsOptIn}
              onChange={(e) => setSmsOptIn(e.target.checked)}
            >
              SMS notifications
            </Checkbox>
            <Checkbox
              checked={phoneOptIn}
              onChange={(e) => setPhoneOptIn(e.target.checked)}
            >
              Phone calls
            </Checkbox>
          </Block>
        </Block>

        <Block as="fieldset">
          <HeadingSmall marginBottom="scale400">Privacy options</HeadingSmall>
          <Block display="flex" flexDirection="column" gridGap="scale300">
            <Checkbox
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            >
              Allow analytics cookies
            </Checkbox>
            <Checkbox
              checked={personalization}
              onChange={(e) => setPersonalization(e.target.checked)}
            >
              Allow personalized content
            </Checkbox>
          </Block>
        </Block>

        <FormControl label="Additional notes">
          <Textarea
            id="baseweb-privacy-notes"
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </FormControl>

        <Button type="submit">Save preferences</Button>
      </Block>
    </form>
  )
}

export default PrivacyConsentForm
