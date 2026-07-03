import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <Selector
        name="rating"
        label="Satisfaction rating"
        defaultValue="5"
        options={[
          { value: '5', label: '5 - Excellent' },
          { value: '4', label: '4 - Good' },
          { value: '3', label: '3 - Average' },
          { value: '2', label: '2 - Poor' },
          { value: '1', label: '1 - Very Poor' },
        ]}
      />
      <TextInput name="comments" label="Comments" multiline rows={4} required />
      <Button type="submit" variant="primary">
        Submit feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
