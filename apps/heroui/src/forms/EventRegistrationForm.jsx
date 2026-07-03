import { useState } from 'react'
import { Input, Button, Select, SelectItem } from '@heroui/react'

export default function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registered for event!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input label="Attendee name" variant="bordered" isRequired name="name" />
      <Input
        label="Email address"
        variant="bordered"
        isRequired
        type="email"
        name="email"
      />
      <Select
        label="Ticket pass"
        variant="bordered"
        defaultSelectedKeys={['general']}
        isRequired
        name="ticket"
      >
        <SelectItem key="general" value="general">
          General Admission
        </SelectItem>
        <SelectItem key="vip" value="vip">
          VIP Access
        </SelectItem>
      </Select>
      <Button type="submit" color="primary" shadow>
        Register for event
      </Button>
    </form>
  )
}
