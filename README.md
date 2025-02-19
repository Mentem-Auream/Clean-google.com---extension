# clean google.com Extension
![image](https://github.com/user-attachments/assets/bbf1a0bf-dc07-4406-9d03-8a90696a83a9)


clean google.com is a Chrome extension that removes unwanted elements from Google's homepage.

## Features

- Removes elements such as:
  - "About"
  - "Google Store"
  - Footer
  - "Search in Google" and "I'm Feeling Lucky" buttons
  - "Gmail" and "Images" links
  - Google Apps button
- Works automatically when you visit Google.com

## Installation

1. Download the newest release and unzip the folder.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the unziped folder. 
5. Refresh Google to see the changes!
6. Done.

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

## Changelog

### Version 1.3 -- pre release for now

- adding settings for
 - Custom style searchbox 
 - deleting stuff on website

### Version 1.2
- Updated `manifest.json` to version `1.2`.
- Improved element removal to cover additional localized Google search buttons.
- Added animations for element removal.
- Enhanced styling for the search box and dropdown.
- Improved dark mode support.

### Version 1.1
- Updated `manifest.json` to version `1.1`.
- Added `MutationObserver` to dynamically remove elements.
- Included additional elements like "Gmail" and "Images" in removal.

### Version 1.0
- Initial release.
- Removed footer, Google Store link, and some homepage elements.

## License

This project is open-source and free to use!
