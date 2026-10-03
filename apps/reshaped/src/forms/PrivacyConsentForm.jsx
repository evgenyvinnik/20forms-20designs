import {
  Button,
  Checkbox,
  FormControl,
  TextArea,
  TextField,
  View,
} from 'reshaped'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Full name</FormControl.Label>
          <TextField
            name="fullName"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Email address</FormControl.Label>
          <TextField
            name="email"
            inputAttributes={{ type: 'email', required: true }}
          />
        </FormControl>
        <FormControl group>
          <FormControl.Label>Communication channels</FormControl.Label>
          <View gap={2}>
            <Checkbox name="emailOptIn">Email updates</Checkbox>
            <Checkbox name="smsOptIn">SMS notifications</Checkbox>
            <Checkbox name="phoneOptIn">Phone calls</Checkbox>
          </View>
        </FormControl>
        <FormControl group>
          <FormControl.Label>Privacy options</FormControl.Label>
          <View gap={2}>
            <Checkbox name="analytics">Allow analytics cookies</Checkbox>
            <Checkbox name="personalization">
              Allow personalized content
            </Checkbox>
          </View>
        </FormControl>
        <FormControl>
          <FormControl.Label>Additional notes</FormControl.Label>
          <TextArea name="notes" inputAttributes={{ rows: 3 }} />
        </FormControl>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Save preferences
          </Button>
        </View>
      </View>
    </form>
  )
}

export default PrivacyConsentForm
