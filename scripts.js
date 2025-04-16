// UI Elements
const bombUI = document.getElementById('bomb-ui');
const chatUI = document.getElementById('chat-ui');
const wires = document.querySelectorAll('.wire');
const secretSwitch = document.getElementById('secret-switch');
const authSection = document.getElementById('auth-section');
const chatSection = document.getElementById('chat-section');
const messages = document.getElementById('messages');
const msgInput = document.getElementById('msgInput');

// State Tracking
let isBombDefused = false;
let currentUser = null;

// Bomb Defuse Logic
wires.forEach((wire, index) => {
  wire.addEventListener('click', () => {
    if (index === 2) {  // Yellow wire is correct
      isBombDefused = true;
      alert("You defused the bomb! Now you can access the secret chat.");
      showChatUI(); // Show chat UI if bomb is defused
    } else {
      alert("The bomb exploded! Try again.");
      resetGame(); // Reset game after bomb explosion
    }
  });
});

// Secret Switch to Transition to Chat UI
secretSwitch.addEventListener('click', () => {
  if (isBombDefused) {
    showChatUI(); // Transition to Chat UI after defusing the bomb
  } else {
    alert("You need to defuse the bomb first!");
  }
});

// Show Chat UI
function showChatUI() {
  bombUI.style.display = 'none';
  chatUI.classList.remove('hidden');
  authSection.style.display = 'block';
  chatSection.style.display = 'none';
}

// Handle Register
function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // Save user (for demo purposes, store in a simple variable)
    currentUser = { email, password };
    alert("Registered successfully!");
    authSection.style.display = 'none';
    chatSection.style.display = 'block';
  } else {
    alert("Please provide both email and password.");
  }
}

// Handle Login
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (currentUser && currentUser.email === email && currentUser.password === password) {
    alert("Logged in successfully!");
    authSection.style.display = 'none';
    chatSection.style.display = 'block';
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

// Send Message
function sendMessage() {
  const message = msgInput.value;
  if (message) {
    const newMessage = document.createElement('div');
    newMessage.textContent = `${currentUser.email}: ${message}`;
    messages.appendChild(newMessage);
    msgInput.value = ''; // Clear input field after sending
  } else {
    alert("Please enter a message!");
  }
}

// Go Back to Bomb Game
function goBack() {
  bombUI.style.display = 'block';
  chatUI.classList.add('hidden');
  resetGame(); // Reset game on going back
}

// Reset Bomb Game State
function resetGame() {
  isBombDefused = false;
  wires.forEach((wire) => wire.disabled = false);  // Enable wire buttons again
}
