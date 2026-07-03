import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
  Textarea,
} from '@mui/joy'

export default function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      <FormControl required>
        <FormLabel htmlFor="joy-fb-rating">Satisfaction rating</FormLabel>
        <Select id="joy-fb-rating" name="rating" defaultValue="5" required>
          <Option value="5">5 - Excellent</Option>
          <Option value="4">4 - Good</Option>
          <Option value="3">3 - Average</Option>
          <Option value="2">2 - Poor</Option>
          <Option value="1">1 - Very Poor</Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-fb-comments">Comments</FormLabel>
        <Textarea id="joy-fb-comments" name="comments" minRows={4} required />
      </FormControl>

      <Button type="submit">Submit feedback</Button>
    </Box>
  )
}
