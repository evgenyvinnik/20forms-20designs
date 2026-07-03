import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@mui/joy'

export default function OnboardingWizardForm() {
  const [step, setStep] = useState(1)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      alert('Onboarding complete!')
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      {step === 1 ? (
        <>
          <FormControl required>
            <FormLabel htmlFor="joy-onboarding-name">Your full name</FormLabel>
            <Input id="joy-onboarding-name" name="name" required />
          </FormControl>
          <Button type="submit">Next step</Button>
        </>
      ) : (
        <>
          <FormControl required>
            <FormLabel htmlFor="joy-onboarding-company">Company name</FormLabel>
            <Input id="joy-onboarding-company" name="company" required />
          </FormControl>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              type="button"
              variant="outlined"
              color="neutral"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button type="submit" sx={{ flex: 1 }}>
              Complete onboarding
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}
