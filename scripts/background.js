const images = document.querySelectorAll("img");

function enableDarkMode() {
  document.body.style.filter = "invert(100%) hue-rotate(180deg)";
  images.forEach((img) => {
    img.style.filter = "invert(100%) hue-rotate(180deg)";
  });
}

function disableDarkMode() {
  document.body.style.filter = "";
  images.forEach((img) => {
    img.style.filter = "";
  });
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
