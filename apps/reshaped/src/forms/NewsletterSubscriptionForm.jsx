import {
  Button,
  Checkbox,
  FormControl,
  Select,
  TextField,
  View,
} from 'reshaped'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Email address</FormControl.Label>
          <TextField
            name="email"
            inputAttributes={{ type: 'email', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Frequency</FormControl.Label>
          <Select
            name="frequency"
            placeholder="Select frequency"
            inputAttributes={{ required: true }}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </Select>
        </FormControl>
        <Checkbox name="agree">Receive product updates</Checkbox>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Subscribe
          </Button>
        </View>
      </View>
    </form>
  )
}

export default NewsletterSubscriptionForm
