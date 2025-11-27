function BillingInfoForm() {
  return (
    <form>
      <div>
        <label htmlFor="billing-name">Name on card</label>
        <input id="billing-name" name="cardName" type="text" />
      </div>
      <div>
        <label htmlFor="billing-card-number">Card number</label>
        <input id="billing-card-number" name="cardNumber" type="text" inputMode="numeric" />
      </div>
      <div>
        <label htmlFor="billing-expiration">Expiration date</label>
        <input id="billing-expiration" name="expiration" type="text" placeholder="MM/YY" />
      </div>
      <div>
        <label htmlFor="billing-cvc">Security code</label>
        <input id="billing-cvc" name="cvc" type="text" inputMode="numeric" />
      </div>
      <div>
        <label htmlFor="billing-address">Billing address</label>
        <input id="billing-address" name="address" type="text" />
      </div>
      <div>
        <label htmlFor="billing-country">Country</label>
        <input id="billing-country" name="country" type="text" />
      </div>
      <button type="submit">Save billing details</button>
    </form>
  )
}

export default BillingInfoForm
