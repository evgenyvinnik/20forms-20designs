import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  TextArea,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment requested!')
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
              htmlFor="radix-appointment-name"
            >
              Full name
            </Text>
            <TextField.Root
              id="radix-appointment-name"
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
              htmlFor="radix-appointment-email"
            >
              Email address
            </Text>
            <TextField.Root
              id="radix-appointment-email"
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
              htmlFor="radix-appointment-phone"
            >
              Phone number
            </Text>
            <TextField.Root
              id="radix-appointment-phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-appointment-service"
            >
              Service type
            </Text>
            <Select.Root name="service" required>
              <Select.Trigger
                id="radix-appointment-service"
                placeholder="Select service"
              />
              <Select.Content>
                <Select.Item value="consultation">Consultation</Select.Item>
                <Select.Item value="followup">Follow-up</Select.Item>
                <Select.Item value="checkup">Check-up</Select.Item>
                <Select.Item value="other">Other</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Flex gap="3">
            <Box style={{ flex: 1 }}>
              <Text
                as="label"
                size="2"
                weight="medium"
                htmlFor="radix-appointment-date"
              >
                Preferred date
              </Text>
              <input
                id="radix-appointment-date"
                name="date"
                type="date"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  boxSizing: 'border-box',
                }}
              />
            </Box>
            <Box style={{ flex: 1 }}>
              <Text
                as="label"
                size="2"
                weight="medium"
                htmlFor="radix-appointment-time"
              >
                Preferred time
              </Text>
              <input
                id="radix-appointment-time"
                name="time"
                type="time"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  boxSizing: 'border-box',
                }}
              />
            </Box>
          </Flex>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-appointment-notes"
            >
              Additional notes
            </Text>
            <TextArea
              id="radix-appointment-notes"
              name="notes"
              rows="3"
              placeholder="Any additional information"
            />
          </Box>
          <Button type="submit">Request appointment</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default AppointmentRequestForm
