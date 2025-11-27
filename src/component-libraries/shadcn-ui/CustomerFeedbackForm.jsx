import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select } from './ui/select'
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-feedback-name">Name</Label>
        <Input id="shadcn-feedback-name" name="name" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-feedback-email">Email address</Label>
        <Input id="shadcn-feedback-email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-feedback-rating">Overall rating</Label>
        <Select id="shadcn-feedback-rating" name="rating" required>
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-feedback-comments">Comments</Label>
        <Textarea
          id="shadcn-feedback-comments"
          name="comments"
          rows="4"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="followUp" />
        <Label htmlFor="followUp" className="font-normal">
          I would like a follow-up
        </Label>
      </div>
      <Button type="submit">Send feedback</Button>
    </form>
  )
}

export default CustomerFeedbackForm
