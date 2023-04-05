const divSwitch = document.getElementById("switch");
const divSlider = document.getElementById("slider");
const options = {};
const test = document.getElementById("test");

divSwitch.addEventListener("click", () => {
  options.darkEnabled = !options.darkEnabled;
  divSlider.style.transform = options.darkEnabled
    ? "translateX(var(--move-amount))"
    : "translateX(0)";
  divSwitch.style.backgroundColor = options.darkEnabled
    ? "var(--switch-active)"
    : "var(--switch-inactive)";
  chrome.storage.sync.set({ options });
  test.textContent = options.darkEnabled;
  console.log(options.darkEnabled ? "Enabled dark mode" : "Disabled dark mode");
});

chrome.storage.sync.get("options", (data) => {
  Object.assign(options, data.options);
  divSwitch.style.backgroundColor = options.darkEnabled
    ? "var(--switch-active)"
    : "var(--switch-inactive)";
  divSlider.style.transform = options.darkEnabled
    ? "translateX(var(--move-amount))"
    : "translateX(0)";
  test.textContent = options.darkEnabled;
  console.log("Loaded options");
});
