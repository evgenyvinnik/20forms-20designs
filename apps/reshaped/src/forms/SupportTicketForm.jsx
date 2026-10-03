import {
  Button,
  FormControl,
  Radio,
  RadioGroup,
  TextArea,
  TextField,
  View,
} from 'reshaped'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Subject</FormControl.Label>
          <TextField
            name="subject"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl group required>
          <FormControl.Label>Priority</FormControl.Label>
          <RadioGroup name="priority">
            <View gap={2}>
              <Radio value="low" inputAttributes={{ required: true }}>
                Low
              </Radio>
              <Radio value="medium" inputAttributes={{ required: true }}>
                Medium
              </Radio>
              <Radio value="high" inputAttributes={{ required: true }}>
                High
              </Radio>
            </View>
          </RadioGroup>
        </FormControl>
        <FormControl required>
          <FormControl.Label>Issue description</FormControl.Label>
          <TextArea
            name="description"
            inputAttributes={{ rows: 4, required: true }}
          />
        </FormControl>
        <FormControl id="reshaped-support-ticket-attachments">
          <FormControl.Label>Attachments</FormControl.Label>
          <input
            id="reshaped-support-ticket-attachments"
            name="attachments"
            type="file"
            multiple
            className="reshaped-file"
          />
        </FormControl>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Submit ticket
          </Button>
        </View>
      </View>
    </form>
  )
}

export default SupportTicketForm
