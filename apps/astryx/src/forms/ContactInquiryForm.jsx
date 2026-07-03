import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="name" type="text" label="Your name" required />
      <TextInput name="email" type="email" label="Email address" required />
      <Selector
        name="topic"
        label="Topic"
        defaultValue="general"
        options={[
          { value: 'general', label: 'General Support' },
          { value: 'sales', label: 'Sales & Business' },
          { value: 'feedback', label: 'Product Feedback' },
        ]}
      />
      <TextInput name="message" label="Message" multiline rows={4} required />
      <Button type="submit" variant="primary">
        Send inquiry
      </Button>
    </form>
  )
}

export default ContactInquiryForm
