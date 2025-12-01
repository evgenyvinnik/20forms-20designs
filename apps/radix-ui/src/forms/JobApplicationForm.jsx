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

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
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
              htmlFor="radix-job-full-name"
            >
              Full name
            </Text>
            <TextField.Root
              id="radix-job-full-name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </Box>
          <Box>
            <Text as="label" size="2" weight="medium" htmlFor="radix-job-email">
              Email address
            </Text>
            <TextField.Root
              id="radix-job-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </Box>
          <Box>
            <Text as="label" size="2" weight="medium" htmlFor="radix-job-phone">
              Phone number
            </Text>
            <TextField.Root
              id="radix-job-phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              pattern="[+0-9\s-]{7,20}"
              inputMode="tel"
              required
            />
          </Box>
          <Box>
            <Text as="label" size="2" weight="medium" htmlFor="radix-job-role">
              Role applied for
            </Text>
            <TextField.Root
              id="radix-job-role"
              name="role"
              type="text"
              placeholder="Enter role you're applying for"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-job-resume"
            >
              Resume link
            </Text>
            <TextField.Root
              id="radix-job-resume"
              name="resume"
              type="url"
              placeholder="https://example.com/resume.pdf"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-job-cover-letter"
            >
              Cover letter
            </Text>
            <TextArea
              id="radix-job-cover-letter"
              name="coverLetter"
              rows={4}
              placeholder="Write your cover letter"
              required
            />
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="updates" />
              Keep me informed about future roles
            </Flex>
          </Text>
          <Button type="submit">Submit application</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default JobApplicationForm
