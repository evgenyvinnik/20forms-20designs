import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const countryOptions = [
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
]

function BillingInfoForm() {
  const [country, setCountry] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-billing-name">Name on card</Label>
          <Textfield
            id="atlaskit-billing-name"
            name="cardName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-billing-card-number">Card number</Label>
          <Textfield
            id="atlaskit-billing-card-number"
            name="cardNumber"
            maxLength={19}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-billing-expiration">Expiration date</Label>
          <Textfield
            id="atlaskit-billing-expiration"
            name="expiration"
            placeholder="MM/YY"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-billing-cvc">Security code</Label>
          <Textfield
            id="atlaskit-billing-cvc"
            name="cvc"
            maxLength={4}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-billing-address">Billing address</Label>
          <Textfield
            id="atlaskit-billing-address"
            name="address"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-billing-country">Country</Label>
          <Select
            inputId="atlaskit-billing-country"
            name="country"
            options={countryOptions}
            value={country}
            onChange={setCountry}
            placeholder="Select country"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Save billing details</Button>
      </Stack>
    </form>
  )
}

export default BillingInfoForm
