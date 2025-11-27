import {
  Button,
  Checkbox,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input name="email" type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </FormControl>
          <Checkbox name="rememberMe">Remember me</Checkbox>
          <Button type="submit" colorScheme="blue">
            Sign in
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default UserLoginForm
