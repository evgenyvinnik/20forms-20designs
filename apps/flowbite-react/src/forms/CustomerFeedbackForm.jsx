import {
  Button,
  Card,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from 'flowbite-react'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Customer Feedback</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-feedback-name">Name</Label>
          </div>
          <TextInput
            id="flowbite-feedback-name"
            name="name"
            type="text"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-feedback-email">Email address</Label>
          </div>
          <TextInput
            id="flowbite-feedback-email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-feedback-rating">Overall rating</Label>
          </div>
          <Select id="flowbite-feedback-rating" name="rating" required>
            <option value="">Select rating</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-feedback-comments">Comments</Label>
          </div>
          <Textarea
            id="flowbite-feedback-comments"
            name="comments"
            rows={4}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="flowbite-feedback-followup" name="followUp" />
          <Label htmlFor="flowbite-feedback-followup">
            I would like a follow-up
          </Label>
        </div>
        <Button type="submit">Send feedback</Button>
      </form>
    </Card>
  )
}

export default CustomerFeedbackForm
