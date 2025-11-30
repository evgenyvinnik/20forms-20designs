import * as Ariakit from '@ariakit/react'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-billing-name" className="label">
          Name on card
        </label>
        <input
          id="ariakit-billing-name"
          name="cardName"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-billing-card-number" className="label">
          Card number
        </label>
        <input
          id="ariakit-billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-billing-expiration" className="label">
          Expiration date
        </label>
        <input
          id="ariakit-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-billing-cvc" className="label">
          Security code
        </label>
        <input
          id="ariakit-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-billing-address" className="label">
          Billing address
        </label>
        <input
          id="ariakit-billing-address"
          name="address"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-billing-country" className="label">
          Country
        </label>
        <select
          id="ariakit-billing-country"
          name="country"
          className="select"
          required
        >
          <option value="">Select country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>
      </div>
      <Ariakit.Button type="submit" className="button button-primary">
        Save billing details
      </Ariakit.Button>
    </form>
  )
}

export default BillingInfoForm
