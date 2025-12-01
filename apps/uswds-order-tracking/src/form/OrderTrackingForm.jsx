import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Button,
} from '@trussworks/react-uswds'

function OrderTrackingForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-order-tracking-number"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Order number
        </Label>
        <TextInput
          id="uswds-order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-order-tracking-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-order-tracking-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-order-tracking-postal"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Postal code
        </Label>
        <TextInput
          id="uswds-order-tracking-postal"
          name="postalCode"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Button type="submit">Find order</Button>
    </Form>
  )
}

export default OrderTrackingForm
