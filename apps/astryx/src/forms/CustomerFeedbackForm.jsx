import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="fullName" type="text" label="Full name" required />
      <TextInput name="email" type="email" label="Email address" required />
      <Selector
        name="rating"
        label="Overall rating"
        defaultValue="excellent"
        options={[
          { value: 'excellent', label: 'Excellent' },
          { value: 'good', label: 'Good' },
          { value: 'average', label: 'Average' },
          { value: 'poor', label: 'Poor' },
        ]}
        required
      />
      <TextInput name="comments" label="Comments" multiline rows={4} required />
      <CheckboxInput name="followUp" label="I would like a follow-up" />
      <Button type="submit" variant="primary">
        Send feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
