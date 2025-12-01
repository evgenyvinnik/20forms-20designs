import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Select,
  ChoiceList,
  Checkbox,
  Button,
} from '@shopify/polaris'

function EventRegistrationForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [ticketType, setTicketType] = useState('')
  const [dietaryRestrictions, setDietaryRestrictions] = useState([])
  const [specialRequirements, setSpecialRequirements] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  const ticketOptions = [
    { label: 'Select ticket type', value: '' },
    { label: 'General admission', value: 'general' },
    { label: 'VIP', value: 'vip' },
    { label: 'Student', value: 'student' },
    { label: 'Group (5+)', value: 'group' },
  ]

  const dietaryOptions = [
    { label: 'Vegetarian', value: 'vegetarian' },
    { label: 'Vegan', value: 'vegan' },
    { label: 'Gluten-free', value: 'gluten-free' },
    { label: 'Halal', value: 'halal' },
    { label: 'Kosher', value: 'kosher' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <FormLayout.Group>
          <TextField
            label="First name"
            type="text"
            value={firstName}
            onChange={setFirstName}
            autoComplete="given-name"
            requiredIndicator
          />
          <TextField
            label="Last name"
            type="text"
            value={lastName}
            onChange={setLastName}
            autoComplete="family-name"
            requiredIndicator
          />
        </FormLayout.Group>
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <TextField
          label="Phone number"
          type="tel"
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
        />
        <Select
          label="Ticket type"
          options={ticketOptions}
          value={ticketType}
          onChange={setTicketType}
          requiredIndicator
        />
        <ChoiceList
          title="Dietary restrictions"
          choices={dietaryOptions}
          selected={dietaryRestrictions}
          onChange={setDietaryRestrictions}
          allowMultiple
        />
        <TextField
          label="Special requirements"
          value={specialRequirements}
          onChange={setSpecialRequirements}
          multiline={3}
          autoComplete="off"
        />
        <Checkbox
          label="I accept the terms and conditions"
          checked={acceptTerms}
          onChange={setAcceptTerms}
        />
        <Button submit variant="primary">
          Register
        </Button>
      </FormLayout>
    </form>
  )
}

export default EventRegistrationForm
