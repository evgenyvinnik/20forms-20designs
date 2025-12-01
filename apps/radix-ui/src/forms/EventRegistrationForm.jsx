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

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
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
              htmlFor="radix-event-name"
            >
              Full name
            </Text>
            <TextField.Root
              id="radix-event-name"
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
              htmlFor="radix-event-ticket"
            >
              Ticket type
            </Text>
            <Select.Root name="ticketType" required>
              <Select.Trigger
                id="radix-event-ticket"
                placeholder="Select ticket"
              />
              <Select.Content>
                <Select.Item value="general">General admission</Select.Item>
                <Select.Item value="vip">VIP</Select.Item>
                <Select.Item value="student">Student</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-event-guests"
            >
              Number of guests
            </Text>
            <TextField.Root
              id="radix-event-guests"
              name="guestCount"
              type="number"
              placeholder="0"
              min={0}
              max={20}
              required
            />
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="newsletter" />
              Notify me about future events
            </Flex>
          </Text>
          <Button type="submit">Register</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default EventRegistrationForm
