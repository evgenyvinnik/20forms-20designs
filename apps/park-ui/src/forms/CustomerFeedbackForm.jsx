function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-feedback-name">Name</label>
        <input id="nocss-feedback-name" name="name" type="text" required />
      </div>
      <div>
        <label htmlFor="nocss-feedback-email">Email address</label>
        <input id="nocss-feedback-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="nocss-feedback-rating">Overall rating</label>
        <select id="nocss-feedback-rating" name="rating" required>
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div>
        <label htmlFor="nocss-feedback-comments">Comments</label>
        <textarea
          id="nocss-feedback-comments"
          name="comments"
          rows="4"
          required
        />
      </div>
      <div>
        <label>
          <input name="followUp" type="checkbox" />I would like a follow-up
        </label>
      </div>
      <button type="submit">Send feedback</button>
    </form>
  )
}

export default CustomerFeedbackForm
