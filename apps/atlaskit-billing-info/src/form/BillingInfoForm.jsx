import Button from '@atlaskit/button/new'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'
import Select from '@atlaskit/select'
import Textfield from '@atlaskit/textfield'

const countryOptions = [
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
]

function BillingInfoForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data)
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field
              name="cardName"
              label="Name on card"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter name on card"
                />
              )}
            </Field>

            <Field
              name="cardNumber"
              label="Card number"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter card number"
                  inputMode="numeric"
                  maxLength={19}
                />
              )}
            </Field>

            <Field
              name="expiration"
              label="Expiration date"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="MM/YY"
                />
              )}
            </Field>

            <Field
              name="cvc"
              label="Security code"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="CVC"
                  inputMode="numeric"
                  maxLength={4}
                />
              )}
            </Field>

            <Field
              name="address"
              label="Billing address"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter billing address"
                />
              )}
            </Field>

            <Field
              name="country"
              label="Country"
              isRequired
            >
              {({ fieldProps: { id, ...rest } }) => (
                <Select
                  inputId={id}
                  {...rest}
                  options={countryOptions}
                  placeholder="Select country"
                  isClearable
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Save billing details
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default BillingInfoForm
