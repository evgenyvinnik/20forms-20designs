import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Textarea from '@salesforce/design-system-react/components/textarea'
import Combobox from '@salesforce/design-system-react/components/combobox'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

const ratingOptions = [
  { id: 'excellent', label: 'Excellent' },
  { id: 'good', label: 'Good' },
  { id: 'average', label: 'Average' },
  { id: 'poor', label: 'Poor' },
]

function CustomerFeedbackForm({ theme }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState([])
  const [comments, setComments] = useState('')
  const [followUp, setFollowUp] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-feedback-name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-feedback-email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Combobox
          id="slds-feedback-rating"
          labels={{ label: 'Overall rating' }}
          options={ratingOptions}
          selection={rating}
          onSelect={(event, data) => setRating(data.selection)}
          variant="readonly"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Textarea
          id="slds-feedback-comments"
          label="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Checkbox
          id="slds-feedback-followup"
          labels={{ label: 'I would like a follow-up' }}
          checked={followUp}
          onChange={() => setFollowUp(!followUp)}
        />
      </div>

      <div className="slds-form-element">
        <Button
          type="submit"
          variant="brand"
          label="Send feedback"
        />
      </div>
    </form>
  )
}

export default CustomerFeedbackForm
