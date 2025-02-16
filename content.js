function removeElements() {
    const selectorsToRemove = [
      "a[href*='about']", 
      "a[href*='store']",
      "#fbar",
      "footer",
      "div[role='contentinfo']",
      "input[value='Szukaj w Google']",
      "input[value='Szczęśliwy traf']",
      "a[href*='mail']",    
      "a[href*='imghp']",    
      "[aria-label='Aplikacje Google']", 
    ];
  
    selectorsToRemove.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
}
  
  removeElements();
  
  const observer = new MutationObserver(() => removeElements());
  observer.observe(document.body, { childList: true, subtree: true });
  