import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    displayName: '',
    company: '',
    role: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 2) {
      setStep(step + 1)
    } else {
      setSubmitted(true)
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography level="h3" component="h2">
        Welcome Onboarding
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Onboarding completed!
        </Alert>
      )}
      <Typography level="body-sm" color="neutral">
        Step {step} of 2
      </Typography>
      {step === 1 ? (
        <>
          <FormControl required>
            <FormLabel>Display Name</FormLabel>
            <Input
              type="text"
              value={formData.displayName}
              onChange={(e) =>
                setFormData({ ...formData, displayName: e.target.value })
              }
            />
          </FormControl>
          <Button type="submit" color="primary">
            Next Step
          </Button>
        </>
      ) : (
        <>
          <FormControl required>
            <FormLabel>Company Name</FormLabel>
            <Input
              type="text"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </FormControl>
          <FormControl required>
            <FormLabel>Job Title / Role</FormLabel>
            <Input
              type="text"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            />
          </FormControl>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button type="submit" color="primary" sx={{ flex: 1 }}>
              Complete Setup
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}
