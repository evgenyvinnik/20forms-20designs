import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Textarea,
} from 'flowbite-react'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Job Application</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-job-full-name">Full name</Label>
          </div>
          <TextInput
            id="flowbite-job-full-name"
            name="fullName"
            type="text"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-job-email">Email address</Label>
          </div>
          <TextInput
            id="flowbite-job-email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-job-phone">Phone number</Label>
          </div>
          <TextInput
            id="flowbite-job-phone"
            name="phone"
            type="tel"
            pattern="[+0-9\s-]{7,20}"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-job-role">Role applied for</Label>
          </div>
          <TextInput id="flowbite-job-role" name="role" type="text" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-job-resume">Resume link</Label>
          </div>
          <TextInput
            id="flowbite-job-resume"
            name="resume"
            type="url"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-job-cover-letter">Cover letter</Label>
          </div>
          <Textarea
            id="flowbite-job-cover-letter"
            name="coverLetter"
            rows={4}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="flowbite-job-updates" name="updates" />
          <Label htmlFor="flowbite-job-updates">
            Keep me informed about future roles
          </Label>
        </div>
        <Button type="submit">Submit application</Button>
      </form>
    </Card>
  )
}

export default JobApplicationForm
