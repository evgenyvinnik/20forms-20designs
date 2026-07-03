import { useState } from 'react'
import { Button, Textarea, Select, SelectItem } from '@heroui/react'

export default function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Select
        label="Satisfaction rating"
        variant="bordered"
        defaultSelectedKeys={['5']}
        isRequired
        name="rating"
      >
        <SelectItem key="5" value="5">
          5 - Excellent
        </SelectItem>
        <SelectItem key="4" value="4">
          4 - Good
        </SelectItem>
        <SelectItem key="3" value="3">
          3 - Average
        </SelectItem>
        <SelectItem key="2" value="2">
          2 - Poor
        </SelectItem>
        <SelectItem key="1" value="1">
          1 - Very Poor
        </SelectItem>
      </Select>
      <Textarea
        label="Comments"
        variant="bordered"
        isRequired
        minRows={4}
        name="comments"
      />
      <Button type="submit" color="primary" shadow>
        Submit feedback
      </Button>
    </form>
  )
}
