import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="name" type="text" label="Full name" required />
      <TextInput name="email" type="email" label="Email address" required />
      <Selector
        name="topic"
        label="Topic"
        defaultValue="support"
        options={[
          { value: 'support', label: 'Support' },
          { value: 'sales', label: 'Sales' },
          { value: 'feedback', label: 'Feedback' },
          { value: 'other', label: 'Other' },
        ]}
        required
      />
      <TextInput name="message" label="Message" multiline rows={4} required />
      <CheckboxInput
        name="allowFollowup"
        label="Allow follow-up communication"
      />
      <Button type="submit" variant="primary">
        Submit inquiry
      </Button>
    </form>
  )
}

export default ContactInquiryForm
