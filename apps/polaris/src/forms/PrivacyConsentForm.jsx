import { useState, useCallback } from 'react'
import {
  FormLayout,
  Checkbox,
  Button,
  Text,
  BlockStack,
} from '@shopify/polaris'

function PrivacyConsentForm() {
  const [essentialCookies, setEssentialCookies] = useState(true)
  const [analyticsCookies, setAnalyticsCookies] = useState(false)
  const [marketingCookies, setMarketingCookies] = useState(false)
  const [thirdPartyCookies, setThirdPartyCookies] = useState(false)
  const [dataSharing, setDataSharing] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }, [])

  const handleAcceptAll = useCallback(() => {
    setAnalyticsCookies(true)
    setMarketingCookies(true)
    setThirdPartyCookies(true)
    setDataSharing(true)
    alert('All cookies accepted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <Text as="p">
          We use cookies and similar technologies to improve your experience.
          Please select your preferences below.
        </Text>
        <BlockStack gap="300">
          <Checkbox
            label="Essential cookies (required)"
            helpText="These cookies are necessary for the website to function properly."
            checked={essentialCookies}
            onChange={setEssentialCookies}
            disabled
          />
          <Checkbox
            label="Analytics cookies"
            helpText="Help us understand how visitors interact with our website."
            checked={analyticsCookies}
            onChange={setAnalyticsCookies}
          />
          <Checkbox
            label="Marketing cookies"
            helpText="Used to deliver personalized advertisements."
            checked={marketingCookies}
            onChange={setMarketingCookies}
          />
          <Checkbox
            label="Third-party cookies"
            helpText="Set by third-party services that appear on our pages."
            checked={thirdPartyCookies}
            onChange={setThirdPartyCookies}
          />
          <Checkbox
            label="Data sharing with partners"
            helpText="Allow sharing of data with trusted partners for improved services."
            checked={dataSharing}
            onChange={setDataSharing}
          />
        </BlockStack>
        <BlockStack gap="300">
          <Button submit variant="primary">
            Save preferences
          </Button>
          <Button onClick={handleAcceptAll}>Accept all</Button>
        </BlockStack>
      </FormLayout>
    </form>
  )
}

export default PrivacyConsentForm
