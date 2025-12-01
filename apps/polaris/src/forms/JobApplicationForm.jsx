import { useState, useCallback } from 'react'
import { FormLayout, TextField, Select, Button, Text } from '@shopify/polaris'

function JobApplicationForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [position, setPosition] = useState('')
  const [experience, setExperience] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [coverLetter, setCoverLetter] = useState('')

  const positionOptions = [
    { label: 'Select position', value: '' },
    { label: 'Software Engineer', value: 'software-engineer' },
    { label: 'Product Manager', value: 'product-manager' },
    { label: 'Designer', value: 'designer' },
    { label: 'Marketing Specialist', value: 'marketing' },
    { label: 'Sales Representative', value: 'sales' },
  ]

  const experienceOptions = [
    { label: 'Select experience level', value: '' },
    { label: '0-1 years', value: 'entry' },
    { label: '2-4 years', value: 'mid' },
    { label: '5-7 years', value: 'senior' },
    { label: '8+ years', value: 'lead' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Application submitted!')
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
          requiredIndicator
        />
        <Select
          label="Position"
          options={positionOptions}
          value={position}
          onChange={setPosition}
          requiredIndicator
        />
        <Select
          label="Years of experience"
          options={experienceOptions}
          value={experience}
          onChange={setExperience}
          requiredIndicator
        />
        <TextField
          label="LinkedIn profile"
          type="url"
          value={linkedin}
          onChange={setLinkedin}
          autoComplete="url"
        />
        <TextField
          label="Portfolio/Website"
          type="url"
          value={portfolio}
          onChange={setPortfolio}
          autoComplete="url"
        />
        <Text as="p">Upload your resume (PDF format preferred)</Text>
        <TextField
          label="Cover letter"
          value={coverLetter}
          onChange={setCoverLetter}
          multiline={4}
          autoComplete="off"
        />
        <Button submit variant="primary">
          Submit application
        </Button>
      </FormLayout>
    </form>
  )
}

export default JobApplicationForm
