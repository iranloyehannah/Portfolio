import { useState } from "react";

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
   
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center py-8 md:py-12 px-4 md:px-6">
      <h2
        className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text"
        style={{ animation: "fadeIn 0.8s ease-out" }}
      >
        Get In Touch
      </h2>

      <div className="w-full max-w-lg">
        <div
          className={`contact-card ${darkMode ? "card-dark" : "card-light"}`}
          style={{ animation: "fadeIn 0.8s ease-out" }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`form-input ${darkMode ? "input-dark" : "input-light"}`}
              placeholder="Your Name"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`form-input ${darkMode ? "input-dark" : "input-light"}`}
              placeholder="your.email@example.com"
            />

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className={`form-input form-textarea ${darkMode ? "input-dark" : "input-light"}`}
              placeholder="Your message..."
            />

            <button
              type="submit"
              className={`submit-button ${darkMode ? "button-dark" : "button-light"}`}
            >
              <span>Send</span>
              <span className="button-arrow">→</span>
            </button>
          </form>

          <div className="contact-divider">
            <span
              style={{
                color: darkMode ? "#BAE6FD" : "#075985",
                opacity: 0.5,
                fontSize: "0.75rem",
              }}
            >
              OR
            </span>
          </div>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/iranloye-hannah/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{
                color: darkMode ? "#7DD3FC" : "#0284C7",
              }}
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/iranloyehannah"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{
                color: darkMode ? "#7DD3FC" : "#0284C7",
              }}
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
