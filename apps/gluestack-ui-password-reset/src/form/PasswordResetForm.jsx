import {
  Box,
  VStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
  ButtonText,
  Text,
} from '@gluestack-ui/themed'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <Text>Request a password reset link via email.</Text>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Email address</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-password-reset-email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </Input>
        </FormControl>

        <Button type="submit" action="primary">
          <ButtonText>Send reset link</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default PasswordResetForm
