import { Button, Field, Input, Stack, NativeSelect } from '@chakra-ui/react'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Name on card</Field.Label>
          <Input id="chakra-billing-name" name="cardName" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Card number</Field.Label>
          <Input
            id="chakra-billing-card-number"
            name="cardNumber"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{13,19}"
            maxLength={19}
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Expiration date</Field.Label>
          <Input
            id="chakra-billing-expiration"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            inputMode="numeric"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Security code</Field.Label>
          <Input
            id="chakra-billing-cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            maxLength={4}
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Billing address</Field.Label>
          <Input id="chakra-billing-address" name="address" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Country</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field id="chakra-billing-country" name="country">
              <option value="">Select country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Button type="submit" colorPalette="blue">
          Save billing details
        </Button>
      </Stack>
    </form>
  )
}

export default BillingInfoForm
