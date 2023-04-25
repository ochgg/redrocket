const loginForm = document.querySelector('#login');
loginForm.addEventListener('submit', login);

async function login(event) {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (response.ok) {
    window.location.href = '/public/home.html';
  } else {
    document.querySelector('#error-message').textContent = data.message;
  }
}
