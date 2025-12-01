import {
  Box,
  Button,
  Flex,
  RadioGroup,
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
            <Text as="label" size="2" weight="medium">
              Priority
            </Text>
            <RadioGroup.Root name="priority" required>
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
              </Flex>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-support-description"
            >
              Issue description
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
              htmlFor="radix-support-attachments"
            >
              Attachments
            </Text>
            <input
              id="radix-support-attachments"
              name="attachments"
              type="file"
              multiple
            />
          </Box>
          <Button type="submit">Submit ticket</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default SupportTicketForm
