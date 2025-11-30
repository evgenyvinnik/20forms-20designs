import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input } from '@progress/kendo-react-inputs'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const emailValidator = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? ''
    : 'Please enter a valid email'
const orderNumberValidator = (value) =>
  value && /^[A-Za-z0-9-]{6,20}$/.test(value)
    ? ''
    : 'Please enter a valid order number'

const FormInput = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, ...others } =
    fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <Input id={id} {...others} />
      {visited && !valid && (
        <div className="k-form-error">{validationMessage}</div>
      )}
    </div>
  )
}

function OrderTrackingForm() {
  const handleSubmit = () => {
    alert('Order lookup submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-order-tracking-number"
            name="orderNumber"
            label="Order number"
            component={FormInput}
            validator={orderNumberValidator}
          />

          <Field
            id="kendoreact-order-tracking-email"
            name="email"
            label="Email address"
            type="email"
            component={FormInput}
            validator={emailValidator}
          />

          <Field
            id="kendoreact-order-tracking-postal"
            name="postalCode"
            label="Postal code"
            component={FormInput}
            validator={requiredValidator}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button
              type="submit"
              themeColor="primary"
              disabled={!formRenderProps.allowSubmit}
            >
              Find order
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default OrderTrackingForm
