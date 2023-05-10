const contactForm = document.getElementById("formulario");
const userDiv = document.getElementById("form3Example3");
const passwordDiv = document.getElementById("form3Example4");
const errorContainer = document.getElementById("error");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!errorContainer.classList.contains("hidden")) {
    !errorContainer.classList.add("hidden");
  }
  const email = userDiv.value;
  const password = passwordDiv.value;
  const response = await fetch("http://localhost:4000/auth", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await response.json();
  if (result.error) {
    errorContainer.text = result.error;
    errorContainer.classList.remove("hidden");
  } else {
    const userId = result.id;
    localStorage.setItem('id_usuario', userId);
    window.location.href = `./profile.html?id=${userId}`;
  }
});