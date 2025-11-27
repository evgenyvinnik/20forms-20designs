import {
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input name="firstName" type="text" placeholder="Enter first name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input name="lastName" type="text" placeholder="Enter last name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input name="email" type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl>
            <FormLabel>Phone number</FormLabel>
            <Input name="phone" type="tel" placeholder="Enter phone number" />
          </FormControl>
          <FormControl>
            <FormLabel>Short bio</FormLabel>
            <Textarea name="bio" placeholder="Tell us about yourself" rows={3} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Save changes
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default ProfileUpdateForm
