import * as Ariakit from '@ariakit/react'

function OrderTrackingForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      orderNumber: '',
      email: '',
      postalCode: '',
    },
  })

  form.useSubmit(() => {
    alert('Order lookup submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.orderNumber} className="label">
          Order number
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.orderNumber}
          pattern="[A-Za-z0-9-]{6,20}"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.email} className="label">
          Email address
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.email}
          type="email"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.postalCode} className="label">
          Postal code
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.postalCode}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormSubmit className="button button-primary">
        Find order
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default OrderTrackingForm
