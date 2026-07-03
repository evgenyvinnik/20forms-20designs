import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Checkbox,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function PrivacyConsentForm() {
  const [formData, setFormData] = useState({
    marketing: false,
    analytics: true,
    thirdParty: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography level="h3" component="h2">
        Privacy & Cookies Consent
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Privacy preferences saved!
        </Alert>
      )}
      <Checkbox
        label="Receive marketing communication and special offers"
        checked={formData.marketing}
        onChange={(e) =>
          setFormData({ ...formData, marketing: e.target.checked })
        }
      />
      <Checkbox
        label="Allow anonymous performance and analytics tracking"
        checked={formData.analytics}
        onChange={(e) =>
          setFormData({ ...formData, analytics: e.target.checked })
        }
      />
      <Checkbox
        label="Share data with trusted third-party service partners"
        checked={formData.thirdParty}
        onChange={(e) =>
          setFormData({ ...formData, thirdParty: e.target.checked })
        }
      />
      <Button type="submit" color="primary">
        Save Preferences
      </Button>
    </Box>
  )
}
