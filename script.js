const socket = io(); // No need for full URL if running on the same server

// Send Message
document.getElementById("sendButton").addEventListener("click", () => {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value.trim();
  
  if (message !== "") {
    socket.emit("chatMessage", message);
    messageInput.value = ""; // Clear input after sending
  }
});

// Receive Message
socket.on("chatMessage", (message) => {
  const chatBox = document.getElementById("chat-box");
  const msgElement = document.createElement("p");
  msgElement.textContent = message;
  chatBox.appendChild(msgElement);

  // Auto-scroll to the latest message
  chatBox.scrollTop = chatBox.scrollHeight;
});
