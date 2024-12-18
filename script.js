document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Display a success message (for demo purposes)
  alert(
    `Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`
  );

  // Clear the form
  document.getElementById("contactForm").reset();
});
