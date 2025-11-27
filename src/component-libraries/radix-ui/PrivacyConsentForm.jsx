import { Box, Button, Checkbox, Flex, Text } from '@radix-ui/themes'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Text size="3" weight="bold">
          Privacy preferences
        </Text>
        <Text size="2" color="gray">
          Please review and manage your privacy settings below.
        </Text>

        <Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="essential" defaultChecked disabled />
              Essential cookies (required)
            </Flex>
          </Text>
          <Text size="1" color="gray">
            These cookies are necessary for the website to function properly.
          </Text>
        </Box>

        <Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="analytics" />
              Analytics cookies
            </Flex>
          </Text>
          <Text size="1" color="gray">
            Help us understand how visitors interact with our website.
          </Text>
        </Box>

        <Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="marketing" />
              Marketing cookies
            </Flex>
          </Text>
          <Text size="1" color="gray">
            Used to deliver personalized advertisements.
          </Text>
        </Box>

        <Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="thirdParty" />
              Third-party cookies
            </Flex>
          </Text>
          <Text size="1" color="gray">
            Allow third-party services to provide enhanced functionality.
          </Text>
        </Box>

        <Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="dataSharing" />
              Data sharing with partners
            </Flex>
          </Text>
          <Text size="1" color="gray">
            Share anonymized data with our trusted partners.
          </Text>
        </Box>

        <Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="terms" required />I have read and agree to the
              privacy policy
            </Flex>
          </Text>
        </Box>

        <Flex gap="3">
          <Button type="submit">Save preferences</Button>
          <Button type="button" variant="outline">
            Accept all
          </Button>
          <Button type="button" variant="outline">
            Reject all
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}

export default PrivacyConsentForm
