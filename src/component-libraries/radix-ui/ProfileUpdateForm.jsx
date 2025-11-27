import { Box, Button, Flex, Text, TextArea, TextField } from '@radix-ui/themes'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Box>
          <Text
            as="label"
            size="2"
            weight="medium"
            htmlFor="profile-first-name"
          >
            First name
          </Text>
          <TextField.Root
            id="profile-first-name"
            name="firstName"
            type="text"
            placeholder="Enter first name"
            required
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="profile-last-name">
            Last name
          </Text>
          <TextField.Root
            id="profile-last-name"
            name="lastName"
            type="text"
            placeholder="Enter last name"
            required
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="profile-email">
            Email address
          </Text>
          <TextField.Root
            id="profile-email"
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="profile-phone">
            Phone number
          </Text>
          <TextField.Root
            id="profile-phone"
            name="phone"
            type="tel"
            placeholder="Enter phone number"
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="profile-bio">
            Bio
          </Text>
          <TextArea
            id="profile-bio"
            name="bio"
            rows="3"
            placeholder="Tell us about yourself"
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="profile-avatar">
            Profile picture
          </Text>
          <input
            id="profile-avatar"
            name="avatar"
            type="file"
            accept="image/*"
          />
        </Box>
        <Button type="submit">Update profile</Button>
      </Flex>
    </form>
  )
}

export default ProfileUpdateForm
