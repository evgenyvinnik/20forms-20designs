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

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <Text>Enter the code from your authenticator app or SMS.</Text>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Verification code</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-two-factor-code"
              name="code"
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter 6-digit code"
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Backup code (optional)</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-two-factor-backup"
              name="backupCode"
              type="text"
              placeholder="Enter backup code"
            />
          </Input>
        </FormControl>

        <VStack space="sm">
          <Button type="submit" action="primary">
            <ButtonText>Verify</ButtonText>
          </Button>
          <Button
            type="button"
            variant="outline"
            onPress={() => alert('A new code has been sent!')}
          >
            <ButtonText>Resend code</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </Box>
  )
}

export default TwoFactorAuthForm
