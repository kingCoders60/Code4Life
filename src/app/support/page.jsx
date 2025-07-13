import React from 'react'

const page = () => {
  return (
    <div>
    <h1>Support</h1>
    <p>
        Need help? Our support team is here for you!<br />
        Please contact us at <a href="mailto:support@example.com">support@example.com</a> or use the form below.
    </p>
    <form>
        <label>
            Your Email:
            <input type="email" name="email" required />
        </label>
        <br />
        <label>
            Message:
            <textarea name="message" required />
        </label>
        <br />
        <button type="submit">Send</button>
    </form>
    </div>
  )
}

export default page
