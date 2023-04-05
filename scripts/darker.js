const images = document.querySelectorAll("img");

function enableDarkMode() {
  document.body.style.transition = "200ms ease-in-out";
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

textColorButton.addEventListener("click", () => {
  const colorMenu = document.querySelector(
    ".goog-menu.goog-menu.vertical.docs-colormenuitems.docs-material.goog-menu-noaccel"
  );
  console.log(colorMenu);
  colorMenu.style.filter = "invert(100%) hue-rotate(180deg)";
});
