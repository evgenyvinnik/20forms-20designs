import {
  Box,
  Button,
  Flex,
  RadioGroup,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="feedback-name">
            Name (optional)
          </Text>
          <TextField.Root
            id="feedback-name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="feedback-email">
            Email (optional)
          </Text>
          <TextField.Root
            id="feedback-email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium">
            Overall satisfaction
          </Text>
          <RadioGroup.Root name="satisfaction" defaultValue="satisfied">
            <Flex gap="3" wrap="wrap">
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="very-dissatisfied" />
                  Very Dissatisfied
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="dissatisfied" />
                  Dissatisfied
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="neutral" />
                  Neutral
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="satisfied" />
                  Satisfied
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="very-satisfied" />
                  Very Satisfied
                </Flex>
              </Text>
            </Flex>
          </RadioGroup.Root>
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium">
            Would you recommend us?
          </Text>
          <RadioGroup.Root name="recommend" defaultValue="yes">
            <Flex gap="3">
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="yes" />
                  Yes
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="no" />
                  No
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="maybe" />
                  Maybe
                </Flex>
              </Text>
            </Flex>
          </RadioGroup.Root>
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="feedback-comments">
            Comments
          </Text>
          <TextArea
            id="feedback-comments"
            name="comments"
            rows="4"
            placeholder="Share your feedback"
            required
          />
        </Box>
        <Button type="submit">Submit feedback</Button>
      </Flex>
    </form>
  )
}

export default CustomerFeedbackForm
