import { Field, Label } from '@headlessui/react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-order-tracking-number">
          Order number
        </Label>
        <input
          id="headlessui-order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-order-tracking-email">
          Email address
        </Label>
        <input
          id="headlessui-order-tracking-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-order-tracking-postal">
          Postal code
        </Label>
        <input
          id="headlessui-order-tracking-postal"
          name="postalCode"
          type="text"
          className="input"
          required
        />
      </Field>

      <button type="submit" className="button button-primary">
        Find order
      </button>
    </form>
  )
}

export default OrderTrackingForm
