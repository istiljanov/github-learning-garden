const seedButton = document.querySelector("#seed-button");
const message = document.querySelector("#message");
let seeds = 0;

seedButton.addEventListener("click", () => {
  seeds += 1;
  message.textContent = `You have planted ${seeds} learning ${seeds === 1 ? "seed" : "seeds"}.`;
});
