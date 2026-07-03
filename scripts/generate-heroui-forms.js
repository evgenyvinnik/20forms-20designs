import fs from 'fs'
import path from 'path'

const targetDir = path.join(process.cwd(), 'apps/heroui/src/forms')

const forms = {
  'UserLoginForm.jsx': `import { useState } from 'react'
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
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Sign In</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
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
}`,

  'UserRegistrationForm.jsx': `import { useState } from 'react'
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
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Create Account</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
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
          onValueChange={(val) => setFormData({ ...formData, confirmPassword: val })}
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
}`,

  'PasswordResetForm.jsx': `import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function PasswordResetForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Reset Password</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Password reset link sent to your email!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Email Address</label>
        <Input
          isRequired
          type="email"
          value={email}
          onValueChange={setEmail}
          placeholder="your.email@example.com"
        />
        <span style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
          Enter your registered email address to receive password reset instructions.
        </span>
      </div>
      <Button type="submit" color="primary">
        Send Reset Link
      </Button>
    </form>
  )
}`,

  'TwoFactorAuthForm.jsx': `import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Two-Factor Authentication</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Two-factor authentication verified!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Authentication Code</label>
        <Input
          isRequired
          type="text"
          value={code}
          onValueChange={setCode}
          placeholder="123456"
          maxLength={6}
        />
        <span style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
          Enter the 6-digit code from your authenticator app.
        </span>
      </div>
      <Button type="submit" color="primary">
        Verify Code
      </Button>
    </form>
  )
}`,

  'ContactInquiryForm.jsx': `import { useState } from 'react'
import { Input, Button, TextArea } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Contact Us</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Thank you for your message. We will respond shortly!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Your Name</label>
        <Input
          isRequired
          type="text"
          value={formData.name}
          onValueChange={(val) => setFormData({ ...formData, name: val })}
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
        <label className="heroui-label">Inquiry Subject</label>
        <select
          className="heroui-select"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          required
        >
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="billing">Billing Question</option>
          <option value="partnership">Partnership Opportunity</option>
        </select>
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Message</label>
        <TextArea
          isRequired
          minRows={4}
          value={formData.message}
          onValueChange={(val) => setFormData({ ...formData, message: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Send Message
      </Button>
    </form>
  )
}`,

  'NewsletterSubscriptionForm.jsx': `import { useState } from 'react'
import { Input, Button, RadioGroup, Radio } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Subscribe to Newsletter</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Subscribed to newsletter successfully!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Email Address</label>
        <Input
          isRequired
          type="email"
          value={formData.email}
          onValueChange={(val) => setFormData({ ...formData, email: val })}
          placeholder="subscriber@example.com"
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Digest Frequency</label>
        <RadioGroup
          value={formData.frequency}
          onValueChange={(val) => setFormData({ ...formData, frequency: val })}
        >
          <Radio value="daily">Daily updates</Radio>
          <Radio value="weekly">Weekly digest</Radio>
          <Radio value="monthly">Monthly summary</Radio>
        </RadioGroup>
      </div>
      <Button type="submit" color="primary">
        Subscribe
      </Button>
    </form>
  )
}`,

  'ProfileUpdateForm.jsx': `import { useState } from 'react'
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
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Profile Settings</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
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
}`,

  'PasswordChangeForm.jsx': `import { useState } from 'react'
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
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Change Password</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Password changed successfully!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Current Password</label>
        <Input
          isRequired
          type="password"
          value={formData.currentPassword}
          onValueChange={(val) => setFormData({ ...formData, currentPassword: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">New Password</label>
        <Input
          isRequired
          type="password"
          value={formData.newPassword}
          onValueChange={(val) => setFormData({ ...formData, newPassword: val })}
          minLength={8}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Confirm New Password</label>
        <Input
          isRequired
          type="password"
          value={formData.confirmPassword}
          onValueChange={(val) => setFormData({ ...formData, confirmPassword: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Update Password
      </Button>
    </form>
  )
}`,

  'BillingInfoForm.jsx': `import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Billing Information</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Billing details saved!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Street Address</label>
        <Input
          isRequired
          type="text"
          value={formData.address}
          onValueChange={(val) => setFormData({ ...formData, address: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">City</label>
        <Input
          isRequired
          type="text"
          value={formData.city}
          onValueChange={(val) => setFormData({ ...formData, city: val })}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="heroui-field">
          <label className="heroui-label">State / Province</label>
          <Input
            isRequired
            type="text"
            value={formData.state}
            onValueChange={(val) => setFormData({ ...formData, state: val })}
          />
        </div>
        <div className="heroui-field">
          <label className="heroui-label">ZIP / Postal Code</label>
          <Input
            isRequired
            type="text"
            value={formData.zip}
            onValueChange={(val) => setFormData({ ...formData, zip: val })}
          />
        </div>
      </div>
      <Button type="submit" color="primary">
        Save Billing Info
      </Button>
    </form>
  )
}`,

  'ShippingAddressForm.jsx': `import { useState } from 'react'
import { Input, Button, Checkbox } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Shipping Address</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Shipping address saved!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Recipient Name</label>
        <Input
          isRequired
          type="text"
          value={formData.recipient}
          onValueChange={(val) => setFormData({ ...formData, recipient: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Street Address</label>
        <Input
          isRequired
          type="text"
          value={formData.address}
          onValueChange={(val) => setFormData({ ...formData, address: val })}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="heroui-field">
          <label className="heroui-label">City</label>
          <Input
            isRequired
            type="text"
            value={formData.city}
            onValueChange={(val) => setFormData({ ...formData, city: val })}
          />
        </div>
        <div className="heroui-field">
          <label className="heroui-label">ZIP Code</label>
          <Input
            isRequired
            type="text"
            value={formData.zip}
            onValueChange={(val) => setFormData({ ...formData, zip: val })}
          />
        </div>
      </div>
      <Checkbox
        isSelected={formData.sameAsBilling}
        onValueChange={(val) => setFormData({ ...formData, sameAsBilling: val })}
      >
        Use as default billing address
      </Checkbox>
      <Button type="submit" color="primary">
        Save Address
      </Button>
    </form>
  )
}`,

  'CheckoutPaymentForm.jsx': `import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Payment Details</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Payment processed successfully!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Name on Card</label>
        <Input
          isRequired
          type="text"
          value={formData.cardName}
          onValueChange={(val) => setFormData({ ...formData, cardName: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Card Number</label>
        <Input
          isRequired
          type="text"
          value={formData.cardNumber}
          onValueChange={(val) => setFormData({ ...formData, cardNumber: val })}
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="heroui-field">
          <label className="heroui-label">Expiration (MM/YY)</label>
          <Input
            isRequired
            type="text"
            value={formData.expiry}
            onValueChange={(val) => setFormData({ ...formData, expiry: val })}
            placeholder="MM/YY"
          />
        </div>
        <div className="heroui-field">
          <label className="heroui-label">CVV</label>
          <Input
            isRequired
            type="password"
            value={formData.cvv}
            onValueChange={(val) => setFormData({ ...formData, cvv: val })}
            placeholder="123"
            maxLength={4}
          />
        </div>
      </div>
      <Button type="submit" color="primary">
        Complete Purchase
      </Button>
    </form>
  )
}`,

  'OrderTrackingForm.jsx': `import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Track Your Order</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Searching for order status...
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Order Number</label>
        <Input
          isRequired
          type="text"
          value={formData.orderNumber}
          onValueChange={(val) => setFormData({ ...formData, orderNumber: val })}
          placeholder="ORD-12345"
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Billing Email</label>
        <Input
          isRequired
          type="email"
          value={formData.email}
          onValueChange={(val) => setFormData({ ...formData, email: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Track Order
      </Button>
    </form>
  )
}`,

  'AppointmentRequestForm.jsx': `import { useState } from 'react'
import { Input, Button, Textarea } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Book Appointment</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Appointment request submitted!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Your Name</label>
        <Input
          isRequired
          type="text"
          value={formData.name}
          onValueChange={(val) => setFormData({ ...formData, name: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Service Required</label>
        <select
          className="heroui-select"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          required
        >
          <option value="consultation">Initial Consultation</option>
          <option value="followup">Follow-up Session</option>
          <option value="review">Annual Review</option>
        </select>
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Preferred Date</label>
        <Input
          isRequired
          type="date"
          value={formData.date}
          onValueChange={(val) => setFormData({ ...formData, date: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Special Instructions</label>
        <Textarea
          minRows={3}
          value={formData.notes}
          onValueChange={(val) => setFormData({ ...formData, notes: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Request Appointment
      </Button>
    </form>
  )
}`,

  'EventRegistrationForm.jsx': `import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Event Registration</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Event registration confirmed!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Attendee Name</label>
        <Input
          isRequired
          type="text"
          value={formData.name}
          onValueChange={(val) => setFormData({ ...formData, name: val })}
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
        <label className="heroui-label">Ticket Tier</label>
        <select
          className="heroui-select"
          value={formData.ticketType}
          onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
          required
        >
          <option value="standard">Standard Pass</option>
          <option value="vip">VIP Pass</option>
          <option value="student">Student Pass</option>
        </select>
      </div>
      <Button type="submit" color="primary">
        Register for Event
      </Button>
    </form>
  )
}`,

  'JobApplicationForm.jsx': `import { useState } from 'react'
import { Input, Button, Textarea } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Job Application</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Application submitted successfully!
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
        <label className="heroui-label">Phone Number</label>
        <Input
          isRequired
          type="tel"
          value={formData.phone}
          onValueChange={(val) => setFormData({ ...formData, phone: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Cover Letter</label>
        <Textarea
          isRequired
          minRows={4}
          value={formData.coverLetter}
          onValueChange={(val) => setFormData({ ...formData, coverLetter: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Submit Application
      </Button>
    </form>
  )
}`,

  'CustomerFeedbackForm.jsx': `import { useState } from 'react'
import { Button, RadioGroup, Radio, Textarea } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Customer Feedback</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Thank you for your feedback!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Overall Satisfaction</label>
        <RadioGroup
          orientation="horizontal"
          value={formData.rating}
          onValueChange={(val) => setFormData({ ...formData, rating: val })}
        >
          <Radio value="1">1 - Poor</Radio>
          <Radio value="2">2 - Fair</Radio>
          <Radio value="3">3 - Good</Radio>
          <Radio value="4">4 - Very Good</Radio>
          <Radio value="5">5 - Excellent</Radio>
        </RadioGroup>
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Detailed Comments</label>
        <Textarea
          isRequired
          minRows={4}
          value={formData.comments}
          onValueChange={(val) => setFormData({ ...formData, comments: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Submit Feedback
      </Button>
    </form>
  )
}`,

  'SupportTicketForm.jsx': `import { useState } from 'react'
import { Input, Button, Textarea } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Create Support Ticket</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Support ticket created successfully!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Issue Subject</label>
        <Input
          isRequired
          type="text"
          value={formData.subject}
          onValueChange={(val) => setFormData({ ...formData, subject: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Priority Level</label>
        <select
          className="heroui-select"
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
          required
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Description of Issue</label>
        <Textarea
          isRequired
          minRows={4}
          value={formData.description}
          onValueChange={(val) => setFormData({ ...formData, description: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Submit Ticket
      </Button>
    </form>
  )
}`,

  'OnboardingWizardForm.jsx': `import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Welcome Onboarding</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Onboarding completed!
        </div>
      )}
      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
        Step {step} of 2
      </span>
      {step === 1 ? (
        <>
          <div className="heroui-field">
            <label className="heroui-label">Display Name</label>
            <Input
              isRequired
              type="text"
              value={formData.displayName}
              onValueChange={(val) => setFormData({ ...formData, displayName: val })}
            />
          </div>
          <Button type="submit" color="primary">
            Next Step
          </Button>
        </>
      ) : (
        <>
          <div className="heroui-field">
            <label className="heroui-label">Company Name</label>
            <Input
              isRequired
              type="text"
              value={formData.company}
              onValueChange={(val) => setFormData({ ...formData, company: val })}
            />
          </div>
          <div className="heroui-field">
            <label className="heroui-label">Job Title / Role</label>
            <Input
              isRequired
              type="text"
              value={formData.role}
              onValueChange={(val) => setFormData({ ...formData, role: val })}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="bordered" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" color="primary" style={{ flex: 1 }}>
              Complete Setup
            </Button>
          </div>
        </>
      )}
    </form>
  )
}`,

  'AdvancedSearchForm.jsx': `import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Advanced Search</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Search executed!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Search Keywords</label>
        <Input
          isRequired
          type="text"
          value={formData.query}
          onValueChange={(val) => setFormData({ ...formData, query: val })}
          placeholder="Search..."
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="heroui-field">
          <label className="heroui-label">Category</label>
          <select
            className="heroui-select"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="all">All Categories</option>
            <option value="articles">Articles</option>
            <option value="products">Products</option>
            <option value="users">Users</option>
          </select>
        </div>
        <div className="heroui-field">
          <label className="heroui-label">Sort By</label>
          <select
            className="heroui-select"
            value={formData.sortBy}
            onChange={(e) => setFormData({ ...formData, sortBy: e.target.value })}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
      <Button type="submit" color="primary">
        Execute Search
      </Button>
    </form>
  )
}`,

  'PrivacyConsentForm.jsx': `import { useState } from 'react'
import { Checkbox, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Privacy & Cookies Consent</h2>
      {submitted && (
        <div style={{ padding: '0.75rem 1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          Privacy preferences saved!
        </div>
      )}
      <Checkbox
        isSelected={formData.marketing}
        onValueChange={(val) => setFormData({ ...formData, marketing: val })}
      >
        Receive marketing communication and special offers
      </Checkbox>
      <Checkbox
        isSelected={formData.analytics}
        onValueChange={(val) => setFormData({ ...formData, analytics: val })}
      >
        Allow anonymous performance and analytics tracking
      </Checkbox>
      <Checkbox
        isSelected={formData.thirdParty}
        onValueChange={(val) => setFormData({ ...formData, thirdParty: val })}
      >
        Share data with trusted third-party service partners
      </Checkbox>
      <Button type="submit" color="primary">
        Save Preferences
      </Button>
    </form>
  )
}`,
}

for (const [file, content] of Object.entries(forms)) {
  fs.writeFileSync(path.join(targetDir, file), content)
}
console.log('Successfully generated all 20 HeroUI forms!')
