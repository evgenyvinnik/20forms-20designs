import { Box, Button, MenuItem, TextField } from '@mui/material'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-billing-name"
        name="cardName"
        label="Name on card"
        type="text"
        required
      />
      <TextField
        id="mui-billing-card-number"
        name="cardNumber"
        label="Card number"
        type="text"
        required
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]{13,19}',
          maxLength: 19,
        }}
      />
      <TextField
        id="mui-billing-expiration"
        name="expiration"
        label="Expiration date"
        type="text"
        placeholder="MM/YY"
        required
        inputProps={{
          pattern: '^(0[1-9]|1[0-2])\\/\\d{2}$',
          inputMode: 'numeric',
        }}
      />
      <TextField
        id="mui-billing-cvc"
        name="cvc"
        label="Security code"
        type="text"
        required
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]{3,4}',
          maxLength: 4,
        }}
      />
      <TextField
        id="mui-billing-address"
        name="address"
        label="Billing address"
        type="text"
        required
      />
      <TextField
        id="mui-billing-country"
        name="country"
        label="Country"
        select
        required
        defaultValue=""
      >
        <MenuItem value="">Select country</MenuItem>
        <MenuItem value="US">United States</MenuItem>
        <MenuItem value="CA">Canada</MenuItem>
      </TextField>
      <Button type="submit" variant="contained">
        Save billing details
      </Button>
    </Box>
  )
}

export default BillingInfoForm
