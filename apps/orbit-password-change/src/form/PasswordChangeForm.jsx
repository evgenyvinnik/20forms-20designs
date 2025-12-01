import { useState } from 'react'
import {
  InputField,
  Button,
  Checkbox,
  Stack,
  Heading,
} from '@kiwicom/orbit-components'

function PasswordChangeForm() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    signOutOtherDevices: false,
  })

  const handleChange = (name) => (value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = () => {
    setFormData((prev) => ({ ...prev, signOutOtherDevices: !prev.signOutOtherDevices }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password change submitted:\n' + JSON.stringify(formData, null, 2))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <Heading type="title2">Change Password</Heading>

        <InputField
          label="Current password"
          type="password"
          value={formData.currentPassword}
          onChange={(e) => handleChange('currentPassword')(e.target.value)}
          required
        />

        <InputField
          label="New password"
          type="password"
          value={formData.newPassword}
          onChange={(e) => handleChange('newPassword')(e.target.value)}
          minLength={8}
          help="Minimum 8 characters"
          required
        />

        <InputField
          label="Confirm new password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword')(e.target.value)}
          minLength={8}
          required
        />

        <Checkbox
          label="Sign out of other devices"
          checked={formData.signOutOtherDevices}
          onChange={handleCheckboxChange}
        />

        <Button type="primary" submit fullWidth>
          Update password
        </Button>
      </Stack>
    </form>
  )
}

export default PasswordChangeForm
