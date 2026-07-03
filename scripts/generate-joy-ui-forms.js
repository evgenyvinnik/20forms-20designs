import fs from 'fs'
import path from 'path'

const targetDir = path.join(process.cwd(), 'apps/joy-ui/src/forms')

const forms = {
  'UserLoginForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Sign In</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Log in successful!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@example.com"
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </FormControl>
      <Checkbox
        label="Remember this device"
        checked={formData.rememberMe}
        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
      />
      <Button type="submit" color="primary">
        Sign In
      </Button>
    </Box>
  )
}`,

  'UserRegistrationForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Create Account</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Registration successful!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="Jane Doe"
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="jane@example.com"
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          slotProps={{ input: { minLength: 8 } }}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </FormControl>
      <Checkbox
        required
        label="I agree to the Terms of Service and Privacy Policy"
        checked={formData.terms}
        onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
      />
      <Button type="submit" color="primary">
        Register
      </Button>
    </Box>
  )
}`,

  'PasswordResetForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function PasswordResetForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Reset Password</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Password reset link sent to your email!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
        />
        <FormHelperText>
          Enter your registered email address to receive password reset instructions.
        </FormHelperText>
      </FormControl>
      <Button type="submit" color="primary">
        Send Reset Link
      </Button>
    </Box>
  )
}`,

  'TwoFactorAuthForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Two-Factor Authentication</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Two-factor authentication verified!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Authentication Code</FormLabel>
        <Input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="123456"
          slotProps={{ input: { maxLength: 6, pattern: '[0-9]{6}' } }}
        />
        <FormHelperText>
          Enter the 6-digit code from your authenticator app.
        </FormHelperText>
      </FormControl>
      <Button type="submit" color="primary">
        Verify Code
      </Button>
    </Box>
  )
}`,

  'ContactInquiryForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Textarea,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Contact Us</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Thank you for your message. We will respond shortly!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Your Name</FormLabel>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Inquiry Subject</FormLabel>
        <Select
          value={formData.subject}
          onChange={(_, val) => setFormData({ ...formData, subject: val })}
        >
          <Option value="general">General Inquiry</Option>
          <Option value="support">Technical Support</Option>
          <Option value="billing">Billing Question</Option>
          <Option value="partnership">Partnership Opportunity</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Message</FormLabel>
        <Textarea
          minRows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Send Message
      </Button>
    </Box>
  )
}`,

  'NewsletterSubscriptionForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  RadioGroup,
  Radio,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Subscribe to Newsletter</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Subscribed to newsletter successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="subscriber@example.com"
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Digest Frequency</FormLabel>
        <RadioGroup
          value={formData.frequency}
          onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
        >
          <Radio value="daily" label="Daily updates" />
          <Radio value="weekly" label="Weekly digest" />
          <Radio value="monthly" label="Monthly summary" />
        </RadioGroup>
      </FormControl>
      <Button type="submit" color="primary">
        Subscribe
      </Button>
    </Box>
  )
}`,

  'ProfileUpdateForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Profile Settings</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Profile updated successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Bio</FormLabel>
        <Textarea
          minRows={3}
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Save Changes
      </Button>
    </Box>
  )
}`,

  'PasswordChangeForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Change Password</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Password changed successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Current Password</FormLabel>
        <Input
          type="password"
          value={formData.currentPassword}
          onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>New Password</FormLabel>
        <Input
          type="password"
          value={formData.newPassword}
          onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
          slotProps={{ input: { minLength: 8 } }}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Confirm New Password</FormLabel>
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Update Password
      </Button>
    </Box>
  )
}`,

  'BillingInfoForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Billing Information</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Billing details saved!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Street Address</FormLabel>
        <Input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>City</FormLabel>
        <Input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel>State / Province</FormLabel>
          <Input
            type="text"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          />
        </FormControl>
        <FormControl required>
          <FormLabel>ZIP / Postal Code</FormLabel>
          <Input
            type="text"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </FormControl>
      </Box>
      <Button type="submit" color="primary">
        Save Billing Info
      </Button>
    </Box>
  )
}`,

  'ShippingAddressForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Shipping Address</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Shipping address saved!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Recipient Name</FormLabel>
        <Input
          type="text"
          value={formData.recipient}
          onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Street Address</FormLabel>
        <Input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </FormControl>
        <FormControl required>
          <FormLabel>ZIP Code</FormLabel>
          <Input
            type="text"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </FormControl>
      </Box>
      <Checkbox
        label="Use as default billing address"
        checked={formData.sameAsBilling}
        onChange={(e) => setFormData({ ...formData, sameAsBilling: e.target.checked })}
      />
      <Button type="submit" color="primary">
        Save Address
      </Button>
    </Box>
  )
}`,

  'CheckoutPaymentForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Payment Details</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Payment processed successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Name on Card</FormLabel>
        <Input
          type="text"
          value={formData.cardName}
          onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Card Number</FormLabel>
        <Input
          type="text"
          value={formData.cardNumber}
          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
          placeholder="1234 5678 9012 3456"
        />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel>Expiration (MM/YY)</FormLabel>
          <Input
            type="text"
            value={formData.expiry}
            onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
            placeholder="MM/YY"
          />
        </FormControl>
        <FormControl required>
          <FormLabel>CVV</FormLabel>
          <Input
            type="password"
            value={formData.cvv}
            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
            placeholder="123"
            slotProps={{ input: { maxLength: 4 } }}
          />
        </FormControl>
      </Box>
      <Button type="submit" color="primary">
        Complete Purchase
      </Button>
    </Box>
  )
}`,

  'OrderTrackingForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Track Your Order</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Searching for order status...
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Order Number</FormLabel>
        <Input
          type="text"
          value={formData.orderNumber}
          onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
          placeholder="ORD-12345"
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Billing Email</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Track Order
      </Button>
    </Box>
  )
}`,

  'AppointmentRequestForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Textarea,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Book Appointment</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Appointment request submitted!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Your Name</FormLabel>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Service Required</FormLabel>
        <Select
          value={formData.service}
          onChange={(_, val) => setFormData({ ...formData, service: val })}
        >
          <Option value="consultation">Initial Consultation</Option>
          <Option value="followup">Follow-up Session</Option>
          <Option value="review">Annual Review</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Preferred Date</FormLabel>
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Special Instructions</FormLabel>
        <Textarea
          minRows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Request Appointment
      </Button>
    </Box>
  )
}`,

  'EventRegistrationForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Event Registration</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Event registration confirmed!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Attendee Name</FormLabel>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Ticket Tier</FormLabel>
        <Select
          value={formData.ticketType}
          onChange={(_, val) => setFormData({ ...formData, ticketType: val })}
        >
          <Option value="standard">Standard Pass</Option>
          <Option value="vip">VIP Pass</Option>
          <Option value="student">Student Pass</Option>
        </Select>
      </FormControl>
      <Button type="submit" color="primary">
        Register for Event
      </Button>
    </Box>
  )
}`,

  'JobApplicationForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Job Application</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Application submitted successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Cover Letter</FormLabel>
        <Textarea
          minRows={4}
          value={formData.coverLetter}
          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Submit Application
      </Button>
    </Box>
  )
}`,

  'CustomerFeedbackForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Textarea,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Customer Feedback</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Thank you for your feedback!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Overall Satisfaction</FormLabel>
        <RadioGroup
          orientation="horizontal"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
        >
          <Radio value="1" label="1 - Poor" />
          <Radio value="2" label="2 - Fair" />
          <Radio value="3" label="3 - Good" />
          <Radio value="4" label="4 - Very Good" />
          <Radio value="5" label="5 - Excellent" />
        </RadioGroup>
      </FormControl>
      <FormControl required>
        <FormLabel>Detailed Comments</FormLabel>
        <Textarea
          minRows={4}
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Submit Feedback
      </Button>
    </Box>
  )
}`,

  'SupportTicketForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Textarea,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Create Support Ticket</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Support ticket created successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Issue Subject</FormLabel>
        <Input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Priority Level</FormLabel>
        <Select
          value={formData.priority}
          onChange={(_, val) => setFormData({ ...formData, priority: val })}
        >
          <Option value="low">Low Priority</Option>
          <Option value="medium">Medium Priority</Option>
          <Option value="high">High Priority</Option>
          <Option value="urgent">Urgent</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Description of Issue</FormLabel>
        <Textarea
          minRows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Submit Ticket
      </Button>
    </Box>
  )
}`,

  'OnboardingWizardForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Welcome Onboarding</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Onboarding completed!
        </Alert>
      )}
      <Typography level="body-sm" color="neutral">
        Step {step} of 2
      </Typography>
      {step === 1 ? (
        <>
          <FormControl required>
            <FormLabel>Display Name</FormLabel>
            <Input
              type="text"
              value={formData.displayName}
              onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
            />
          </FormControl>
          <Button type="submit" color="primary">
            Next Step
          </Button>
        </>
      ) : (
        <>
          <FormControl required>
            <FormLabel>Company Name</FormLabel>
            <Input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </FormControl>
          <FormControl required>
            <FormLabel>Job Title / Role</FormLabel>
            <Input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
          </FormControl>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" color="neutral" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" color="primary" sx={{ flex: 1 }}>
              Complete Setup
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}`,

  'AdvancedSearchForm.jsx': `import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Advanced Search</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Search executed!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Search Keywords</FormLabel>
        <Input
          type="text"
          value={formData.query}
          onChange={(e) => setFormData({ ...formData, query: e.target.value })}
          placeholder="Search..."
        />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            value={formData.category}
            onChange={(_, val) => setFormData({ ...formData, category: val })}
          >
            <Option value="all">All Categories</Option>
            <Option value="articles">Articles</Option>
            <Option value="products">Products</Option>
            <Option value="users">Users</Option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Sort By</FormLabel>
          <Select
            value={formData.sortBy}
            onChange={(_, val) => setFormData({ ...formData, sortBy: val })}
          >
            <Option value="relevance">Relevance</Option>
            <Option value="newest">Newest First</Option>
            <Option value="popular">Most Popular</Option>
          </Select>
        </FormControl>
      </Box>
      <Button type="submit" color="primary">
        Execute Search
      </Button>
    </Box>
  )
}`,

  'PrivacyConsentForm.jsx': `import { useState } from 'react'
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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography level="h3" component="h2">Privacy & Cookies Consent</Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Privacy preferences saved!
        </Alert>
      )}
      <Checkbox
        label="Receive marketing communication and special offers"
        checked={formData.marketing}
        onChange={(e) => setFormData({ ...formData, marketing: e.target.checked })}
      />
      <Checkbox
        label="Allow anonymous performance and analytics tracking"
        checked={formData.analytics}
        onChange={(e) => setFormData({ ...formData, analytics: e.target.checked })}
      />
      <Checkbox
        label="Share data with trusted third-party service partners"
        checked={formData.thirdParty}
        onChange={(e) => setFormData({ ...formData, thirdParty: e.target.checked })}
      />
      <Button type="submit" color="primary">
        Save Preferences
      </Button>
    </Box>
  )
}`,
}

for (const [file, content] of Object.entries(forms)) {
  fs.writeFileSync(path.join(targetDir, file), content)
}
console.log('Successfully generated all 20 Joy UI forms!')
