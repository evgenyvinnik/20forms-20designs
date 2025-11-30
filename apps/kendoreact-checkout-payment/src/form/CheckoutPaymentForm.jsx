import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, MaskedTextBox } from '@progress/kendo-react-inputs'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const emailValidator = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email'
const cardNumberValidator = (value) =>
  value && /^[0-9]{13,19}$/.test(value.replace(/\s/g, '')) ? '' : 'Please enter a valid card number'

const shippingOptions = [
  { text: 'Select shipping', value: '' },
  { text: 'Standard', value: 'standard' },
  { text: 'Express', value: 'express' },
  { text: 'Overnight', value: 'overnight' },
]

const FormInput = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, ...others } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <Input id={id} {...others} />
      {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
    </div>
  )
}

const FormMaskedInput = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, value, onChange, mask, placeholder } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <MaskedTextBox
        id={id}
        value={value}
        onChange={onChange}
        mask={mask}
        placeholder={placeholder}
      />
      {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
    </div>
  )
}

const FormDropDown = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, value, onChange, data } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <DropDownList
        id={id}
        data={data}
        textField="text"
        dataItemKey="value"
        value={data.find((item) => item.value === value) || data[0]}
        onChange={(e) => onChange({ value: e.target.value.value })}
      />
      {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
    </div>
  )
}

function CheckoutPaymentForm() {
  const handleSubmit = () => {
    alert('Checkout submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-checkout-email"
            name="email"
            label="Email for receipt"
            type="email"
            component={FormInput}
            validator={emailValidator}
          />

          <Field
            id="kendoreact-checkout-shipping-method"
            name="shippingMethod"
            label="Shipping method"
            component={FormDropDown}
            data={shippingOptions}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-checkout-card-number"
            name="cardNumber"
            label="Card number"
            component={FormInput}
            validator={cardNumberValidator}
            maxLength={19}
          />

          <Field
            id="kendoreact-checkout-expiration"
            name="expiration"
            label="Expiration"
            component={FormMaskedInput}
            mask="00/00"
            placeholder="MM/YY"
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-checkout-cvc"
            name="cvc"
            label="CVC"
            component={FormInput}
            maxLength={4}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-checkout-promo"
            name="promoCode"
            label="Promo code"
            component={FormInput}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Place order
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default CheckoutPaymentForm
