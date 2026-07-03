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

export default function CheckoutPaymentForm() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
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
        Payment Details
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Payment processed successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Name on Card</FormLabel>
        <Input
          type="text"
          value={formData.cardName}
          onChange={(e) =>
            setFormData({ ...formData, cardName: e.target.value })
          }
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Card Number</FormLabel>
        <Input
          type="text"
          value={formData.cardNumber}
          onChange={(e) =>
            setFormData({ ...formData, cardNumber: e.target.value })
          }
          placeholder="1234 5678 9012 3456"
        />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel>Expiration (MM/YY)</FormLabel>
          <Input
            type="text"
            value={formData.expiry}
            onChange={(e) =>
              setFormData({ ...formData, expiry: e.target.value })
            }
            placeholder="MM/YY"
          />
        </FormControl>
        <FormControl required>
          <FormLabel>CVV</FormLabel>
          <Input
            type="password"
            value={formData.cvv}
            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
            placeholder="123"
            slotProps={{ input: { maxLength: 4 } }}
          />
        </FormControl>
      </Box>
      <Button type="submit" color="primary">
        Complete Purchase
      </Button>
    </Box>
  )
}
