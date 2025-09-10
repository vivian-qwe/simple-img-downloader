chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "quick-download-image",
    title: "Quick download image",
    contexts: ["image"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== "quick-download-image") return;
  const src = info.srcUrl;
  if (!src) return;

  let filename = "image";
  try {
    const u = new URL(src);
    const path = u.pathname.split("/").pop();
    if (path) filename = path;
  } catch (e) {
    // leave fallback name for data/blob or invalid urls
  }

  if (!/\.[a-zA-Z0-9]{1,6}$/.test(filename)) {
    filename += ".jpg";
  }

  chrome.downloads.download(
    {
      url: src,
      filename: filename,
      conflictAction: "uniquify",
      saveAs: false,
    },
    () => {
      //silent
    }
  );
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "downloadImage") {
    const src = message.src || message.url;
    if (!src) return;

    let filename = "image";
    try {
      const u = new URL(src);
      const path = u.pathname.split("/").pop();
      if (path) filename = path;
    } catch (e) {
      // silent fallback
    }

    if (!/\.[a-zA-Z0-9]{1,6}$/.test(filename)) {
      filename += ".jpg";
    }

    chrome.downloads.download(
      {
        url: src,
        filename: filename,
        conflictAction: "uniquify",
        saveAs: false,
      },
      () => {
        // silent
      }
    );
  }
});
