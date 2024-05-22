const maxMessages = 11;  // Maksymalna liczba wiadomości

document.querySelector('.message-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.querySelector('.message-input');
    const message = input.value.trim();
    if (message !== '') {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message');
        messageContainer.textContent = message;

        const messagesContainer = document.querySelector('.messages');

        if (messagesContainer.children.length >= maxMessages) {
            messagesContainer.removeChild(messagesContainer.firstChild);
        }

        messagesContainer.appendChild(messageContainer);
        input.value = '';

        // Automatyczne przewijanie do najnowszej wiadomości
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});




