import { useState } from 'react'
import { Input, Button, Textarea } from '@heroui/react'

export default function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input label="Full name" variant="bordered" isRequired name="fullName" />
      <Input
        label="Email address"
        variant="bordered"
        isRequired
        type="email"
        name="email"
      />
      <Input
        label="Phone number"
        variant="bordered"
        isRequired
        type="tel"
        name="phone"
      />
      <Textarea
        label="Cover letter"
        variant="bordered"
        isRequired
        minRows={4}
        name="coverLetter"
      />
      <Button type="submit" color="primary" shadow>
        Submit application
      </Button>
    </form>
  )
}
