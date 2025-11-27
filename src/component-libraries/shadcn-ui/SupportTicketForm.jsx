import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-ticket-subject">Subject</Label>
        <Input id="shadcn-ticket-subject" name="subject" type="text" required />
      </div>
      <div className="space-y-2">
        <fieldset>
          <legend className="text-sm font-medium">Priority</legend>
          <RadioGroup className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="shadcn-ticket-priority-low" name="priority" value="low" required />
              <Label htmlFor="shadcn-ticket-priority-low" className="font-normal">Low</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="shadcn-ticket-priority-medium" name="priority" value="medium" />
              <Label htmlFor="shadcn-ticket-priority-medium" className="font-normal">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="shadcn-ticket-priority-high" name="priority" value="high" />
              <Label htmlFor="shadcn-ticket-priority-high" className="font-normal">High</Label>
            </div>
          </RadioGroup>
        </fieldset>
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-ticket-description">Issue description</Label>
        <Textarea id="shadcn-ticket-description" name="description" rows="4" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-ticket-attachments">Attachments</Label>
        <Input id="shadcn-ticket-attachments" name="attachments" type="file" multiple />
      </div>
      <Button type="submit">Submit ticket</Button>
    </form>
  )
}

export default SupportTicketForm
