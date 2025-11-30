import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'
import { US_STATES, CANADIAN_PROVINCES, COUNTRIES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const stateOptions = country === 'US'
    ? US_STATES.map(state => ({ value: state, label: state }))
    : CANADIAN_PROVINCES.map(province => ({ value: province, label: province }))

  const handleSubmit = (data) => {
    console.log('Shipping address submitted:', data)
    alert('Shipping address saved successfully!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field
              name="recipientName"
              label="Recipient name"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter recipient name"
                />
              )}
            </Field>

            <Field
              name="streetAddress"
              label="Street address"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter street address"
                />
              )}
            </Field>

            <Field
              name="apartment"
              label="Apartment, suite, etc."
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Apt, suite, unit, building (optional)"
                />
              )}
            </Field>

            <Field
              name="city"
              label="City"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter city"
                />
              )}
            </Field>

            <Field
              name="country"
              label="Country"
              isRequired
              defaultValue={COUNTRIES[0]}
            >
              {({ fieldProps: { onChange, ...rest } }) => (
                <Select
                  {...rest}
                  options={COUNTRIES}
                  placeholder="Select country"
                  onChange={(option) => {
                    onChange(option)
                    setCountry(option?.value || 'US')
                  }}
                />
              )}
            </Field>

            <Field
              name="state"
              label={country === 'US' ? 'State' : 'Province / Territory'}
              isRequired
            >
              {({ fieldProps }) => (
                <Select
                  {...fieldProps}
                  options={stateOptions}
                  placeholder={country === 'US' ? 'Select state' : 'Select province/territory'}
                />
              )}
            </Field>

            <Field
              name="postalCode"
              label="Postal code"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder={country === 'US' ? 'ZIP code' : 'Postal code'}
                />
              )}
            </Field>

            <Field name="defaultAddress">
              {({ fieldProps }) => (
                <Checkbox
                  {...fieldProps}
                  label="Use as default shipping address"
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Save address
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default ShippingAddressForm
