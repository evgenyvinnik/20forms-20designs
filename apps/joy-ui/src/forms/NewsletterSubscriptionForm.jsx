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

export default function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Subscribed to newsletter!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Frequency</FormLabel>
        <Select name="frequency" defaultValue="weekly" required>
          <Option value="weekly">Weekly</Option>
          <Option value="monthly">Monthly</Option>
          <Option value="quarterly">Quarterly</Option>
        </Select>
      </FormControl>
      <Checkbox
        name="receiveUpdates"
        label="Receive product updates"
        defaultChecked
      />
      <Button type="submit">Subscribe</Button>
    </Box>
  )
}
