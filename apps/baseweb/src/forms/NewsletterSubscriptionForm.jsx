import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Select } from 'baseui/select'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState([])
  const [agree, setAgree] = useState(false)

  const frequencyOptions = [
    { label: 'Weekly', id: 'weekly' },
    { label: 'Monthly', id: 'monthly' },
    { label: 'Quarterly', id: 'quarterly' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Email address">
          <Input
            id="baseweb-newsletter-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Frequency">
          <Select
            id="baseweb-newsletter-frequency"
            options={frequencyOptions}
            value={frequency}
            placeholder="Select frequency"
            onChange={(params) => setFrequency(params.value)}
            required
          />
        </FormControl>
        <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)}>
          Receive product updates
        </Checkbox>
        <Button type="submit">Subscribe</Button>
      </Block>
    </form>
  )
}

export default NewsletterSubscriptionForm
