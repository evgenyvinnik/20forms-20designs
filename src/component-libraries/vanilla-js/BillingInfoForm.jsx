function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="billing-name">Name on card</label>
        <input id="billing-name" name="cardName" type="text" required />
      </div>
      <div>
        <label htmlFor="billing-card-number">Card number</label>
        <input
          id="billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
        />
      </div>
      <div>
        <label htmlFor="billing-expiration">Expiration date</label>
        <input
          id="billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\\/\\d{2}$"
          inputMode="numeric"
          required
        />
      </div>
      <div>
        <label htmlFor="billing-cvc">Security code</label>
        <input
          id="billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          required
        />
      </div>
      <div>
        <label htmlFor="billing-address">Billing address</label>
        <input id="billing-address" name="address" type="text" required />
      </div>
      <div>
        <label htmlFor="billing-country">Country</label>
        <select id="billing-country" name="country" required>
          <option value="">Select country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>
      </div>
      <button type="submit">Save billing details</button>
    </form>
  )
}

export default BillingInfoForm
