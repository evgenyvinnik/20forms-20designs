import { Button } from '@/components/base/buttons/button'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { Select } from '@/components/base/select/select'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Name on card" name="cardName" isRequired />
      <Input
        label="Card number"
        name="cardNumber"
        maxLength={19}
        pattern="[0-9]{13,19}"
        inputMode="numeric"
        isRequired
      />
      <Input
        label="Expiration date"
        name="expiration"
        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
        inputMode="numeric"
        placeholder="MM/YY"
        isRequired
      />
      <Input
        label="Security code"
        name="cvc"
        maxLength={4}
        pattern="[0-9]{3,4}"
        inputMode="numeric"
        isRequired
      />
      <Input label="Billing address" name="address" isRequired />
      <Select
        label="Country"
        name="country"
        placeholder="Select country"
        isRequired
        items={[
          { id: 'US', label: 'United States' },
          { id: 'CA', label: 'Canada' },
        ]}
      >
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Save billing details
        </Button>
      </div>
    </Form>
  )
}

export default BillingInfoForm
