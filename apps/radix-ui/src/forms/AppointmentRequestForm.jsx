import {
  Box,
  Button,
  Flex,
  Text,
  TextArea,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
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
          <Box>
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
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-appointment-reason"
            >
              Reason for visit
            </Text>
            <TextArea
              id="radix-appointment-reason"
              name="reason"
              rows="3"
              placeholder="Enter reason for visit"
              required
            />
          </Box>
          <Button type="submit">Request appointment</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default AppointmentRequestForm
