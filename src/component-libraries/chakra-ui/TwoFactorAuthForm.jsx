import {
  Button,
  ChakraProvider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Two-factor code verified!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Verification code</FormLabel>
            <Input
              name="code"
              type="text"
              placeholder="000000"
              inputMode="numeric"
            />
            <FormHelperText>
              Enter the 6-digit code from your authenticator app
            </FormHelperText>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Verify code
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default TwoFactorAuthForm
