import {
  Button,
  Checkbox,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Current password</FormLabel>
            <Input
              name="currentPassword"
              type="password"
              placeholder="Enter current password"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>New password</FormLabel>
            <Input
              name="newPassword"
              type="password"
              placeholder="Enter new password"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm new password</FormLabel>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm new password"
            />
          </FormControl>
          <Checkbox name="logoutOthers">Sign out of other devices</Checkbox>
          <Button type="submit" colorScheme="blue">
            Update password
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default PasswordChangeForm
