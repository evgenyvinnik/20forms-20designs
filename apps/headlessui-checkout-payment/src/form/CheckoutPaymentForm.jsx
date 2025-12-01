import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { useState } from 'react'

const shippingMethods = [
  { value: '', label: 'Select shipping' },
  { value: 'standard', label: 'Standard' },
  { value: 'express', label: 'Express' },
  { value: 'overnight', label: 'Overnight' },
]

function CheckoutPaymentForm() {
  const [shippingMethod, setShippingMethod] = useState(shippingMethods[0])

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-checkout-email">
          Email for receipt
        </Label>
        <input
          id="headlessui-checkout-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label">Shipping method</Label>
        <Listbox
          value={shippingMethod}
          onChange={setShippingMethod}
          name="shippingMethod"
        >
          <div className="select-wrapper">
            <ListboxButton className="select-button">
              <span>{shippingMethod.label}</span>
              <svg
                className="select-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </ListboxButton>
            <ListboxOptions className="select-options">
              {shippingMethods.map((method) => (
                <ListboxOption
                  key={method.value}
                  value={method}
                  className="select-option"
                >
                  {method.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-checkout-card-number">
          Card number
        </Label>
        <input
          id="headlessui-checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-checkout-expiration">
          Expiration
        </Label>
        <input
          id="headlessui-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-checkout-cvc">
          CVC
        </Label>
        <input
          id="headlessui-checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-checkout-promo">
          Promo code
        </Label>
        <input
          id="headlessui-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          className="input"
        />
      </Field>

      <button type="submit" className="button button-primary">
        Place order
      </button>
    </form>
  )
}

export default CheckoutPaymentForm
