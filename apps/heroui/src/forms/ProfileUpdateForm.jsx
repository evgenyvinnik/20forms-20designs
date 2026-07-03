import { useState } from 'react'
import { Input, Button, TextArea } from '@heroui/react'

export default function ProfileUpdateForm() {
  const [formData, setFormData] = useState({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    bio: 'Software engineer and open source enthusiast.',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Profile Settings
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
          Profile updated successfully!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Full Name</label>
        <Input
          isRequired
          type="text"
          value={formData.fullName}
          onValueChange={(val) => setFormData({ ...formData, fullName: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Email Address</label>
        <Input
          isRequired
          type="email"
          value={formData.email}
          onValueChange={(val) => setFormData({ ...formData, email: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Bio</label>
        <TextArea
          minRows={3}
          value={formData.bio}
          onValueChange={(val) => setFormData({ ...formData, bio: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Save Changes
      </Button>
    </form>
  )
}
