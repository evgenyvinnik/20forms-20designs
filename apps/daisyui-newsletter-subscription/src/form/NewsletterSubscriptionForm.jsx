function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-newsletter-email">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="daisyui-newsletter-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-newsletter-frequency">
          <span className="label-text">Frequency</span>
        </label>
        <select
          id="daisyui-newsletter-frequency"
          name="frequency"
          required
          className="select select-bordered w-full"
        >
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="agree" type="checkbox" className="checkbox" />
          <span className="label-text">Receive product updates</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </form>
  )
}

export default NewsletterSubscriptionForm
