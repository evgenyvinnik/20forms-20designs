import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-checkout-email">Email for receipt</Label>
        <Input id="shadcn-checkout-email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-checkout-shipping-method">Shipping method</Label>
        <Select
          id="shadcn-checkout-shipping-method"
          name="shippingMethod"
          required
        >
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-checkout-card-number">Card number</Label>
        <Input
          id="shadcn-checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-checkout-expiration">Expiration</Label>
        <Input
          id="shadcn-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-checkout-cvc">CVC</Label>
        <Input
          id="shadcn-checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-checkout-promo">Promo code</Label>
        <Input
          id="shadcn-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </div>
      <Button type="submit">Place order</Button>
    </form>
  )
}

export default CheckoutPaymentForm
