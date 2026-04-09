const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

// Replace this with your real endpoint from a form service such as Formspree.
const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/mykbazwy";

formStatus.hidden = true;

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    formStatus.hidden = false;
    formStatus.textContent = "Sending...";

    try {
      const formData = new FormData(contactForm);

      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      formStatus.textContent = "Thanks. Your message was sent successfully.";
      contactForm.reset();
    } catch (error) {
      formStatus.textContent = "Sorry, something went wrong. Please try again later.";
      console.error("Contact form submission failed:", error);
    }
  });
}
