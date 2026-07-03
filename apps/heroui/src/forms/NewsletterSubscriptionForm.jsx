import { useState } from 'react'
import { Input, Button, Checkbox, Select, SelectItem } from '@heroui/react'

export default function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Subscribed to newsletter!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input
        label="Email address"
        variant="bordered"
        isRequired
        type="email"
        name="email"
      />
      <Select
        label="Digest frequency"
        variant="bordered"
        defaultSelectedKeys={['weekly']}
        isRequired
        name="frequency"
      >
        <SelectItem key="weekly" value="weekly">
          Weekly digest
        </SelectItem>
        <SelectItem key="monthly" value="monthly">
          Monthly summary
        </SelectItem>
      </Select>
      <Checkbox defaultSelected name="productUpdates">
        Include product release notes
      </Checkbox>
      <Button type="submit" color="primary" shadow>
        Subscribe
      </Button>
    </form>
  )
}
