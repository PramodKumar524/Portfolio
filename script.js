document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Grab the values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // For now, just show a success message (you can integrate with backend later)
  if (name && email && message) {
    document.getElementById("form-alert").innerHTML = `
      <div class="alert alert-success" role="alert">
        Thank you ${name}! Your message has been sent.
      </div>
    `;

    // Clear the form
    document.getElementById("contact-form").reset();
  } else {
    document.getElementById("form-alert").innerHTML = `
      <div class="alert alert-danger" role="alert">
        Please fill in all fields.
      </div>
    `;
  }
});
