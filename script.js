const candidates = document.querySelectorAll(".candidate");
const message = document.querySelector("#message");

candidates.forEach((button) => {
  button.addEventListener("click", () => {
    candidates.forEach((candidate) => {
      candidate.classList.remove("selected");
      candidate.setAttribute("aria-pressed", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");

    const choice = button.dataset.candidate;
    message.textContent = `You selected ${choice}.`;
    message.classList.add("success");
  });
});
