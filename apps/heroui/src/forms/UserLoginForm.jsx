import { useState } from 'react'
import { Input, Button, Checkbox } from '@heroui/react'

export default function UserLoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Sign In
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
          Log in successful!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Email Address</label>
        <Input
          isRequired
          type="email"
          value={formData.email}
          onValueChange={(val) => setFormData({ ...formData, email: val })}
          placeholder="you@example.com"
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Password</label>
        <Input
          isRequired
          type="password"
          value={formData.password}
          onValueChange={(val) => setFormData({ ...formData, password: val })}
        />
      </div>
      <Checkbox
        isSelected={formData.rememberMe}
        onValueChange={(val) => setFormData({ ...formData, rememberMe: val })}
      >
        Remember this device
      </Checkbox>
      <Button type="submit" color="primary">
        Sign In
      </Button>
    </form>
  )
}
