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

function BillingInfoForm() {
  const styles = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Name on card" required>
        <Input
          id="fluent-ui-billing-name"
          name="cardName"
          type="text"
          required
        />
      </Field>
      <Field label="Card number" required>
        <Input
          id="fluent-ui-billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
        />
      </Field>
      <Field label="Expiration date" required>
        <Input
          id="fluent-ui-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </Field>
      <Field label="Security code" required>
        <Input
          id="fluent-ui-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
        />
      </Field>
      <Field label="Billing address" required>
        <Input
          id="fluent-ui-billing-address"
          name="address"
          type="text"
          required
        />
      </Field>
      <Field label="Country" required>
        <Select id="fluent-ui-billing-country" name="country" required>
          <option value="">Select country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </Select>
      </Field>
      <Button type="submit" appearance="primary">
        Save billing details
      </Button>
    </form>
  )
}

export default BillingInfoForm
