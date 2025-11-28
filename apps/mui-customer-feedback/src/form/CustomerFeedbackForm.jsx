import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
} from '@mui/material'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-feedback-name"
        name="name"
        label="Name"
        type="text"
        required
      />
      <TextField
        id="mui-feedback-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <TextField
        id="mui-feedback-rating"
        name="rating"
        label="Overall rating"
        select
        required
        defaultValue=""
      >
        <MenuItem value="">Select rating</MenuItem>
        <MenuItem value="excellent">Excellent</MenuItem>
        <MenuItem value="good">Good</MenuItem>
        <MenuItem value="average">Average</MenuItem>
        <MenuItem value="poor">Poor</MenuItem>
      </TextField>
      <TextField
        id="mui-feedback-comments"
        name="comments"
        label="Comments"
        multiline
        rows={4}
        required
      />
      <FormControlLabel
        control={<Checkbox name="followUp" />}
        label="I would like a follow-up"
      />
      <Button type="submit" variant="contained">
        Send feedback
      </Button>
    </Box>
  )
}

export default CustomerFeedbackForm
