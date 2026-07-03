import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function PasswordChangeForm() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Change Password
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dcfce7',
            color: '#166534',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          Password changed successfully!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Current Password</label>
        <Input
          isRequired
          type="password"
          value={formData.currentPassword}
          onValueChange={(val) =>
            setFormData({ ...formData, currentPassword: val })
          }
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">New Password</label>
        <Input
          isRequired
          type="password"
          value={formData.newPassword}
          onValueChange={(val) =>
            setFormData({ ...formData, newPassword: val })
          }
          minLength={8}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Confirm New Password</label>
        <Input
          isRequired
          type="password"
          value={formData.confirmPassword}
          onValueChange={(val) =>
            setFormData({ ...formData, confirmPassword: val })
          }
        />
      </div>
      <Button type="submit" color="primary">
        Update Password
      </Button>
    </form>
  )
}
