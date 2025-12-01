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

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Current password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-password-change-current"
              name="currentPassword"
              type="password"
              placeholder="Enter current password"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>New password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-password-change-new"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Confirm new password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-password-change-confirm"
              name="confirmPassword"
              type="password"
              placeholder="Confirm new password"
            />
          </Input>
        </FormControl>

        <Checkbox name="logoutOthers" value="logoutOthers">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Sign out of other devices</CheckboxLabel>
        </Checkbox>

        <Button type="submit" action="primary">
          <ButtonText>Update password</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default PasswordChangeForm
