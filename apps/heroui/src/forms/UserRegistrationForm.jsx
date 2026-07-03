import { useState } from 'react'
import { Input, Button, Checkbox } from '@heroui/react'

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Create Account
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
          Registration successful!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Full Name</label>
        <Input
          isRequired
          type="text"
          value={formData.fullName}
          onValueChange={(val) => setFormData({ ...formData, fullName: val })}
          placeholder="Jane Doe"
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Email Address</label>
        <Input
          isRequired
          type="email"
          value={formData.email}
          onValueChange={(val) => setFormData({ ...formData, email: val })}
          placeholder="jane@example.com"
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Password</label>
        <Input
          isRequired
          type="password"
          value={formData.password}
          onValueChange={(val) => setFormData({ ...formData, password: val })}
          minLength={8}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Confirm Password</label>
        <Input
          isRequired
          type="password"
          value={formData.confirmPassword}
          onValueChange={(val) =>
            setFormData({ ...formData, confirmPassword: val })
          }
        />
      </div>
      <Checkbox
        isRequired
        isSelected={formData.terms}
        onValueChange={(val) => setFormData({ ...formData, terms: val })}
      >
        I agree to the Terms of Service and Privacy Policy
      </Checkbox>
      <Button type="submit" color="primary">
        Register
      </Button>
    </form>
  )
}
