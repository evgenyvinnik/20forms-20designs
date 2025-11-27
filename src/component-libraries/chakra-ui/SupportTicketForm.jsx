import {
  Button,
  ChakraProvider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Subject</FormLabel>
            <Input name="subject" type="text" placeholder="Brief description" />
          </FormControl>
          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">Priority</FormLabel>
            <RadioGroup name="priority">
              <Stack direction="row">
                <Radio value="low">Low</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="high">High</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Issue description</FormLabel>
            <Textarea
              name="description"
              placeholder="Describe your issue"
              rows={4}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Attachments</FormLabel>
            <Input
              name="attachments"
              type="file"
              multiple
              p={1}
              sx={{
                '::file-selector-button': {
                  height: '100%',
                  mr: 2,
                },
              }}
            />
            <FormHelperText>Optional file attachments</FormHelperText>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit ticket
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default SupportTicketForm
