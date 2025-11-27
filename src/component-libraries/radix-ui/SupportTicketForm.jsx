import {
  Box,
  Button,
  Flex,
  RadioGroup,
  Select,
  Text,
  TextArea,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
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
              htmlFor="radix-support-name"
            >
              Full name
            </Text>
            <TextField.Root
              id="radix-support-name"
              name="fullName"
              type="text"
              placeholder="Enter your name"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-support-email"
            >
              Email address
            </Text>
            <TextField.Root
              id="radix-support-email"
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
              htmlFor="radix-support-category"
            >
              Category
            </Text>
            <Select.Root name="category" required>
              <Select.Trigger
                id="radix-support-category"
                placeholder="Select category"
              />
              <Select.Content>
                <Select.Item value="technical">Technical Issue</Select.Item>
                <Select.Item value="billing">Billing</Select.Item>
                <Select.Item value="account">Account</Select.Item>
                <Select.Item value="feature">Feature Request</Select.Item>
                <Select.Item value="other">Other</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text as="label" size="2" weight="medium">
              Priority
            </Text>
            <RadioGroup.Root name="priority" defaultValue="medium">
              <Flex gap="3">
                <Text as="label" size="2">
                  <Flex gap="2" align="center">
                    <RadioGroup.Item value="low" />
                    Low
                  </Flex>
                </Text>
                <Text as="label" size="2">
                  <Flex gap="2" align="center">
                    <RadioGroup.Item value="medium" />
                    Medium
                  </Flex>
                </Text>
                <Text as="label" size="2">
                  <Flex gap="2" align="center">
                    <RadioGroup.Item value="high" />
                    High
                  </Flex>
                </Text>
                <Text as="label" size="2">
                  <Flex gap="2" align="center">
                    <RadioGroup.Item value="urgent" />
                    Urgent
                  </Flex>
                </Text>
              </Flex>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-support-subject"
            >
              Subject
            </Text>
            <TextField.Root
              id="radix-support-subject"
              name="subject"
              type="text"
              placeholder="Brief description of the issue"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-support-description"
            >
              Description
            </Text>
            <TextArea
              id="radix-support-description"
              name="description"
              rows="4"
              placeholder="Describe your issue in detail"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-support-attachment"
            >
              Attachment (optional)
            </Text>
            <input
              id="radix-support-attachment"
              name="attachment"
              type="file"
              accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
            />
          </Box>
          <Button type="submit">Submit ticket</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default SupportTicketForm
