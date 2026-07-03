import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputTextarea } from 'primereact/inputtextarea'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

const ratingOptions = [
  { label: 'Select rating', value: '' },
  { label: 'Excellent', value: 'excellent' },
  { label: 'Good', value: 'good' },
  { label: 'Average', value: 'average' },
  { label: 'Poor', value: 'poor' },
]

function CustomerFeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [comments, setComments] = useState('')
  const [followUp, setFollowUp] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-feedback-name"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Name
        </label>
        <InputText
          id="primereact-feedback-name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-feedback-email"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Email address
        </label>
        <InputText
          id="primereact-feedback-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-feedback-rating"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Overall rating
        </label>
        <Dropdown
          id="primereact-feedback-rating"
          name="rating"
          value={rating}
          options={ratingOptions}
          onChange={(e) => setRating(e.value)}

          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-feedback-comments"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Comments
        </label>
        <InputTextarea
          id="primereact-feedback-comments"
          name="comments"
          rows={4}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        />
      </div>
      <div
        className="field-checkbox"
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Checkbox
          inputId="primereact-feedback-followup"
          name="followUp"
          checked={followUp}
          onChange={(e) => setFollowUp(e.checked)}
        />
        <label htmlFor="primereact-feedback-followup">
          I would like a follow-up
        </label>
      </div>
      <Button type="submit" label="Send feedback" />
    </form>
  )
}

export default CustomerFeedbackForm
