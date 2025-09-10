# Simple Image Downloader

A lightweight Chrome extension (Manifest V3) for quickly downloading images without the "Save As" dialog.

## Features
- **Right-click download**: Right-click any image and select "Quick download image" from the context menu.
- **Hover + keybind download**: Hover over an image and press Ctrl+X to download instantly.
- **Visual feedback**: A temporary overlay appears over the image during download.
- **Stealthy**: No site interference; downloads are silent and client-side.

## Installation
1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select the project folder (`c:\INFO\stufff\simple-img-downloader`).
5. The extension should appear in your extensions list.

## Usage
- **Context menu**: Right-click an image on any webpage → Choose "Quick download image".
- **Keybind**: Hover over an image → Press Ctrl+X (or Ctrl+Shift+X).
- Images download to your default Downloads folder with auto-generated filenames.

## Requirements
- Google Chrome (or Chromium-based browser) with Manifest V3 support.
- Icon files: Replace `icons/icon48.png` and `icons/icon128.png` with your own 48x48 and 128x128 PNG icons.

## Files
- `manifest.json`: Extension configuration.
- `background.js`: Service worker for handling downloads and context menus.
- `content.js`: Content script for hover detection, keybinds, and overlay feedback.
- `icons/`: Folder for extension icons (placeholders included).

## Notes
- Ensure the extension has necessary permissions (contextMenus, downloads, <all_urls>).
- For debugging, check Chrome DevTools (page console for content.js, extension service worker for background.js).
- This extension does not violate site TOS as it only downloads publicly accessible images.

## License
MIT License (or specify your license).