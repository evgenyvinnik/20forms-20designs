import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="fullName" type="text" label="Full name" required />
      <TextInput name="email" type="email" label="Email address" required />
      <TextInput name="phone" type="tel" label="Phone number" required />
      <TextInput
        name="coverLetter"
        label="Cover letter"
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="primary">
        Submit application
      </Button>
    </form>
  )
}

export default JobApplicationForm
