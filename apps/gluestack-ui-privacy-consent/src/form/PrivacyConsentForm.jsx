import {
  Box,
  VStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Textarea,
  TextareaInput,
  Button,
  ButtonText,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  Text,
} from '@gluestack-ui/themed'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Full name</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-privacy-name"
              name="name"
              type="text"
              placeholder="John Doe"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Email address</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-privacy-email"
              name="email"
              type="email"
              placeholder="john@example.com"
            />
          </Input>
        </FormControl>

        <Box>
          <Text size="sm" fontWeight="$medium" mb="$2">
            Communication channels
          </Text>
          <VStack space="sm">
            <Checkbox name="emailUpdates" value="emailUpdates">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Email updates</CheckboxLabel>
            </Checkbox>

            <Checkbox name="smsNotifications" value="smsNotifications">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>SMS notifications</CheckboxLabel>
            </Checkbox>

            <Checkbox name="pushNotifications" value="pushNotifications">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Push notifications</CheckboxLabel>
            </Checkbox>
          </VStack>
        </Box>

        <Box>
          <Text size="sm" fontWeight="$medium" mb="$2">
            Privacy preferences
          </Text>
          <VStack space="sm">
            <Checkbox name="shareData" value="shareData">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Allow data sharing with partners</CheckboxLabel>
            </Checkbox>

            <Checkbox name="analytics" value="analytics">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Enable analytics tracking</CheckboxLabel>
            </Checkbox>

            <Checkbox name="personalization" value="personalization">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Personalized content</CheckboxLabel>
            </Checkbox>
          </VStack>
        </Box>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Additional notes</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput
              id="gluestack-ui-privacy-notes"
              name="notes"
              placeholder="Any specific privacy concerns..."
            />
          </Textarea>
        </FormControl>

        <Button type="submit" action="primary">
          <ButtonText>Save Preferences</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default PrivacyConsentForm
