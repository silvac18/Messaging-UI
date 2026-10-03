const input = document.getElementById("messageInput");
const messages = document.querySelector(".messages");

input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        const text = input.value.trim();

        if (text === "") return;

        // Create message row
        const row = document.createElement("div");
        row.className = "message-row right";

        // Create message container
        const container = document.createElement("div");

        // Create bubble
        const bubble = document.createElement("div");
        bubble.className = "message sent";
        bubble.textContent = text;

        // Create time
        const time = document.createElement("small");

        const now = new Date();

        time.textContent = now.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit"
        });

        container.appendChild(bubble);
        container.appendChild(time);

        row.appendChild(container);

        messages.appendChild(row);

        // Clear input
        input.value = "";

        // Scroll to bottom
        messages.scrollTop = messages.scrollHeight;
    }
});