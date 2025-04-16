const bombUI = document.getElementById('bomb-ui');
const chatUI = document.getElementById('chat-ui');
const secretBtn = document.getElementById('secret-switch');

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const msgInput = document.getElementById('msgInput');
const messagesDiv = document.getElementById('messages');
const authSection = document.getElementById('auth-section');
const chatSection = document.getElementById('chat-section');

// Secret switch reveals chat
secretBtn.addEventListener('click', () => {
  bombUI.classList.add('hidden');
  chatUI.classList.remove('hidden');
});

// Go back to bomb
function goBack() {
  chatUI.classList.add('hidden');
  bombUI.classList.remove('hidden');
}

// Fake user database (for demo purposes)
let fakeUser = null;

function register() {
  const email = emailInput.value;
  const pass = passwordInput.value;
  if (email && pass) {
    fakeUser = { email, pass };
    alert("Registered!");
  } else {
    alert("Fill in both fields!");
  }
}

function login() {
  const email = emailInput.value;
  const pass = passwordInput.value;
  if (fakeUser && fakeUser.email === email && fakeUser.pass === pass) {
    authSection.classList.add('hidden');
    chatSection.classList.remove('hidden');
    alert("Logged in!");
  } else {
    alert("Wrong email or password.");
  }
}

function sendMessage() {
  const text = msgInput.value;
  if (text) {
    messagesDiv.innerHTML += `<p><strong>You:</strong> ${text}</p>`;
    msgInput.value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}
