import {
  Button,
  Card,
  FileInput,
  Label,
  Radio,
  TextInput,
  Textarea,
} from 'flowbite-react'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Support Ticket</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-ticket-subject" value="Subject" />
          </div>
          <TextInput
            id="flowbite-ticket-subject"
            name="subject"
            type="text"
            required
          />
        </div>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-gray-900 dark:text-white">
            Priority
          </legend>
          <div className="flex items-center gap-2">
            <Radio
              id="flowbite-ticket-priority-low"
              name="priority"
              value="low"
              defaultChecked
            />
            <Label htmlFor="flowbite-ticket-priority-low">Low</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              id="flowbite-ticket-priority-medium"
              name="priority"
              value="medium"
            />
            <Label htmlFor="flowbite-ticket-priority-medium">Medium</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              id="flowbite-ticket-priority-high"
              name="priority"
              value="high"
            />
            <Label htmlFor="flowbite-ticket-priority-high">High</Label>
          </div>
        </fieldset>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-ticket-description"
              value="Issue description"
            />
          </div>
          <Textarea
            id="flowbite-ticket-description"
            name="description"
            rows={4}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-ticket-attachments" value="Attachments" />
          </div>
          <FileInput
            id="flowbite-ticket-attachments"
            name="attachments"
            multiple
          />
        </div>
        <Button type="submit">Submit ticket</Button>
      </form>
    </Card>
  )
}

export default SupportTicketForm
