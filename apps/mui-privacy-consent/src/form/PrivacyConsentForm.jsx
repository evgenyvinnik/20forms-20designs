import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-privacy-name"
        name="fullName"
        label="Full name"
        type="text"
        required
      />
      <TextField
        id="mui-privacy-email"
        name="email"
        label="Email address"
        type="email"
        required
      />

      <Box
        component="fieldset"
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          p: 2,
        }}
      >
        <Typography component="legend" sx={{ mb: 1, fontWeight: 600 }}>
          Communication channels
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="emailOptIn" />}
            label="Email updates"
          />
          <FormControlLabel
            control={<Checkbox name="smsOptIn" />}
            label="SMS notifications"
          />
          <FormControlLabel
            control={<Checkbox name="phoneOptIn" />}
            label="Phone calls"
          />
        </FormGroup>
      </Box>

      <Box
        component="fieldset"
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          p: 2,
        }}
      >
        <Typography component="legend" sx={{ mb: 1, fontWeight: 600 }}>
          Privacy options
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="analytics" />}
            label="Allow analytics cookies"
          />
          <FormControlLabel
            control={<Checkbox name="personalization" />}
            label="Allow personalized content"
          />
        </FormGroup>
      </Box>

      <TextField
        id="mui-privacy-notes"
        name="notes"
        label="Additional notes"
        multiline
        rows={3}
      />

      <Button type="submit" variant="contained">
        Save preferences
      </Button>
    </Box>
  )
}

export default PrivacyConsentForm
