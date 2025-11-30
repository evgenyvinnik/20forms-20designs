import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, MaskedTextBox } from '@progress/kendo-react-inputs'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const cardNumberValidator = (value) =>
  value && /^[0-9]{13,19}$/.test(value.replace(/\s/g, '')) ? '' : 'Please enter a valid card number'

const countryOptions = [
  { text: 'Select country', value: '' },
  { text: 'United States', value: 'US' },
  { text: 'Canada', value: 'CA' },
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

function BillingInfoForm() {
  const handleSubmit = () => {
    alert('Billing details saved!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-billing-name"
            name="cardName"
            label="Name on card"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-billing-card-number"
            name="cardNumber"
            label="Card number"
            component={FormInput}
            validator={cardNumberValidator}
            maxLength={19}
          />

          <Field
            id="kendoreact-billing-expiration"
            name="expiration"
            label="Expiration date"
            component={FormMaskedInput}
            mask="00/00"
            placeholder="MM/YY"
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-billing-cvc"
            name="cvc"
            label="Security code"
            component={FormInput}
            maxLength={4}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-billing-address"
            name="address"
            label="Billing address"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-billing-country"
            name="country"
            label="Country"
            component={FormDropDown}
            data={countryOptions}
            validator={requiredValidator}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Save billing details
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default BillingInfoForm
