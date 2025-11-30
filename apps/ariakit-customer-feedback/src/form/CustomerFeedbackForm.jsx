import * as Ariakit from '@ariakit/react'

function CustomerFeedbackForm() {
  const followUpCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-feedback-name" className="label">
          Name
        </label>
        <input
          id="ariakit-feedback-name"
          name="name"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-feedback-email" className="label">
          Email address
        </label>
        <input
          id="ariakit-feedback-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-feedback-rating" className="label">
          Overall rating
        </label>
        <select
          id="ariakit-feedback-rating"
          name="rating"
          className="select"
          required
        >
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-feedback-comments" className="label">
          Comments
        </label>
        <textarea
          id="ariakit-feedback-comments"
          name="comments"
          rows="4"
          className="textarea"
          required
        />
      </div>
      <label className="checkbox-wrapper">
        <Ariakit.Checkbox
          store={followUpCheckbox}
          name="followUp"
          className="checkbox"
        >
          <Ariakit.CheckboxCheck className="checkbox-check" />
        </Ariakit.Checkbox>
        <span className="checkbox-label">I would like a follow-up</span>
      </label>
      <Ariakit.Button type="submit" className="button button-primary">
        Send feedback
      </Ariakit.Button>
    </form>
  )
}

export default CustomerFeedbackForm
