function SupportTicketForm() {
  return (
    <form>
      <div>
        <label htmlFor="ticket-subject">Subject</label>
        <input id="ticket-subject" name="subject" type="text" />
      </div>
      <div>
        <label htmlFor="ticket-priority">Priority</label>
        <select id="ticket-priority" name="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label htmlFor="ticket-description">Issue description</label>
        <textarea id="ticket-description" name="description" rows="4" />
      </div>
      <div>
        <label htmlFor="ticket-attachments">Attachments</label>
        <input id="ticket-attachments" name="attachments" type="file" multiple />
      </div>
      <button type="submit">Submit ticket</button>
    </form>
  )
}

export default SupportTicketForm
