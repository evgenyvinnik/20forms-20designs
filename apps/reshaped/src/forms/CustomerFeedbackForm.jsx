import {
  Button,
  Checkbox,
  FormControl,
  Select,
  TextArea,
  TextField,
  View,
} from 'reshaped'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Name</FormControl.Label>
          <TextField
            name="name"
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
          <FormControl.Label>Overall rating</FormControl.Label>
          <Select
            name="rating"
            placeholder="Select rating"
            inputAttributes={{ required: true }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </Select>
        </FormControl>
        <FormControl required>
          <FormControl.Label>Comments</FormControl.Label>
          <TextArea
            name="comments"
            inputAttributes={{ rows: 4, required: true }}
          />
        </FormControl>
        <Checkbox name="followUp">I would like a follow-up</Checkbox>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Send feedback
          </Button>
        </View>
      </View>
    </form>
  )
}

export default CustomerFeedbackForm
