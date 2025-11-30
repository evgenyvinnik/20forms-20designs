import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/radio-group/radio-group.js'
import '@awesome.me/webawesome/dist/components/radio/radio.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order placed!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-radio-group label="Payment method" name="method" value="card">
        <wa-radio value="card">Credit / Debit Card</wa-radio>
        <wa-radio value="paypal">PayPal</wa-radio>
        <wa-radio value="bank">Bank Transfer</wa-radio>
      </wa-radio-group>

      <wa-input
        label="Card number"
        name="cardNumber"
        type="text"
        maxlength="19"
        required
      />
      <wa-input label="Name on card" name="cardName" type="text" required />
      <div className="wa-cluster wa-gap-m">
        <wa-input
          label="Expiry"
          name="expiry"
          type="text"
          placeholder="MM/YY"
          required
        />
        <wa-input
          label="CVV"
          name="cvv"
          type="password"
          maxlength="4"
          required
        />
      </div>
      <wa-input label="Promo code" name="promo" type="text" />
      <wa-checkbox name="terms" required>
        I agree to the terms and conditions
      </wa-checkbox>
      <wa-button type="submit" variant="brand">
        Place order
      </wa-button>
    </form>
  )
}

export default CheckoutPaymentForm
