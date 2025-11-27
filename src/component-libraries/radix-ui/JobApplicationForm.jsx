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
              htmlFor="radix-job-first-name"
            >
              First name
            </Text>
            <TextField.Root
              id="radix-job-first-name"
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
              htmlFor="radix-job-last-name"
            >
              Last name
            </Text>
            <TextField.Root
              id="radix-job-last-name"
              name="lastName"
              type="text"
              placeholder="Enter last name"
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
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-job-position"
            >
              Position applying for
            </Text>
            <Select.Root name="position" required>
              <Select.Trigger
                id="radix-job-position"
                placeholder="Select position"
              />
              <Select.Content>
                <Select.Item value="frontend">Frontend Developer</Select.Item>
                <Select.Item value="backend">Backend Developer</Select.Item>
                <Select.Item value="fullstack">
                  Full Stack Developer
                </Select.Item>
                <Select.Item value="designer">UI/UX Designer</Select.Item>
                <Select.Item value="pm">Product Manager</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-job-experience"
            >
              Years of experience
            </Text>
            <Select.Root name="experience" required>
              <Select.Trigger
                id="radix-job-experience"
                placeholder="Select experience"
              />
              <Select.Content>
                <Select.Item value="0-1">0-1 years</Select.Item>
                <Select.Item value="1-3">1-3 years</Select.Item>
                <Select.Item value="3-5">3-5 years</Select.Item>
                <Select.Item value="5+">5+ years</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-job-resume"
            >
              Resume/CV
            </Text>
            <input
              id="radix-job-resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
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
              rows="4"
              placeholder="Write your cover letter"
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-job-linkedin"
            >
              LinkedIn profile
            </Text>
            <TextField.Root
              id="radix-job-linkedin"
              name="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="relocate" />
              Willing to relocate
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="terms" required />I confirm the information
              provided is accurate
            </Flex>
          </Text>
          <Button type="submit">Submit application</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default JobApplicationForm
