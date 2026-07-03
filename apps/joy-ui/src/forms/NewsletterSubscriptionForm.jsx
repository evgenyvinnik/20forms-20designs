import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  RadioGroup,
  Radio,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function NewsletterSubscriptionForm() {
  const [formData, setFormData] = useState({
    email: '',
    frequency: 'weekly',
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
        Subscribe to Newsletter
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Subscribed to newsletter successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="subscriber@example.com"
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Digest Frequency</FormLabel>
        <RadioGroup
          value={formData.frequency}
          onChange={(e) =>
            setFormData({ ...formData, frequency: e.target.value })
          }
        >
          <Radio value="daily" label="Daily updates" />
          <Radio value="weekly" label="Weekly digest" />
          <Radio value="monthly" label="Monthly summary" />
        </RadioGroup>
      </FormControl>
      <Button type="submit" color="primary">
        Subscribe
      </Button>
    </Box>
  )
}
