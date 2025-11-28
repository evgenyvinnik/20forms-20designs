import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <Box
        component="section"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h6">Step 1: Account</Typography>
        <TextField
          id="mui-onboarding-email"
          name="email"
          label="Work email"
          type="email"
          required
        />
        <TextField
          id="mui-onboarding-password"
          name="password"
          label="Password"
          type="password"
          required
          inputProps={{ minLength: 8 }}
        />
      </Box>

      <Box
        component="section"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h6">Step 2: Team</Typography>
        <TextField
          id="mui-onboarding-team-name"
          name="teamName"
          label="Team name"
          type="text"
          required
        />
        <TextField
          id="mui-onboarding-size"
          name="teamSize"
          label="Team size"
          select
          required
          defaultValue=""
        >
          <MenuItem value="">Select size</MenuItem>
          <MenuItem value="1-5">1-5</MenuItem>
          <MenuItem value="6-20">6-20</MenuItem>
          <MenuItem value="21-50">21-50</MenuItem>
          <MenuItem value="50+">50+</MenuItem>
        </TextField>
      </Box>

      <Box
        component="section"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h6">Step 3: Preferences</Typography>
        <TextField
          id="mui-onboarding-goal"
          name="goal"
          label="Primary goal"
          multiline
          rows={3}
          required
        />
        <FormControlLabel
          control={<Checkbox name="updates" />}
          label="Send me product tips"
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          type="button"
          variant="outlined"
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </Button>
        <Button type="submit" variant="contained">
          Finish setup
        </Button>
      </Box>
    </Box>
  )
}

export default OnboardingWizardForm
