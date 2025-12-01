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
              placeholder="Enter first name"
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
              placeholder="Enter last name"
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
              placeholder="Enter email"
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
              placeholder="Enter phone number"
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
            <TextArea
              id="radix-profile-bio"
              name="bio"
              rows={3}
              placeholder="Tell us about yourself"
              required
            />
          </Box>
          <Button type="submit">Save changes</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default ProfileUpdateForm
