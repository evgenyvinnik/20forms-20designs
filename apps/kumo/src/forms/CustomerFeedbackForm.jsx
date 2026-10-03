import { Button, Checkbox, Input, InputArea, Select } from '@cloudflare/kumo'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Name" name="name" type="text" required />
      <Input label="Email address" name="email" type="email" required />
      <Select
        label="Overall rating"
        name="rating"
        placeholder="Select rating"
        items={[
          { value: 'excellent', label: 'Excellent' },
          { value: 'good', label: 'Good' },
          { value: 'average', label: 'Average' },
          { value: 'poor', label: 'Poor' },
        ]}
        required
        className="kumo-select"
      />
      <InputArea label="Comments" name="comments" rows={4} required />
      <Checkbox label="I would like a follow-up" name="followUp" />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Send feedback
        </Button>
      </div>
    </form>
  )
}

export default CustomerFeedbackForm
