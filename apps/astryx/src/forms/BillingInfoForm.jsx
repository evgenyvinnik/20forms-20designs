import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="cardName" type="text" label="Name on card" required />
      <TextInput
        name="cardNumber"
        type="text"
        label="Card number"
        maxLength={19}
        pattern="[0-9]{13,19}"
        required
      />
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
      >
        <TextInput
          name="expiry"
          type="text"
          label="Expiration date"
          placeholder="MM/YY"
          required
        />
        <TextInput
          name="cvc"
          type="password"
          label="Security code"
          maxLength={4}
          required
        />
      </div>
      <TextInput name="address" type="text" label="Billing address" required />
      <Selector
        name="country"
        label="Country"
        defaultValue="US"
        options={[
          { value: 'US', label: 'United States' },
          { value: 'CA', label: 'Canada' },
        ]}
        required
      />
      <Button type="submit" variant="primary">
        Save billing details
      </Button>
    </form>
  )
}

export default BillingInfoForm
