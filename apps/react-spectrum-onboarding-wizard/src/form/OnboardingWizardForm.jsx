import {
  Form,
  TextField,
  TextArea,
  Picker,
  Item,
  Checkbox,
  Button,
  Flex,
  Heading,
} from '@adobe/react-spectrum'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Setup complete!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <Heading level={3}>Account</Heading>
        <TextField label="Work email" name="email" type="email" isRequired />
        <TextField
          label="Password"
          name="password"
          type="password"
          minLength={8}
          isRequired
        />

        <Heading level={3}>Team</Heading>
        <TextField label="Team name" name="teamName" type="text" isRequired />
        <Picker label="Team size" name="teamSize" isRequired>
          <Item key="">Select size</Item>
          <Item key="1-5">1-5</Item>
          <Item key="6-20">6-20</Item>
          <Item key="21-50">21-50</Item>
          <Item key="50+">50+</Item>
        </Picker>

        <Heading level={3}>Preferences</Heading>
        <TextArea label="Primary goal" name="goal" isRequired />
        <Checkbox name="updates">Send me product tips</Checkbox>

        <Flex gap="size-100">
          <Button
            type="button"
            variant="secondary"
            onPress={() => alert('Back clicked')}
          >
            Back
          </Button>
          <Button type="submit" variant="accent">
            Finish setup
          </Button>
        </Flex>
      </Flex>
    </Form>
  )
}

export default OnboardingWizardForm
