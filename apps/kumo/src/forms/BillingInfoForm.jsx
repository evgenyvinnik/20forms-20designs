import { Button, Input, Select } from '@cloudflare/kumo'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Name on card" name="cardName" type="text" required />
      <Input
        label="Card number"
        name="cardNumber"
        type="text"
        maxLength={19}
        pattern="[0-9]{13,19}"
        inputMode="numeric"
        required
      />
      <Input
        label="Expiration date"
        name="expiration"
        type="text"
        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
        inputMode="numeric"
        placeholder="MM/YY"
        required
      />
      <Input
        label="Security code"
        name="cvc"
        type="text"
        maxLength={4}
        pattern="[0-9]{3,4}"
        inputMode="numeric"
        required
      />
      <Input label="Billing address" name="address" type="text" required />
      <Select
        label="Country"
        name="country"
        placeholder="Select country"
        items={[
          { value: 'US', label: 'United States' },
          { value: 'CA', label: 'Canada' },
        ]}
        required
        className="kumo-select"
      />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Save billing details
        </Button>
      </div>
    </form>
  )
}

export default BillingInfoForm
