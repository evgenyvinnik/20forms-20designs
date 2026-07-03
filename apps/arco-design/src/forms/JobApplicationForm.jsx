import {
  Button,
  Input,
  Checkbox,
  Select,
  DatePicker,
  Radio,
  InputNumber,
  TimePicker,
  Switch,
  Form,
  Space,
} from '@arco-design/web-react'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-job-full-name"
          >
            Full name
          </label>
          <Input
            id="nocss-job-full-name"
            name="fullName"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-job-email"
          >
            Email address
          </label>
          <Input
            id="nocss-job-email"
            name="email"
            type="email"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-job-phone"
          >
            Phone number
          </label>
          <Input
            id="nocss-job-phone"
            name="phone"
            type="tel"
            pattern="[+0-9\s-]{7,20}"
            inputMode="tel"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-job-role"
          >
            Role applied for
          </label>
          <Input
            id="nocss-job-role"
            name="role"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-job-resume"
          >
            Resume link
          </label>
          <Input
            id="nocss-job-resume"
            name="resume"
            type="url"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-job-cover-letter"
          >
            Cover letter
          </label>
          <Input.TextArea
            id="nocss-job-cover-letter"
            name="coverLetter"
            rows="4"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>
            <Checkbox name="updates">
              Keep me informed about future roles
            </Checkbox>
          </label>
        </div>
        <Button type="primary" htmlType="submit">
          Submit application
        </Button>
      </Space>
    </form>
  )
}

export default JobApplicationForm
