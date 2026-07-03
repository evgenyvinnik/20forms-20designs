import fs from 'fs'
import path from 'path'

const targetDir = path.join(process.cwd(), 'apps/gluestack/src/forms')

const forms = {
  'UserLoginForm.jsx': `import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Sign In</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Log in successful!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Email Address</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@example.com"
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Password</label>
        <input
          className="gluestack-input"
          type="password"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={formData.rememberMe}
          onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
        />
        Remember this device
      </label>
      <button type="submit" className="gluestack-button">
        Sign In
      </button>
    </form>
  )
}`,

  'UserRegistrationForm.jsx': `import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Create Account</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Registration successful!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Full Name</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="Jane Doe"
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Email Address</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="jane@example.com"
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Password</label>
        <input
          className="gluestack-input"
          type="password"
          required
          minLength={8}
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Confirm Password</label>
        <input
          className="gluestack-input"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </div>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
        <input
          type="checkbox"
          required
          checked={formData.terms}
          onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
        />
        I agree to the Terms of Service and Privacy Policy
      </label>
      <button type="submit" className="gluestack-button">
        Register
      </button>
    </form>
  )
}`,

  'PasswordResetForm.jsx': `import { useState } from 'react'

export default function PasswordResetForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Reset Password</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Password reset link sent to your email!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Email Address</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
        />
        <span style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
          Enter your registered email address to receive password reset instructions.
        </span>
      </div>
      <button type="submit" className="gluestack-button">
        Send Reset Link
      </button>
    </form>
  )
}`,

  'TwoFactorAuthForm.jsx': `import { useState } from 'react'

export default function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Two-Factor Authentication</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Two-factor authentication verified!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Authentication Code</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="123456"
          maxLength={6}
        />
        <span style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
          Enter the 6-digit code from your authenticator app.
        </span>
      </div>
      <button type="submit" className="gluestack-button">
        Verify Code
      </button>
    </form>
  )
}`,

  'ContactInquiryForm.jsx': `import { useState } from 'react'

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Contact Us</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Thank you for your message. We will respond shortly!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Your Name</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Email Address</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Inquiry Subject</label>
        <select
          className="gluestack-select"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        >
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="billing">Billing Question</option>
          <option value="partnership">Partnership Opportunity</option>
        </select>
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Message</label>
        <textarea
          className="gluestack-textarea"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button type="submit" className="gluestack-button">
        Send Message
      </button>
    </form>
  )
}`,

  'NewsletterSubscriptionForm.jsx': `import { useState } from 'react'

export default function NewsletterSubscriptionForm() {
  const [formData, setFormData] = useState({
    email: '',
    frequency: 'weekly',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Subscribe to Newsletter</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Subscribed to newsletter successfully!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Email Address</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="subscriber@example.com"
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Digest Frequency</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <input
              type="radio"
              name="frequency"
              value="daily"
              checked={formData.frequency === 'daily'}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
            />
            Daily updates
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <input
              type="radio"
              name="frequency"
              value="weekly"
              checked={formData.frequency === 'weekly'}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
            />
            Weekly digest
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <input
              type="radio"
              name="frequency"
              value="monthly"
              checked={formData.frequency === 'monthly'}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
            />
            Monthly summary
          </label>
        </div>
      </div>
      <button type="submit" className="gluestack-button">
        Subscribe
      </button>
    </form>
  )
}`,

  'ProfileUpdateForm.jsx': `import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Profile Settings</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Profile updated successfully!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Full Name</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Email Address</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Bio</label>
        <textarea
          className="gluestack-textarea"
          rows={3}
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
      </div>
      <button type="submit" className="gluestack-button">
        Save Changes
      </button>
    </form>
  )
}`,

  'PasswordChangeForm.jsx': `import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Change Password</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Password changed successfully!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Current Password</label>
        <input
          className="gluestack-input"
          type="password"
          required
          value={formData.currentPassword}
          onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">New Password</label>
        <input
          className="gluestack-input"
          type="password"
          required
          minLength={8}
          value={formData.newPassword}
          onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Confirm New Password</label>
        <input
          className="gluestack-input"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </div>
      <button type="submit" className="gluestack-button">
        Update Password
      </button>
    </form>
  )
}`,

  'BillingInfoForm.jsx': `import { useState } from 'react'

export default function BillingInfoForm() {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Billing Information</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Billing details saved!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Street Address</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">City</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="gluestack-field">
          <label className="gluestack-label">State / Province</label>
          <input
            className="gluestack-input"
            type="text"
            required
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          />
        </div>
        <div className="gluestack-field">
          <label className="gluestack-label">ZIP / Postal Code</label>
          <input
            className="gluestack-input"
            type="text"
            required
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </div>
      </div>
      <button type="submit" className="gluestack-button">
        Save Billing Info
      </button>
    </form>
  )
}`,

  'ShippingAddressForm.jsx': `import { useState } from 'react'

export default function ShippingAddressForm() {
  const [formData, setFormData] = useState({
    recipient: '',
    address: '',
    city: '',
    zip: '',
    sameAsBilling: true,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Shipping Address</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Shipping address saved!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Recipient Name</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.recipient}
          onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Street Address</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="gluestack-field">
          <label className="gluestack-label">City</label>
          <input
            className="gluestack-input"
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>
        <div className="gluestack-field">
          <label className="gluestack-label">ZIP Code</label>
          <input
            className="gluestack-input"
            type="text"
            required
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </div>
      </div>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={formData.sameAsBilling}
          onChange={(e) => setFormData({ ...formData, sameAsBilling: e.target.checked })}
        />
        Use as default billing address
      </label>
      <button type="submit" className="gluestack-button">
        Save Address
      </button>
    </form>
  )
}`,

  'CheckoutPaymentForm.jsx': `import { useState } from 'react'

export default function CheckoutPaymentForm() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Payment Details</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Payment processed successfully!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Name on Card</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.cardName}
          onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Card Number</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.cardNumber}
          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="gluestack-field">
          <label className="gluestack-label">Expiration (MM/YY)</label>
          <input
            className="gluestack-input"
            type="text"
            required
            value={formData.expiry}
            onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
            placeholder="MM/YY"
          />
        </div>
        <div className="gluestack-field">
          <label className="gluestack-label">CVV</label>
          <input
            className="gluestack-input"
            type="password"
            required
            value={formData.cvv}
            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
            placeholder="123"
            maxLength={4}
          />
        </div>
      </div>
      <button type="submit" className="gluestack-button">
        Complete Purchase
      </button>
    </form>
  )
}`,

  'OrderTrackingForm.jsx': `import { useState } from 'react'

export default function OrderTrackingForm() {
  const [formData, setFormData] = useState({
    orderNumber: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Track Your Order</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Searching for order status...
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Order Number</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.orderNumber}
          onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
          placeholder="ORD-12345"
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Billing Email</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <button type="submit" className="gluestack-button">
        Track Order
      </button>
    </form>
  )
}`,

  'AppointmentRequestForm.jsx': `import { useState } from 'react'

export default function AppointmentRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: 'consultation',
    date: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Book Appointment</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Appointment request submitted!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Your Name</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Service Required</label>
        <select
          className="gluestack-select"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="consultation">Initial Consultation</option>
          <option value="followup">Follow-up Session</option>
          <option value="review">Annual Review</option>
        </select>
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Preferred Date</label>
        <input
          className="gluestack-input"
          type="date"
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Special Instructions</label>
        <textarea
          className="gluestack-textarea"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </div>
      <button type="submit" className="gluestack-button">
        Request Appointment
      </button>
    </form>
  )
}`,

  'EventRegistrationForm.jsx': `import { useState } from 'react'

export default function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketType: 'standard',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Event Registration</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Event registration confirmed!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Attendee Name</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Email Address</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Ticket Tier</label>
        <select
          className="gluestack-select"
          required
          value={formData.ticketType}
          onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
        >
          <option value="standard">Standard Pass</option>
          <option value="vip">VIP Pass</option>
          <option value="student">Student Pass</option>
        </select>
      </div>
      <button type="submit" className="gluestack-button">
        Register for Event
      </button>
    </form>
  )
}`,

  'JobApplicationForm.jsx': `import { useState } from 'react'

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Job Application</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Application submitted successfully!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Full Name</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Email Address</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Phone Number</label>
        <input
          className="gluestack-input"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Cover Letter</label>
        <textarea
          className="gluestack-textarea"
          required
          rows={4}
          value={formData.coverLetter}
          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
        />
      </div>
      <button type="submit" className="gluestack-button">
        Submit Application
      </button>
    </form>
  )
}`,

  'CustomerFeedbackForm.jsx': `import { useState } from 'react'

export default function CustomerFeedbackForm() {
  const [formData, setFormData] = useState({
    rating: '5',
    comments: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Customer Feedback</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Thank you for your feedback!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Overall Satisfaction</label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {['1', '2', '3', '4', '5'].map((r) => (
            <label key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}>
              <input
                type="radio"
                name="rating"
                value={r}
                checked={formData.rating === r}
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
              />
              {r}
            </label>
          ))}
        </div>
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Detailed Comments</label>
        <textarea
          className="gluestack-textarea"
          required
          rows={4}
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
        />
      </div>
      <button type="submit" className="gluestack-button">
        Submit Feedback
      </button>
    </form>
  )
}`,

  'SupportTicketForm.jsx': `import { useState } from 'react'

export default function SupportTicketForm() {
  const [formData, setFormData] = useState({
    subject: '',
    priority: 'medium',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Create Support Ticket</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Support ticket created successfully!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Issue Subject</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Priority Level</label>
        <select
          className="gluestack-select"
          required
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Description of Issue</label>
        <textarea
          className="gluestack-textarea"
          required
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <button type="submit" className="gluestack-button">
        Submit Ticket
      </button>
    </form>
  )
}`,

  'OnboardingWizardForm.jsx': `import { useState } from 'react'

export default function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    displayName: '',
    company: '',
    role: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 2) {
      setStep(step + 1)
    } else {
      setSubmitted(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Welcome Onboarding</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Onboarding completed!
        </div>
      )}
      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
        Step {step} of 2
      </span>
      {step === 1 ? (
        <>
          <div className="gluestack-field">
            <label className="gluestack-label">Display Name</label>
            <input
              className="gluestack-input"
              type="text"
              required
              value={formData.displayName}
              onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
            />
          </div>
          <button type="submit" className="gluestack-button">
            Next Step
          </button>
        </>
      ) : (
        <>
          <div className="gluestack-field">
            <label className="gluestack-label">Company Name</label>
            <input
              className="gluestack-input"
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
          <div className="gluestack-field">
            <label className="gluestack-label">Job Title / Role</label>
            <input
              className="gluestack-input"
              type="text"
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="button" className="gluestack-button" style={{ background: '#e2e8f0', color: '#1e293b' }} onClick={() => setStep(1)}>
              Back
            </button>
            <button type="submit" className="gluestack-button" style={{ flex: 1 }}>
              Complete Setup
            </button>
          </div>
        </>
      )}
    </form>
  )
}`,

  'AdvancedSearchForm.jsx': `import { useState } from 'react'

export default function AdvancedSearchForm() {
  const [formData, setFormData] = useState({
    query: '',
    category: 'all',
    sortBy: 'relevance',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Advanced Search</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Search executed!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Search Keywords</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.query}
          onChange={(e) => setFormData({ ...formData, query: e.target.value })}
          placeholder="Search..."
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="gluestack-field">
          <label className="gluestack-label">Category</label>
          <select
            className="gluestack-select"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="all">All Categories</option>
            <option value="articles">Articles</option>
            <option value="products">Products</option>
            <option value="users">Users</option>
          </select>
        </div>
        <div className="gluestack-field">
          <label className="gluestack-label">Sort By</label>
          <select
            className="gluestack-select"
            value={formData.sortBy}
            onChange={(e) => setFormData({ ...formData, sortBy: e.target.value })}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
      <button type="submit" className="gluestack-button">
        Execute Search
      </button>
    </form>
  )
}`,

  'PrivacyConsentForm.jsx': `import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Privacy & Cookies Consent</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
          Privacy preferences saved!
        </div>
      )}
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={formData.marketing}
          onChange={(e) => setFormData({ ...formData, marketing: e.target.checked })}
        />
        Receive marketing communication and special offers
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={formData.analytics}
          onChange={(e) => setFormData({ ...formData, analytics: e.target.checked })}
        />
        Allow anonymous performance and analytics tracking
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={formData.thirdParty}
          onChange={(e) => setFormData({ ...formData, thirdParty: e.target.checked })}
        />
        Share data with trusted third-party service partners
      </label>
      <button type="submit" className="gluestack-button">
        Save Preferences
      </button>
    </form>
  )
}`,
}

for (const [file, content] of Object.entries(forms)) {
  fs.writeFileSync(path.join(targetDir, file), content)
}
console.log('Successfully generated all 20 gluestack forms!')
