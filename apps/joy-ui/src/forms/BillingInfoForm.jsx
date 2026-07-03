import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function BillingInfoForm() {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
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
        Billing Information
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Billing details saved!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Street Address</FormLabel>
        <Input
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </FormControl>
      <FormControl required>
        <FormLabel>City</FormLabel>
        <Input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel>State / Province</FormLabel>
          <Input
            type="text"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          />
        </FormControl>
        <FormControl required>
          <FormLabel>ZIP / Postal Code</FormLabel>
          <Input
            type="text"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </FormControl>
      </Box>
      <Button type="submit" color="primary">
        Save Billing Info
      </Button>
    </Box>
  )
}
