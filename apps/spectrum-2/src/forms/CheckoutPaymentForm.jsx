import {
  Button,
  ButtonGroup,
  Form,
  Picker,
  PickerItem,
  TextField,
} from '@react-spectrum/s2'
import { style } from '@react-spectrum/s2/style' with { type: 'macro' }

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="Email for receipt"
        name="email"
        type="email"
        isRequired
      />
      <Picker
        label="Shipping method"
        name="shippingMethod"
        defaultValue="standard"
        isRequired
      >
        <PickerItem id="standard">Standard Shipping</PickerItem>
        <PickerItem id="express">Express Shipping</PickerItem>
        <PickerItem id="overnight">Overnight Delivery</PickerItem>
      </Picker>
      <TextField
        label="Card number"
        name="cardNumber"
        maxLength={19}
        isRequired
      />
      <div
        className={style({
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr'],
          columnGap: 16,
        })}
      >
        <div>
          <TextField
            label="Expiration"
            name="expiration"
            placeholder="MM/YY"
            isRequired
            styles={style({ width: 'full' })}
          />
        </div>
        <div>
          <TextField
            label="CVC"
            name="cvc"
            maxLength={4}
            isRequired
            styles={style({ width: 'full' })}
          />
        </div>
      </div>
      <TextField
        label="Promo code"
        name="promoCode"
        pattern="[A-Za-z0-9]{3,15}"
      />
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Place order
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default CheckoutPaymentForm
