import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
} from '@mui/joy'

export default function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Satisfaction rating</FormLabel>
        <Select name="rating" defaultValue="5" required>
          <Option value="5">5 - Excellent</Option>
          <Option value="4">4 - Good</Option>
          <Option value="3">3 - Average</Option>
          <Option value="2">2 - Poor</Option>
          <Option value="1">1 - Very Poor</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Comments</FormLabel>
        <Input name="comments" multiline minRows={4} required />
      </FormControl>
      <Button type="submit">Submit feedback</Button>
    </Box>
  )
}
