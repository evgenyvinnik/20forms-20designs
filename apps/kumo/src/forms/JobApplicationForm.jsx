import { Button, Checkbox, Input, InputArea } from '@cloudflare/kumo'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Full name" name="fullName" type="text" required />
      <Input label="Email address" name="email" type="email" required />
      <Input
        label="Phone number"
        name="phone"
        type="tel"
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
        required
      />
      <Input label="Role applied for" name="role" type="text" required />
      <Input label="Resume link" name="resume" type="url" required />
      <InputArea label="Cover letter" name="coverLetter" rows={4} required />
      <Checkbox label="Keep me informed about future roles" name="updates" />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Submit application
        </Button>
      </div>
    </form>
  )
}

export default JobApplicationForm
