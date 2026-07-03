import { useState } from 'react'
import { Input, Button, Textarea, Select, SelectItem } from '@heroui/react'

export default function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry sent!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input label="Your name" variant="bordered" isRequired name="name" />
      <Input
        label="Email address"
        variant="bordered"
        isRequired
        type="email"
        name="email"
      />
      <Select
        label="Topic"
        variant="bordered"
        defaultSelectedKeys={['general']}
        isRequired
        name="topic"
      >
        <SelectItem key="general" value="general">
          General Support
        </SelectItem>
        <SelectItem key="sales" value="sales">
          Sales & Business
        </SelectItem>
        <SelectItem key="feedback" value="feedback">
          Product Feedback
        </SelectItem>
      </Select>
      <Textarea
        label="Message"
        variant="bordered"
        isRequired
        minRows={4}
        name="message"
      />
      <Button type="submit" color="primary" shadow>
        Send inquiry
      </Button>
    </form>
  )
}
