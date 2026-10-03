import {
  Button,
  Checkbox,
  FormControl,
  TextArea,
  TextField,
  View,
} from 'reshaped'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
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
          <FormControl.Label>Phone number</FormControl.Label>
          <TextField
            name="phone"
            inputAttributes={{
              type: 'tel',
              pattern: '[+0-9\\s-]{7,20}',
              inputMode: 'tel',
              required: true,
            }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Role applied for</FormControl.Label>
          <TextField
            name="role"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Resume link</FormControl.Label>
          <TextField
            name="resume"
            inputAttributes={{ type: 'url', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Cover letter</FormControl.Label>
          <TextArea
            name="coverLetter"
            inputAttributes={{ rows: 4, required: true }}
          />
        </FormControl>
        <Checkbox name="updates">Keep me informed about future roles</Checkbox>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Submit application
          </Button>
        </View>
      </View>
    </form>
  )
}

export default JobApplicationForm
