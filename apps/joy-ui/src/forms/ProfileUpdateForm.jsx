import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@mui/joy'

export default function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile saved!')
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
      <FormControl required>
        <FormLabel htmlFor="joy-profile-name">Display name</FormLabel>
        <Input
          id="joy-profile-name"
          name="displayName"
          type="text"
          defaultValue="Jane Doe"
          required
        />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-profile-email">Public email</FormLabel>
        <Input
          id="joy-profile-email"
          name="email"
          type="email"
          defaultValue="jane@example.com"
          required
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="joy-profile-bio">Bio</FormLabel>
        <Textarea
          id="joy-profile-bio"
          name="bio"
          minRows={3}
          defaultValue="Software developer based in San Francisco."
        />
      </FormControl>

      <Button type="submit">Save profile</Button>
    </Box>
  )
}
