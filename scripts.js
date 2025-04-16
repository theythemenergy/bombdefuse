const secretBtn = document.getElementById('secretBtn');
const gameUI = document.getElementById('game-ui');
const chatUI = document.getElementById('chat-ui');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const messages = document.getElementById('messages');

// Secret button shows chat UI
secretBtn.addEventListener('click', () => {
  gameUI.style.display = 'none';
  chatUI.style.display = 'block';
});

// Go back to game
function goBack() {
  chatUI.style.display = 'none';
  gameUI.style.display = 'block';
}

// Add message to chat
sendBtn.addEventListener('click', () => {
  const text = chatInput.value.trim();
  if (text) {
    messages.innerHTML += `<p><strong>You:</strong> ${text}</p>`;
    chatInput.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
});
