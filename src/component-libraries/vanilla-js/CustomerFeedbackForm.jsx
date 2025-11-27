function CustomerFeedbackForm() {
  return (
    <form>
      <div>
        <label htmlFor="feedback-name">Name</label>
        <input id="feedback-name" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="feedback-email">Email address</label>
        <input id="feedback-email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="feedback-rating">Overall rating</label>
        <select id="feedback-rating" name="rating">
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div>
        <label htmlFor="feedback-comments">Comments</label>
        <textarea id="feedback-comments" name="comments" rows="4" />
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
