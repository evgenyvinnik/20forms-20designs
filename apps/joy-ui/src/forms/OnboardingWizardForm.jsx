import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
} from '@mui/joy'

export default function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (step < 3) setStep(step + 1)
    else alert('Onboarding completed!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      {step === 1 && (
        <>
          <FormControl required>
            <FormLabel>Work email</FormLabel>
            <Input name="email" type="email" required />
          </FormControl>
          <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" required />
          </FormControl>
          <Button type="submit">Next step</Button>
        </>
      )}
      {step === 2 && (
        <>
          <FormControl required>
            <FormLabel>Team name</FormLabel>
            <Input name="teamName" required />
          </FormControl>
          <FormControl>
            <FormLabel>Team size</FormLabel>
            <Select name="teamSize" defaultValue="1-10">
              <Option value="1-10">1-10</Option>
              <Option value="11-50">11-50</Option>
              <Option value="51-200">51-200</Option>
              <Option value="201+">201+</Option>
            </Select>
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
              Next step
            </Button>
          </Box>
        </>
      )}
      {step === 3 && (
        <>
          <FormControl>
            <FormLabel>Primary goal</FormLabel>
            <Input name="goal" multiline minRows={3} />
          </FormControl>
          <Checkbox name="tips" label="Send me product tips" defaultChecked />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              type="button"
              variant="outlined"
              color="neutral"
              onClick={() => setStep(2)}
            >
              Back
            </Button>
            <Button type="submit" sx={{ flex: 1 }}>
              Finish setup
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}
