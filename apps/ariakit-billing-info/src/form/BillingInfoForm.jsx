import * as Ariakit from '@ariakit/react'

function BillingInfoForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      cardName: '',
      cardNumber: '',
      expiration: '',
      cvc: '',
      address: '',
      country: '',
    },
  })

  form.useSubmit(() => {
    alert('Billing details saved!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.cardName} className="label">
          Name on card
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.cardName}
          className="input"
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
          Expiration date
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
          Security code
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
        <Ariakit.FormLabel name={form.names.address} className="label">
          Billing address
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.address}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.country} className="label">
          Country
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.country}
          render={
            <select className="select">
              <option value="">Select country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          }
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormSubmit className="button button-primary">
        Save billing details
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default BillingInfoForm
