import { useState } from 'react'
import { Input, Button, Textarea, Select, SelectItem } from '@heroui/react'

export default function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input label="Subject" variant="bordered" isRequired name="subject" />
      <Select
        label="Priority"
        variant="bordered"
        defaultSelectedKeys={['medium']}
        isRequired
        name="priority"
      >
        <SelectItem key="low" value="low">
          Low
        </SelectItem>
        <SelectItem key="medium" value="medium">
          Medium
        </SelectItem>
        <SelectItem key="high" value="high">
          High
        </SelectItem>
      </Select>
      <Textarea
        label="Description"
        variant="bordered"
        isRequired
        minRows={4}
        name="description"
      />
      <Button type="submit" color="primary" shadow>
        Submit ticket
      </Button>
    </form>
  )
}
