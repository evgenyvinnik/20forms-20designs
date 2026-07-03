import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
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
        <FormLabel htmlFor="joy-feedback-rating">Satisfaction rating</FormLabel>
        <Select
          id="joy-feedback-rating"
          name="rating"
          defaultValue="5"
          required
        >
          <Option value="5">5 - Excellent</Option>
          <Option value="4">4 - Good</Option>
          <Option value="3">3 - Average</Option>
          <Option value="2">2 - Poor</Option>
          <Option value="1">1 - Very Poor</Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-feedback-comments">Comments</FormLabel>
        <Textarea
          id="joy-feedback-comments"
          name="comments"
          minRows={4}
          required
        />
      </FormControl>

      <Button type="submit">Submit feedback</Button>
    </Box>
  )
}
