# Google Cleaner Chrome Extension

Google Cleaner is a Chrome extension that removes unwanted elements from Google's homepage and forces light mode.

## Features

- Removes elements such as:
  - "About"
  - "Google Store"
  - Footer
  - "Search in Google" and "I'm Feeling Lucky" buttons
  - "Gmail" and "Images" links
  - Google Apps button
- Forces Google to stay in **light mode**
- Works automatically when you visit Google

## Installation

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the folder containing the extension files.
5. Refresh Google to see the changes!

## File Structure

```
Google-Cleaner/
│-- manifest.json   # Chrome extension manifest file
│-- content.js      # Script that removes elements and forces light mode
│-- icon.png        # Extension icon (optional)
│-- README.md       # Documentation
```

## Customization

If you want to add or remove elements, modify `content.js` and update the `selectorsToRemove` array.

## Troubleshooting

- If changes don’t appear, try reloading the extension in `chrome://extensions/` and refreshing Google.
- Ensure JavaScript is enabled in Chrome.

## License

This project is open-source and free to use!
