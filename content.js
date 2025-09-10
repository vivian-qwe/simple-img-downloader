let hoveredImageSrc = null;
let hoveredImageElement = null;

document.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "IMG") {
    hoveredImageSrc = e.target.src;
    hoveredImageElement = e.target;
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "IMG") {
    hoveredImageSrc = null;
    hoveredImageElement = null;
  }
});

document.addEventListener("keydown", (e) => {
  if (
    e.ctrlKey &&
    (e.key === "x" || e.key === "X") &&
    hoveredImageSrc &&
    hoveredImageElement
  ) {
    e.preventDefault();
    if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
      chrome.runtime.sendMessage({
        action: "downloadImage",
        url: hoveredImageSrc,
      });
      showDownloadOverlay(hoveredImageElement);
    }
  }
});

function showDownloadOverlay(imageElement) {
  const rect = imageElement.getBoundingClientRect();
  const overlay = document.createElement("div");
  overlay.textContent = "Downloading";
  overlay.style.position = "absolute";
  overlay.style.top = `${rect.top + window.scrollY}px`;
  overlay.style.left = `${rect.left + window.scrollX}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.color = "white";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.fontSize = "14px";
  overlay.style.fontWeight = "bold";
  overlay.style.zIndex = "9999";
  overlay.style.pointerEvents = "none";
  overlay.style.opacity = "1";
  overlay.style.transition = "opacity 0.3s ease-out";

  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 200);
  }, 300);
}
