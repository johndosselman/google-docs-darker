const divSwitch = document.getElementById("mode-switch");
const divSlider = document.getElementById("mode-slider");
const border = document.getElementById("wrapper");
const body = document.body;
const options = {};

function setMode() {
  if (options.darkEnabled) {
    divSlider.style.transform = "translateX(var(--move-amount))";
    divSlider.style.backgroundColor = "var(--dark)";
    divSwitch.style.backgroundColor = "var(--switch-active)";
    body.style.backgroundColor = "var(--dark)";
    body.style.color = "var(--light)";
    border.style.borderColor = "var(--light)";
  } else {
    divSlider.style.transform = "translateX(0)";
    divSlider.style.backgroundColor = "var(--light)";
    divSwitch.style.backgroundColor = "var(--switch-inactive)";
    body.style.backgroundColor = "var(--light)";
    body.style.color = "var(--dark)";
    border.style.borderColor = "var(--switch-inactive)";
  }
  chrome.storage.sync.set({ options });
}

divSwitch.addEventListener("click", () => {
  options.darkEnabled = !options.darkEnabled;
  setMode();
});

chrome.storage.sync.get("options", (data) => {
  Object.assign(options, data.options);
  setMode();
});
