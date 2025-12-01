import { useState } from 'react'
import {
  Input,
  Button,
  Textarea,
  Radio,
  Typography,
} from '@material-tailwind/react'

function SupportTicketForm() {
  const [priority, setPriority] = useState('medium')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Subject
        </Typography>
        <Input
          id="material-tailwind-support-ticket-subject"
          name="subject"
          type="text"
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <fieldset>
        <Typography
          as="legend"
          variant="small"
          className="mb-2 font-medium text-gray-900 dark:text-white"
        >
          Priority
        </Typography>
        <div className="flex flex-col gap-2">
          <Radio
            id="material-tailwind-support-ticket-priority-low"
            name="priority"
            value="low"
            label="Low"
            checked={priority === 'low'}
            onChange={() => setPriority('low')}
            className="dark:border-gray-600"
            labelProps={{ className: 'text-gray-900 dark:text-white' }}
          />
          <Radio
            id="material-tailwind-support-ticket-priority-medium"
            name="priority"
            value="medium"
            label="Medium"
            checked={priority === 'medium'}
            onChange={() => setPriority('medium')}
            className="dark:border-gray-600"
            labelProps={{ className: 'text-gray-900 dark:text-white' }}
          />
          <Radio
            id="material-tailwind-support-ticket-priority-high"
            name="priority"
            value="high"
            label="High"
            checked={priority === 'high'}
            onChange={() => setPriority('high')}
            className="dark:border-gray-600"
            labelProps={{ className: 'text-gray-900 dark:text-white' }}
          />
        </div>
      </fieldset>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Issue description
        </Typography>
        <Textarea
          id="material-tailwind-support-ticket-description"
          name="description"
          rows={4}
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
          Attachments
        </Typography>
        <input
          id="material-tailwind-support-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 file:mr-4 file:rounded file:border-0 file:bg-blue-500 file:px-4 file:py-2 file:text-white focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <Button type="submit" className="mt-2">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
