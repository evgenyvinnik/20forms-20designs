import { Box, Button, TextField } from '@mui/material'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-profile-first-name"
        name="firstName"
        label="First name"
        type="text"
        required
      />
      <TextField
        id="mui-profile-last-name"
        name="lastName"
        label="Last name"
        type="text"
        required
      />
      <TextField
        id="mui-profile-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <TextField
        id="mui-profile-phone"
        name="phone"
        label="Phone number"
        type="tel"
        required
        inputProps={{ pattern: '[+0-9\\s-]{7,20}', inputMode: 'tel' }}
      />
      <TextField
        id="mui-profile-bio"
        name="bio"
        label="Short bio"
        multiline
        rows={3}
        required
      />
      <Button type="submit" variant="contained">
        Save changes
      </Button>
    </Box>
  )
}

export default ProfileUpdateForm
