import {
  Box,
  Button,
  Checkbox,
  Flex,
  Select,
  Text,
  TextArea,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
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
              htmlFor="radix-contact-name"
            >
              Full name
            </Text>
            <TextField.Root
              id="radix-contact-name"
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
              htmlFor="radix-contact-email"
            >
              Email address
            </Text>
            <TextField.Root
              id="radix-contact-email"
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
              htmlFor="radix-contact-topic"
            >
              Topic
            </Text>
            <Select.Root name="topic" required>
              <Select.Trigger
                id="radix-contact-topic"
                placeholder="Select topic"
              />
              <Select.Content>
                <Select.Item value="support">Support</Select.Item>
                <Select.Item value="sales">Sales</Select.Item>
                <Select.Item value="feedback">Feedback</Select.Item>
                <Select.Item value="other">Other</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-contact-message"
            >
              Message
            </Text>
            <TextArea
              id="radix-contact-message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              required
            />
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="consent" />
              Allow follow-up communication
            </Flex>
          </Text>
          <Button type="submit">Submit inquiry</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default ContactInquiryForm
