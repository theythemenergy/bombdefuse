// Game Logic for Bomb Defuse
document.getElementById('yellow').onclick = () => {
    triggerExplosion(); // Yellow wire: Explosion
};

document.getElementById('blue').onclick = () => {
    triggerTrophy(); // Blue wire: Trophy (Correct wire)
};

document.getElementById('red').onclick = () => {
    triggerExplosion(); // Red wire: Explosion
};

// Trigger Explosion Function
function triggerExplosion() {
    document.getElementById('explosion').style.display = 'block'; // Show explosion
    setTimeout(() => {
        alert("Boom! You picked the wrong wire. Game Over.");
        location.reload(); // Reload page after 2 seconds
    }, 2000);
}

// Trigger Trophy Function
function triggerTrophy() {
    document.getElementById('trophy').style.display = 'block'; // Show trophy
    setTimeout(() => {
        alert("You won! Great job!");
        location.reload(); // Reload page after 2 seconds
    }, 2000);
}

// Secret Button Logic (Chat Interface)
document.getElementById('secret-button').onclick = () => {
    document.getElementById('chat-interface').style.display = 'block'; // Show chat interface
};

// Chat Sign-in Logic
document.getElementById('signin-btn').onclick = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert("Signed in successfully!");
        // You can redirect to a real chat room here or display a simple welcome message
        document.getElementById('chat-interface').innerHTML = `<h2>Welcome, ${username}!</h2><p>You are now logged into the chat.</p>`;
    } else {
        alert("Please enter both username and password.");
    }
};
