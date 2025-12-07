document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("status").innerText = "Message Sent ✔";
});