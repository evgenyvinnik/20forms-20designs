import Button from '@atlaskit/button/new'
import Form, { Field, FormFooter } from '@atlaskit/form'
import Textfield from '@atlaskit/textfield'
import { Stack } from '@atlaskit/primitives'

function OrderTrackingForm() {
  const handleSubmit = (data) => {
    alert('Order lookup submitted!')
    console.log('Form data:', data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Stack space="space.200">
            <Field
              name="orderNumber"
              label="Order number"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  placeholder="Enter your order number"
                />
              )}
            </Field>

            <Field
              name="email"
              label="Email address"
              isRequired
            >
              {({ fieldProps }) => (
                <Textfield
                  {...fieldProps}
                  type="email"
                  placeholder="Enter your email address"
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
                  placeholder="Enter your postal code"
                />
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Find order
              </Button>
            </FormFooter>
          </Stack>
        </form>
      )}
    </Form>
  )
}

export default OrderTrackingForm
