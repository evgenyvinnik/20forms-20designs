import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import Form, { Field, FormFooter } from '@atlaskit/form'
import { Stack } from '@atlaskit/primitives'

const shippingOptions = [
  { label: 'Standard', value: 'standard' },
  { label: 'Express', value: 'express' },
  { label: 'Overnight', value: 'overnight' },
]

function CheckoutPaymentForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data)
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field
              name="email"
              label="Email for receipt"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  type="email"
                  placeholder="Enter your email"
                />
              )}
            </Field>

            <Field
              name="shippingMethod"
              label="Shipping method"
              isRequired
            >
              {({ fieldProps: { id, ...rest } }) => (
                <Select
                  inputId={id}
                  {...rest}
                  options={shippingOptions}
                  placeholder="Select shipping"
                  isClearable={false}
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
                  maxLength={19}
                  placeholder="0000 0000 0000 0000"
                />
              )}
            </Field>

            <Field
              name="expiration"
              label="Expiration"
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
              label="CVC"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  maxLength={4}
                  placeholder="123"
                />
              )}
            </Field>

            <Field
              name="promoCode"
              label="Promo code"
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter promo code"
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Place order
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default CheckoutPaymentForm
