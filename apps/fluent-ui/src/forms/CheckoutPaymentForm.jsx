import {
  Button,
  Field,
  Input,
  Select,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
})

function CheckoutPaymentForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Email for receipt" required>
        <Input
          id="fluent-ui-checkout-email"
          name="email"
          type="email"
          required
        />
      </Field>
      <Field label="Shipping method" required>
        <Select
          id="fluent-ui-checkout-shipping-method"
          name="shippingMethod"
          required
        >
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </Select>
      </Field>
      <Field label="Card number" required>
        <Input
          id="fluent-ui-checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
        />
      </Field>
      <Field label="Expiration" required>
        <Input
          id="fluent-ui-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </Field>
      <Field label="CVC" required>
        <Input
          id="fluent-ui-checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
        />
      </Field>
      <Field label="Promo code">
        <Input
          id="fluent-ui-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </Field>
      <Button type="submit" appearance="primary">
        Place order
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
