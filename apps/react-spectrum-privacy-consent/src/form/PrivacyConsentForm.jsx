import {
  Form,
  TextField,
  TextArea,
  Checkbox,
  CheckboxGroup,
  Button,
  Flex,
  Text,
} from '@adobe/react-spectrum'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField label="Full name" name="fullName" type="text" isRequired />
        <TextField label="Email address" name="email" type="email" isRequired />

        <Text UNSAFE_style={{ fontWeight: 'bold' }}>
          Communication Channels
        </Text>
        <Checkbox name="emailOptIn">Email updates</Checkbox>
        <Checkbox name="smsOptIn">SMS notifications</Checkbox>
        <Checkbox name="phoneOptIn">Phone calls</Checkbox>

        <Text UNSAFE_style={{ fontWeight: 'bold' }}>Privacy Options</Text>
        <Checkbox name="analytics">Allow analytics cookies</Checkbox>
        <Checkbox name="personalization">Allow personalized content</Checkbox>

        <TextArea label="Additional notes" name="notes" />

        <Button type="submit" variant="accent">
          Save preferences
        </Button>
      </Flex>
    </Form>
  )
}

export default PrivacyConsentForm
