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
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      ></div>
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
