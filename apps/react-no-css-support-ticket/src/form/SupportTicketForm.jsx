function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-ticket-subject">Subject</label>
        <input id="nocss-ticket-subject" name="subject" type="text" required />
      </div>
      <div>
        <fieldset>
          <legend>Priority</legend>
          <div>
            <label>
              <input
                id="nocss-ticket-priority-low"
                type="radio"
                name="priority"
                value="low"
                required
              />
              Low
            </label>
          </div>
          <div>
            <label>
              <input
                id="nocss-ticket-priority-medium"
                type="radio"
                name="priority"
                value="medium"
              />
              Medium
            </label>
          </div>
          <div>
            <label>
              <input
                id="nocss-ticket-priority-high"
                type="radio"
                name="priority"
                value="high"
              />
              High
            </label>
          </div>
        </fieldset>
      </div>
      <div>
        <label htmlFor="nocss-ticket-description">Issue description</label>
        <textarea
          id="nocss-ticket-description"
          name="description"
          rows="4"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-ticket-attachments">Attachments</label>
        <input
          id="nocss-ticket-attachments"
          name="attachments"
          type="file"
          multiple
        />
      </div>
      <button type="submit">Submit ticket</button>
    </form>
  )
}

export default SupportTicketForm
