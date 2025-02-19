document.addEventListener('DOMContentLoaded', () => {
  const removeButtonsCheckbox = document.getElementById('removeButtons');
  const removeElementsCheckbox = document.getElementById('removeElements');
  const styleSearchBoxCheckbox = document.getElementById('styleSearchBox');
  const styleDropdownBoxCheckbox = document.getElementById('styleDropdownBox');
  const styleSearchBoxIconCheckbox = document.getElementById('styleSearchBoxIcon');
  const saveButton = document.getElementById('save');

  // Load settings
  chrome.storage.sync.get(['removeButtons', 'removeElements', 'styleSearchBox', 'styleDropdownBox', 'styleSearchBoxIcon'], (result) => {
    removeButtonsCheckbox.checked = result.removeButtons !== false;
    removeElementsCheckbox.checked = result.removeElements !== false;
    styleSearchBoxCheckbox.checked = result.styleSearchBox !== false;
    styleDropdownBoxCheckbox.checked = result.styleDropdownBox !== false;
    styleSearchBoxIconCheckbox.checked = result.styleSearchBoxIcon !== false;
  });

  // Save settings
  saveButton.addEventListener('click', () => {
    chrome.storage.sync.set({
      removeButtons: removeButtonsCheckbox.checked,
      removeElements: removeElementsCheckbox.checked,
      styleSearchBox: styleSearchBoxCheckbox.checked,
      styleDropdownBox: styleDropdownBoxCheckbox.checked,
      styleSearchBoxIcon: styleSearchBoxIconCheckbox.checked
    }, () => {
      alert('Settings saved');
    });
  });
});