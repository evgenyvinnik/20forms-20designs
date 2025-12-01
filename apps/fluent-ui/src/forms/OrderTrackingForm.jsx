import {
  Button,
  Field,
  Input,
  makeStyles,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
})

function OrderTrackingForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Order number" required>
        <Input
          id="fluent-ui-order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
        />
      </Field>
      <Field label="Email address" required>
        <Input
          id="fluent-ui-order-tracking-email"
          name="email"
          type="email"
          required
        />
      </Field>
      <Field label="Postal code" required>
        <Input
          id="fluent-ui-order-tracking-postal"
          name="postalCode"
          type="text"
          required
        />
      </Field>
      <Button type="submit" appearance="primary">
        Find order
      </Button>
    </form>
  )
}

export default OrderTrackingForm
