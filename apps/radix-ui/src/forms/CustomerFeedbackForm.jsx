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

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
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
              htmlFor="radix-feedback-name"
            >
              Name
            </Text>
            <TextField.Root
              id="radix-feedback-name"
              name="name"
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
              htmlFor="radix-feedback-email"
            >
              Email address
            </Text>
            <TextField.Root
              id="radix-feedback-email"
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
              htmlFor="radix-feedback-rating"
            >
              Overall rating
            </Text>
            <Select.Root name="rating" required>
              <Select.Trigger
                id="radix-feedback-rating"
                placeholder="Select rating"
              />
              <Select.Content>
                <Select.Item value="excellent">Excellent</Select.Item>
                <Select.Item value="good">Good</Select.Item>
                <Select.Item value="average">Average</Select.Item>
                <Select.Item value="poor">Poor</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-feedback-comments"
            >
              Comments
            </Text>
            <TextArea
              id="radix-feedback-comments"
              name="comments"
              rows="4"
              placeholder="Share your feedback"
              required
            />
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="followUp" />I would like a follow-up
            </Flex>
          </Text>
          <Button type="submit">Send feedback</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default CustomerFeedbackForm
