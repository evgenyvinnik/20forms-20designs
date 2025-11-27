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

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registered for event!')
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
              htmlFor="radix-event-first-name"
            >
              First name
            </Text>
            <TextField.Root
              id="radix-event-first-name"
              name="firstName"
              type="text"
              placeholder="Enter first name"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-event-last-name"
            >
              Last name
            </Text>
            <TextField.Root
              id="radix-event-last-name"
              name="lastName"
              type="text"
              placeholder="Enter last name"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-event-email"
            >
              Email address
            </Text>
            <TextField.Root
              id="radix-event-email"
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
              htmlFor="radix-event-organization"
            >
              Organization
            </Text>
            <TextField.Root
              id="radix-event-organization"
              name="organization"
              type="text"
              placeholder="Enter organization (optional)"
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-event-ticket"
            >
              Ticket type
            </Text>
            <Select.Root name="ticketType" required>
              <Select.Trigger
                id="radix-event-ticket"
                placeholder="Select ticket type"
              />
              <Select.Content>
                <Select.Item value="general">General Admission</Select.Item>
                <Select.Item value="vip">VIP</Select.Item>
                <Select.Item value="student">Student</Select.Item>
                <Select.Item value="early">Early Bird</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-event-dietary"
            >
              Dietary restrictions
            </Text>
            <TextArea
              id="radix-event-dietary"
              name="dietaryRestrictions"
              rows="2"
              placeholder="Any dietary restrictions or allergies"
            />
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="updates" />
              Receive event updates via email
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="terms" required />I agree to the event terms and
              conditions
            </Flex>
          </Text>
          <Button type="submit">Register</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default EventRegistrationForm
