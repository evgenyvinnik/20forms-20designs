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

export default function OrderTrackingForm() {
  const [formData, setFormData] = useState({
    orderNumber: '',
    email: '',
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
        Track Your Order
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Searching for order status...
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Order Number</FormLabel>
        <Input
          type="text"
          value={formData.orderNumber}
          onChange={(e) =>
            setFormData({ ...formData, orderNumber: e.target.value })
          }
          placeholder="ORD-12345"
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Billing Email</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Track Order
      </Button>
    </Box>
  )
}
