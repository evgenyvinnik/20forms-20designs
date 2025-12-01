import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Select } from 'baseui/select'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function CustomerFeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState([])
  const [comments, setComments] = useState('')
  const [followUp, setFollowUp] = useState(false)

  const ratingOptions = [
    { label: 'Excellent', id: 'excellent' },
    { label: 'Good', id: 'good' },
    { label: 'Average', id: 'average' },
    { label: 'Poor', id: 'poor' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Name">
          <Input
            id="baseweb-feedback-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Email address">
          <Input
            id="baseweb-feedback-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Overall rating">
          <Select
            id="baseweb-feedback-rating"
            options={ratingOptions}
            value={rating}
            placeholder="Select rating"
            onChange={(params) => setRating(params.value)}
            required
          />
        </FormControl>
        <FormControl label="Comments">
          <Textarea
            id="baseweb-feedback-comments"
            name="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
          />
        </FormControl>
        <Checkbox
          checked={followUp}
          onChange={(e) => setFollowUp(e.target.checked)}
        >
          I would like a follow-up
        </Checkbox>
        <Button type="submit">Send feedback</Button>
      </Block>
    </form>
  )
}

export default CustomerFeedbackForm
