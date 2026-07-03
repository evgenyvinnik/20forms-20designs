import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function ShippingAddressForm() {
  const [formData, setFormData] = useState({
    recipient: '',
    address: '',
    city: '',
    zip: '',
    sameAsBilling: true,
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
        Shipping Address
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Shipping address saved!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Recipient Name</FormLabel>
        <Input
          type="text"
          value={formData.recipient}
          onChange={(e) =>
            setFormData({ ...formData, recipient: e.target.value })
          }
        />
      </FormControl>
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
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </FormControl>
        <FormControl required>
          <FormLabel>ZIP Code</FormLabel>
          <Input
            type="text"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </FormControl>
      </Box>
      <Checkbox
        label="Use as default billing address"
        checked={formData.sameAsBilling}
        onChange={(e) =>
          setFormData({ ...formData, sameAsBilling: e.target.checked })
        }
      />
      <Button type="submit" color="primary">
        Save Address
      </Button>
    </Box>
  )
}
