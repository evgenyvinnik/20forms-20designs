import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order placed!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Email for receipt" name="email" type="email" required />
      <wa-select
        label="Shipping method"
        name="shipping"
        placeholder="Select shipping"
        required
      >
        <wa-option value="standard">Standard (5-7 days)</wa-option>
        <wa-option value="express">Express (2-3 days)</wa-option>
        <wa-option value="overnight">Overnight</wa-option>
      </wa-select>
      <wa-input
        label="Card number"
        name="cardNumber"
        type="text"
        maxlength="19"
        required
      />
      <div className="wa-cluster wa-gap-m">
        <wa-input
          label="Expiration"
          name="expiry"
          type="text"
          placeholder="MM/YY"
          required
        />
        <wa-input
          label="CVC"
          name="cvc"
          type="password"
          maxlength="4"
          required
        />
      </div>
      <wa-input label="Promo code" name="promo" type="text" />
      <wa-button type="submit" variant="brand">
        Place order
      </wa-button>
    </form>
  )
}

export default CheckoutPaymentForm
