import {
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  TextArea,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Theme>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-privacy-name"
            >
              Full name
            </Text>
            <TextField.Root
              id="radix-privacy-name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </Box>

          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-privacy-email"
            >
              Email address
            </Text>
            <TextField.Root
              id="radix-privacy-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </Box>

          <Box>
            <Text size="2" weight="medium">
              Communication channels
            </Text>
            <Flex direction="column" gap="2" mt="2">
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox name="emailOptIn" />
                  Email updates
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox name="smsOptIn" />
                  SMS notifications
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox name="phoneOptIn" />
                  Phone calls
                </Flex>
              </Text>
            </Flex>
          </Box>

          <Box>
            <Text size="2" weight="medium">
              Privacy options
            </Text>
            <Flex direction="column" gap="2" mt="2">
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox name="analytics" />
                  Allow analytics cookies
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox name="personalization" />
                  Allow personalized content
                </Flex>
              </Text>
            </Flex>
          </Box>

          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-privacy-notes"
            >
              Additional notes
            </Text>
            <TextArea
              id="radix-privacy-notes"
              name="notes"
              rows="3"
              placeholder="Any additional notes"
            />
          </Box>

          <Button type="submit">Save preferences</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default PrivacyConsentForm
