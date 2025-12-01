import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Select,
  ChoiceList,
  Button,
} from '@shopify/polaris'

function SupportTicketForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState(['medium'])
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')

  const categoryOptions = [
    { label: 'Select category', value: '' },
    { label: 'Technical issue', value: 'technical' },
    { label: 'Billing', value: 'billing' },
    { label: 'Account', value: 'account' },
    { label: 'Feature request', value: 'feature' },
    { label: 'Other', value: 'other' },
  ]

  const priorityOptions = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
    { label: 'Critical', value: 'critical' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={setName}
          autoComplete="name"
          requiredIndicator
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <Select
          label="Category"
          options={categoryOptions}
          value={category}
          onChange={setCategory}
          requiredIndicator
        />
        <ChoiceList
          title="Priority"
          choices={priorityOptions}
          selected={priority}
          onChange={setPriority}
        />
        <TextField
          label="Subject"
          type="text"
          value={subject}
          onChange={setSubject}
          autoComplete="off"
          requiredIndicator
        />
        <TextField
          label="Description"
          value={description}
          onChange={setDescription}
          multiline={4}
          autoComplete="off"
          requiredIndicator
        />
        <Button submit variant="primary">
          Submit ticket
        </Button>
      </FormLayout>
    </form>
  )
}

export default SupportTicketForm
