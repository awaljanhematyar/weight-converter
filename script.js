// Convert pounds to kilograms using the exact international-pound factor.
const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
function updateResult() {
  const raw = inputEl.value.trim();
  const pounds = Number(raw);
  resultEl.textContent = "";
  errorEl.textContent = "";
  inputEl.removeAttribute("aria-invalid");
  if (!raw) return;
  if (!Number.isFinite(pounds) || pounds <= 0 || !Number.isFinite(pounds * 0.45359237)) {
    errorEl.textContent = "Please enter a positive number.";
    inputEl.setAttribute("aria-invalid", "true");
    return;
  }
  resultEl.textContent = (pounds * 0.45359237).toFixed(2);
}
inputEl.addEventListener("input", updateResult);
updateResult();
