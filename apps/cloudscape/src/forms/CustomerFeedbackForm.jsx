import '@cloudscape-design/global-styles/index.css'
import { useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
  FormField,
  Input,
  Select,
  SpaceBetween,
  Textarea,
} from '@cloudscape-design/components'

function CustomerFeedbackForm() {
  const [selectedRating, setSelectedRating] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <SpaceBetween direction="vertical" size="l">
        <FormField label="Name">
          <Input name="name" type="text" required />
        </FormField>
        <FormField label="Email address">
          <Input
            name="email"
            type="email"

            required
          />
        </FormField>
        <FormField label="Overall rating">
          <Select
            name="rating"

            options={[
              { label: 'Excellent', value: 'excellent' },
              { label: 'Good', value: 'good' },
              { label: 'Average', value: 'average' },
              { label: 'Poor', value: 'poor' },
            ]}
            selectedOption={selectedRating}
            onChange={({ detail }) => setSelectedRating(detail.selectedOption)}
          />
        </FormField>
        <FormField label="Comments">
          <Textarea
            name="comments"

            rows={4}
          />
        </FormField>
        <Checkbox name="followUp">I would like a follow-up</Checkbox>
        <Button variant="primary" formAction="submit">
          Send feedback
        </Button>
      </SpaceBetween>
    </form>
  )
}

export default CustomerFeedbackForm
