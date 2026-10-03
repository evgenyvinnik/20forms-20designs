import {
  Button,
  Checkbox,
  FormControl,
  Select,
  TextArea,
  TextField,
  View,
} from 'reshaped'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
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
        <FormControl required>
          <FormControl.Label>Topic</FormControl.Label>
          <Select
            name="topic"
            placeholder="Select topic"
            inputAttributes={{ required: true }}
          >
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>
        <FormControl required>
          <FormControl.Label>Message</FormControl.Label>
          <TextArea
            name="message"
            inputAttributes={{ rows: 4, required: true }}
          />
        </FormControl>
        <Checkbox name="consent">Allow follow-up communication</Checkbox>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Submit inquiry
          </Button>
        </View>
      </View>
    </form>
  )
}

export default ContactInquiryForm
