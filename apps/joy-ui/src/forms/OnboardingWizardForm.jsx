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
            <FormLabel htmlFor="joy-onb-name">Your full name</FormLabel>
            <Input id="joy-onb-name" name="name" type="text" required />
          </FormControl>
          <Button type="submit">Next step</Button>
        </>
      ) : (
        <>
          <FormControl required>
            <FormLabel htmlFor="joy-onb-company">Company name</FormLabel>
            <Input id="joy-onb-company" name="company" type="text" required />
          </FormControl>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button type="button" variant="outlined" onClick={() => setStep(1)}>
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
