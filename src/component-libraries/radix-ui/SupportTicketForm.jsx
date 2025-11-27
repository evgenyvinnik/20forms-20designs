import {
  Box,
  Button,
  Flex,
  RadioGroup,
  Select,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="support-name">
            Full name
          </Text>
          <TextField.Root
            id="support-name"
            name="fullName"
            type="text"
            placeholder="Enter your name"
            required
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="support-email">
            Email address
          </Text>
          <TextField.Root
            id="support-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="support-category">
            Category
          </Text>
          <Select.Root name="category" required>
            <Select.Trigger
              id="support-category"
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
          <Text as="label" size="2" weight="medium" htmlFor="support-subject">
            Subject
          </Text>
          <TextField.Root
            id="support-subject"
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
            htmlFor="support-description"
          >
            Description
          </Text>
          <TextArea
            id="support-description"
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
            htmlFor="support-attachment"
          >
            Attachment (optional)
          </Text>
          <input
            id="support-attachment"
            name="attachment"
            type="file"
            accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
          />
        </Box>
        <Button type="submit">Submit ticket</Button>
      </Flex>
    </form>
  )
}

export default SupportTicketForm
