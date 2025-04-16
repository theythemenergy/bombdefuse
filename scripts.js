// Getting references to the elements
const explosion = document.getElementById('explosion');
const trophy = document.getElementById('trophy');
const secretButton = document.getElementById('secret-button');
const chatInterface = document.getElementById('chat-interface');

// Game Logic for Bomb Defuse
document.getElementById('yellow').onclick = () => {
    triggerExplosion(); // Wrong wire (Yellow)
};

document.getElementById('blue').onclick = () => {
    triggerTrophy(); // Correct wire (Blue)
};

document.getElementById('red').onclick = () => {
    triggerExplosion(); // Wrong wire (Red)
};

// Trigger Explosion Function
function triggerExplosion() {
    explosion.style.display = 'block'; // Show explosion
    setTimeout(() => {
        alert("Boom! You picked the wrong wire. Game Over.");
        location.reload(); // Reload the page after a short delay
    }, 2000); // Wait 2 seconds before reloading
}

// Trigger Trophy Function
function triggerTrophy() {
    trophy.style.display = 'block'; // Show trophy
    setTimeout(() => {
        alert("You won! Great job!");
        location.reload(); // Reload the page after a short delay
    }, 2000); // Wait 2 seconds before reloading
}

// Secret Button Logic
secretButton.onclick = () => {
    chatInterface.style.display = 'block'; // Show the chat interface
};

// Chat Interface Logic (for the simulated Discord-like page)
document.getElementById('signin-btn').onclick = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert("Signed in successfully!");
        // You can redirect to a chat room or dashboard here if needed
        // For now, just show a simple message
        chatInterface.innerHTML = `<h2>Welcome, ${username}!</h2><p>You are now logged into the chat.</p>`;
    } else {
        alert("Please enter both a username and password.");
    }
};
