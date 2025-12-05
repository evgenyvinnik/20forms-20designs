import { Button, Label, Select, TextInput } from 'flowbite-react'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-billing-name">Name on card</Label>
        </div>
        <TextInput
          id="flowbite-billing-name"
          name="cardName"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-billing-card-number">Card number</Label>
        </div>
        <TextInput
          id="flowbite-billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-billing-expiration">Expiration date</Label>
        </div>
        <TextInput
          id="flowbite-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-billing-cvc">Security code</Label>
        </div>
        <TextInput
          id="flowbite-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-billing-address">Billing address</Label>
        </div>
        <TextInput
          id="flowbite-billing-address"
          name="address"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-billing-country">Country</Label>
        </div>
        <Select id="flowbite-billing-country" name="country" required>
          <option value="">Select country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </Select>
      </div>
      <Button type="submit">Save billing details</Button>
    </form>
  )
}

export default BillingInfoForm
