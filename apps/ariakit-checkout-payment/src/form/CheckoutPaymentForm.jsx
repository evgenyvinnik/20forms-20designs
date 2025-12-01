import * as Ariakit from '@ariakit/react'

function CheckoutPaymentForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      email: '',
      shippingMethod: '',
      cardNumber: '',
      expiration: '',
      cvc: '',
      promoCode: '',
    },
  })

  form.useSubmit(() => {
    alert('Checkout submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.email} className="label">
          Email for receipt
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.email}
          type="email"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.shippingMethod} className="label">
          Shipping method
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.shippingMethod}
          render={
            <select className="select">
              <option value="">Select shipping</option>
              <option value="standard">Standard</option>
              <option value="express">Express</option>
              <option value="overnight">Overnight</option>
            </select>
          }
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.cardNumber} className="label">
          Card number
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.cardNumber}
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.expiration} className="label">
          Expiration
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.expiration}
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.cvc} className="label">
          CVC
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.cvc}
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.promoCode} className="label">
          Promo code
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.promoCode}
          pattern="[A-Za-z0-9]{3,15}"
          className="input"
        />
      </Ariakit.FormGroup>
      <Ariakit.FormSubmit className="button button-primary">
        Place order
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default CheckoutPaymentForm
