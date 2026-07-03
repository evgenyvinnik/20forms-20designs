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
    alert('Feedback submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Full name</FormLabel>
        <Input name="fullName" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Overall rating</FormLabel>
        <Select name="rating" defaultValue="excellent" required>
          <Option value="excellent">Excellent</Option>
          <Option value="good">Good</Option>
          <Option value="average">Average</Option>
          <Option value="poor">Poor</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Comments</FormLabel>
        <Input name="comments" multiline minRows={4} required />
      </FormControl>
      <Checkbox name="followUp" label="I would like a follow-up" />
      <Button type="submit">Send feedback</Button>
    </Box>
  )
}
