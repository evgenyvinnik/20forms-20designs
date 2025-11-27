import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-job-full-name">Full name</Label>
        <Input id="shadcn-job-full-name" name="fullName" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-job-email">Email address</Label>
        <Input id="shadcn-job-email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-job-phone">Phone number</Label>
        <Input
          id="shadcn-job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-job-role">Role applied for</Label>
        <Input id="shadcn-job-role" name="role" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-job-resume">Resume link</Label>
        <Input id="shadcn-job-resume" name="resume" type="url" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-job-cover-letter">Cover letter</Label>
        <Textarea id="shadcn-job-cover-letter" name="coverLetter" rows="4" required />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="updates" />
        <Label htmlFor="updates" className="font-normal">Keep me informed about future roles</Label>
      </div>
      <Button type="submit">Submit application</Button>
    </form>
  )
}

export default JobApplicationForm
