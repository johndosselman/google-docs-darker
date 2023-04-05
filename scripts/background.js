debugger;

const canvas = document.querySelector("canvas");
const canvasWrapper = document.createElement("div");
canvasWrapper.style.transition = "all 200ms ease-in-out";
canvasWrapper.classList.add("canvas-wrapper");
canvas.parentNode.insertBefore(canvasWrapper, canvas);
canvasWrapper.appendChild(canvas);

function enableDarkMode() {
  canvasWrapper.style.filter = "invert(100%) hue-rotate(180deg)";
}

function disableDarkMode() {
  canvasWrapper.style.filter = "";
}

chrome.storage.sync.get("options", (data) => {
  if (data.options.darkEnabled) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

chrome.storage.onChanged.addListener((changes) => {
  console.log(changes);
  const enabled = Boolean(changes.options.newValue.darkEnabled);
  if (enabled) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
