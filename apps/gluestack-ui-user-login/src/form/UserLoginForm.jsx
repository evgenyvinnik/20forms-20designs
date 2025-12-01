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
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
} from '@gluestack-ui/themed'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Email or username</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-user-login-email"
              name="identifier"
              type="text"
              placeholder="Enter email or username"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-user-login-password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </Input>
        </FormControl>

        <Checkbox name="remember" value="remember">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Keep me signed in</CheckboxLabel>
        </Checkbox>

        <VStack space="sm">
          <Button type="submit" action="primary">
            <ButtonText>Sign in</ButtonText>
          </Button>
          <Button
            type="button"
            variant="link"
            onPress={() => alert('Password reset link flow placeholder')}
          >
            <ButtonText>Forgot password?</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </Box>
  )
}

export default UserLoginForm
