import {
  Button,
  ChakraProvider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link sent!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input name="email" type="email" placeholder="Enter your email" />
            <FormHelperText>
              Enter the email address associated with your account
            </FormHelperText>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Send reset link
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default PasswordResetForm
