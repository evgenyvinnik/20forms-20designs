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

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
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
              htmlFor="radix-profile-first-name"
            >
              First name
            </Text>
            <TextField.Root
              id="radix-profile-first-name"
              name="firstName"
              type="text"

              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-profile-last-name"
            >
              Last name
            </Text>
            <TextField.Root
              id="radix-profile-last-name"
              name="lastName"
              type="text"

              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-profile-email"
            >
              Email address
            </Text>
            <TextField.Root
              id="radix-profile-email"
              name="email"
              type="email"

              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-profile-phone"
            >
              Phone number
            </Text>
            <TextField.Root
              id="radix-profile-phone"
              name="phone"
              type="tel"

              pattern="[+0-9\s-]{7,20}"
              inputMode="tel"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-profile-bio"
            >
              Short bio
            </Text>
            <TextArea id="radix-profile-bio" />
          </Box>
          <Button type="submit">Save changes</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default ProfileUpdateForm
