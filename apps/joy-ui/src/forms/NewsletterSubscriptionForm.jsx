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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      <FormControl required>
        <FormLabel htmlFor="joy-news-email">Email address</FormLabel>
        <Input id="joy-news-email" name="email" type="email" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-news-frequency">Digest frequency</FormLabel>
        <Select
          id="joy-news-frequency"
          name="frequency"
          defaultValue="weekly"
          required
        >
          <Option value="weekly">Weekly digest</Option>
          <Option value="monthly">Monthly summary</Option>
        </Select>
      </FormControl>

      <Checkbox
        name="productUpdates"
        label="Include product release notes"
        defaultChecked
        sx={{ my: 1 }}
      />

      <Button type="submit">Subscribe</Button>
    </Box>
  )
}
