import {
  Button,
  Checkbox,
  FormControl,
  Select,
  Text,
  TextArea,
  TextField,
  View,
} from 'reshaped'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <View as="section" gap={4}>
          <Text variant="featured-5" weight="bold" as="h3">
            Step 1: Account
          </Text>
          <FormControl required>
            <FormControl.Label>Work email</FormControl.Label>
            <TextField
              name="email"
              inputAttributes={{ type: 'email', required: true }}
            />
          </FormControl>
          <FormControl required>
            <FormControl.Label>Password</FormControl.Label>
            <TextField
              name="password"
              inputAttributes={{
                type: 'password',
                minLength: 8,
                required: true,
              }}
            />
          </FormControl>
        </View>
        <View as="section" gap={4}>
          <Text variant="featured-5" weight="bold" as="h3">
            Step 2: Team
          </Text>
          <FormControl required>
            <FormControl.Label>Team name</FormControl.Label>
            <TextField
              name="teamName"
              inputAttributes={{ type: 'text', required: true }}
            />
          </FormControl>
          <FormControl required>
            <FormControl.Label>Team size</FormControl.Label>
            <Select
              name="teamSize"
              placeholder="Select size"
              inputAttributes={{ required: true }}
            >
              <option value="1-5">1-5</option>
              <option value="6-20">6-20</option>
              <option value="21-50">21-50</option>
              <option value="50+">50+</option>
            </Select>
          </FormControl>
        </View>
        <View as="section" gap={4}>
          <Text variant="featured-5" weight="bold" as="h3">
            Step 3: Preferences
          </Text>
          <FormControl required>
            <FormControl.Label>Primary goal</FormControl.Label>
            <TextArea
              name="goal"
              inputAttributes={{ rows: 3, required: true }}
            />
          </FormControl>
          <Checkbox name="updates">Send me product tips</Checkbox>
        </View>
        <View direction="row" gap={2}>
          <Button
            type="button"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="submit" color="primary">
            Finish setup
          </Button>
        </View>
      </View>
    </form>
  )
}

export default OnboardingWizardForm
