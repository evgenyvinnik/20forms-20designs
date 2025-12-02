import { Button, Card, Label, Select, TextInput } from 'flowbite-react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Checkout Payment</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-checkout-email"
              value="Email for receipt"
            />
          </div>
          <TextInput
            id="flowbite-checkout-email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-checkout-shipping-method"
              value="Shipping method"
            />
          </div>
          <Select
            id="flowbite-checkout-shipping-method"
            name="shippingMethod"
            required
          >
            <option value="">Select shipping</option>
            <option value="standard">Standard</option>
            <option value="express">Express</option>
            <option value="overnight">Overnight</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-checkout-card-number"
              value="Card number"
            />
          </div>
          <TextInput
            id="flowbite-checkout-card-number"
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
            <Label htmlFor="flowbite-checkout-expiration" value="Expiration" />
          </div>
          <TextInput
            id="flowbite-checkout-expiration"
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
            <Label htmlFor="flowbite-checkout-cvc" value="CVC" />
          </div>
          <TextInput
            id="flowbite-checkout-cvc"
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
            <Label htmlFor="flowbite-checkout-promo" value="Promo code" />
          </div>
          <TextInput
            id="flowbite-checkout-promo"
            name="promoCode"
            type="text"
            pattern="[A-Za-z0-9]{3,15}"
          />
        </div>
        <Button type="submit">Place order</Button>
      </form>
    </Card>
  )
}

export default CheckoutPaymentForm
