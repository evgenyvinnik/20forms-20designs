import { useState } from 'react'
import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, Checkbox } from '@progress/kendo-react-inputs'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

const requiredValidator = (value) => (value ? '' : 'This field is required')

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

const FormDropDown = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, value, onChange, data, textField, dataItemKey } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <DropDownList
        id={id}
        data={data}
        textField={textField}
        dataItemKey={dataItemKey}
        value={typeof data[0] === 'string' ? value : data.find((item) => item.value === value) || data[0]}
        onChange={(e) => onChange({ value: typeof e.target.value === 'string' ? e.target.value : e.target.value.value })}
      />
      {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
    </div>
  )
}

const FormCheckbox = (fieldRenderProps) => {
  const { label, value, onChange, id } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Checkbox
        id={id}
        label={label}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = () => {
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const countryData = COUNTRIES.map((c) => ({ text: c.label, value: c.value }))

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-shipping-full-name"
            name="fullName"
            label="Recipient name"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-shipping-street"
            name="street"
            label="Street address"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-shipping-street-2"
            name="street2"
            label="Apartment, suite, etc."
            component={FormInput}
          />

          <Field
            id="kendoreact-shipping-city"
            name="city"
            label="City"
            component={FormInput}
            validator={requiredValidator}
          />

          <div className="k-form-field">
            <Label editorId="kendoreact-shipping-country">Country</Label>
            <DropDownList
              id="kendoreact-shipping-country"
              data={countryData}
              textField="text"
              dataItemKey="value"
              value={countryData.find((c) => c.value === country)}
              onChange={(e) => setCountry(e.target.value.value)}
            />
          </div>

          <Field
            id="kendoreact-shipping-region"
            name="region"
            label="State / Province / Territory"
            component={FormDropDown}
            data={['Select an option', ...regionOptions]}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-shipping-postal"
            name="postalCode"
            label="Postal code"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-shipping-default"
            name="default"
            label="Use as default shipping address"
            component={FormCheckbox}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Save address
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default ShippingAddressForm
