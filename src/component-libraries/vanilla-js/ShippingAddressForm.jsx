function ShippingAddressForm() {
  return (
    <form>
      <div>
        <label htmlFor="shipping-full-name">Recipient name</label>
        <input id="shipping-full-name" name="fullName" type="text" />
      </div>
      <div>
        <label htmlFor="shipping-street">Street address</label>
        <input id="shipping-street" name="street" type="text" />
      </div>
      <div>
        <label htmlFor="shipping-street-2">Apartment, suite, etc.</label>
        <input id="shipping-street-2" name="street2" type="text" />
      </div>
      <div>
        <label htmlFor="shipping-city">City</label>
        <input id="shipping-city" name="city" type="text" />
      </div>
      <div>
        <label htmlFor="shipping-state">State / Province</label>
        <input id="shipping-state" name="state" type="text" />
      </div>
      <div>
        <label htmlFor="shipping-postal">Postal code</label>
        <input id="shipping-postal" name="postalCode" type="text" />
      </div>
      <div>
        <label htmlFor="shipping-country">Country</label>
        <input id="shipping-country" name="country" type="text" />
      </div>
      <div>
        <label>
          <input name="default" type="checkbox" />Use as default shipping address
        </label>
      </div>
      <button type="submit">Save address</button>
    </form>
  )
}

export default ShippingAddressForm
