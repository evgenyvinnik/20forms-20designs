import { useState } from 'react'
import { Input, Button, Textarea, Select, SelectItem } from '@heroui/react'

export default function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input label="Your name" variant="bordered" isRequired name="name" />
      <Select
        label="Service requested"
        variant="bordered"
        defaultSelectedKeys={['consultation']}
        isRequired
        name="service"
      >
        <SelectItem key="consultation" value="consultation">
          Initial Consultation
        </SelectItem>
        <SelectItem key="followup" value="followup">
          Follow-up Session
        </SelectItem>
      </Select>
      <Input
        label="Preferred date"
        variant="bordered"
        isRequired
        type="date"
        name="date"
      />
      <Textarea label="Notes" variant="bordered" minRows={3} name="notes" />
      <Button type="submit" color="primary" shadow>
        Request appointment
      </Button>
    </form>
  )
}
