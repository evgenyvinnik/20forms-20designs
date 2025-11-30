import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing information saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Cardholder name" name="cardName" type="text" required />
      <wa-input
        label="Card number"
        name="cardNumber"
        type="text"
        maxlength="19"
        required
      />
      <div className="wa-cluster wa-gap-m">
        <wa-input
          label="Expiration date"
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
      <wa-input label="Billing address" name="address" type="text" required />
      <wa-input label="City" name="city" type="text" required />
      <wa-select
        label="Country"
        name="country"
        placeholder="Select an option"
        required
      >
        <wa-option value="us">United States</wa-option>
        <wa-option value="ca">Canada</wa-option>
        <wa-option value="mx">Mexico</wa-option>
      </wa-select>
      <wa-input label="State / Province" name="state" type="text" required />
      <wa-input label="ZIP / Postal code" name="zip" type="text" required />
      <wa-checkbox name="saveCard">Save card for future purchases</wa-checkbox>
      <wa-button type="submit" variant="brand">
        Save billing info
      </wa-button>
    </form>
  )
}

export default BillingInfoForm
