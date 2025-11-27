function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="feedback-name" className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          id="feedback-name"
          name="name"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="feedback-email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="feedback-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="feedback-rating" className="label">
          <span className="label-text">Overall rating</span>
        </label>
        <select
          id="feedback-rating"
          name="rating"
          required
          className="select select-bordered w-full"
        >
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="feedback-comments" className="label">
          <span className="label-text">Comments</span>
        </label>
        <textarea
          id="feedback-comments"
          name="comments"
          rows="4"
          required
          className="textarea textarea-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="followUp" type="checkbox" className="checkbox" />
          <span className="label-text">I would like a follow-up</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Send feedback
      </button>
    </form>
  )
}

export default CustomerFeedbackForm
