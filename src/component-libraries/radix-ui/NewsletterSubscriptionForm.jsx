import {
  Box,
  Button,
  Checkbox,
  Flex,
  Select,
  Text,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Subscribed to newsletter!')
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
              htmlFor="radix-newsletter-email"
            >
              Email address
            </Text>
            <TextField.Root
              id="radix-newsletter-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-newsletter-frequency"
            >
              Frequency
            </Text>
            <Select.Root name="frequency" defaultValue="weekly">
              <Select.Trigger id="radix-newsletter-frequency" />
              <Select.Content>
                <Select.Item value="daily">Daily</Select.Item>
                <Select.Item value="weekly">Weekly</Select.Item>
                <Select.Item value="monthly">Monthly</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="terms" required />I agree to the terms and
              conditions
            </Flex>
          </Text>
          <Button type="submit">Subscribe</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default NewsletterSubscriptionForm
