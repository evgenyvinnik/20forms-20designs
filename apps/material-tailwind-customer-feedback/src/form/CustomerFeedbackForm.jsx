import { useState } from 'react'
import {
  Input,
  Button,
  Textarea,
  Checkbox,
  Typography,
} from '@material-tailwind/react'

function CustomerFeedbackForm() {
  const [rating, setRating] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Name
        </Typography>
        <Input
          id="material-tailwind-customer-feedback-name"
          name="name"
          type="text"
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Email address
        </Typography>
        <Input
          id="material-tailwind-customer-feedback-email"
          name="email"
          type="email"
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Overall rating
        </Typography>
        <select
          id="material-tailwind-customer-feedback-rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        >
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Comments
        </Typography>
        <Textarea
          id="material-tailwind-customer-feedback-comments"
          name="comments"
          rows={4}
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="material-tailwind-customer-feedback-followUp"
          name="followUp"
          className="dark:border-gray-600"
        />
        <Typography variant="small" className="text-gray-900 dark:text-white">
          I would like a follow-up
        </Typography>
      </div>
      <Button type="submit" className="mt-2">
        Send feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
