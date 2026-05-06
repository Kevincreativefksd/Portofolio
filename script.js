// Simple interaction (optional)

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Fitur ini bisa kamu hubungkan ke WhatsApp / form nanti 🚀");
    });
  });
});