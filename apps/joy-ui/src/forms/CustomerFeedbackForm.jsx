import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Textarea,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function CustomerFeedbackForm() {
  const [formData, setFormData] = useState({
    rating: '5',
    comments: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography level="h3" component="h2">
        Customer Feedback
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Thank you for your feedback!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Overall Satisfaction</FormLabel>
        <RadioGroup
          orientation="horizontal"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
        >
          <Radio value="1" label="1 - Poor" />
          <Radio value="2" label="2 - Fair" />
          <Radio value="3" label="3 - Good" />
          <Radio value="4" label="4 - Very Good" />
          <Radio value="5" label="5 - Excellent" />
        </RadioGroup>
      </FormControl>
      <FormControl required>
        <FormLabel>Detailed Comments</FormLabel>
        <Textarea
          minRows={4}
          value={formData.comments}
          onChange={(e) =>
            setFormData({ ...formData, comments: e.target.value })
          }
        />
      </FormControl>
      <Button type="submit" color="primary">
        Submit Feedback
      </Button>
    </Box>
  )
}
