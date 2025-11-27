import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select } from './ui/select'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-billing-name">Name on card</Label>
        <Input id="shadcn-billing-name" name="cardName" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-billing-card-number">Card number</Label>
        <Input
          id="shadcn-billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-billing-expiration">Expiration date</Label>
        <Input
          id="shadcn-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-billing-cvc">Security code</Label>
        <Input
          id="shadcn-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-billing-address">Billing address</Label>
        <Input
          id="shadcn-billing-address"
          name="address"
          type="text"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-billing-country">Country</Label>
        <Select id="shadcn-billing-country" name="country" required>
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
