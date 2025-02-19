function removeElements() {
  chrome.storage.sync.get(['removeButtons', 'removeElements'], (result) => {
    if (result.removeButtons !== false) {
      const localizedSearchButtons = [
        "Szukaj w Google",  // Polish
        "Szczęśliwy traf",  // Polish
        "Google Search",    // English
        "I'm Feeling Lucky", // English
        "Buscar con Google", // Spanish
        "Voy a tener suerte", // Spanish
        "Recherche Google", // French
        "J'ai de la chance", // French
        "Google-Suche",      // German
        "Auf gut Glück",     // German
        "Пошук Google",      // Ukrainian
        "Мені пощастить",    // Ukrainian
        "Поиск в Google",    // Russian
        "Мне повезёт"        // Russian
      ];

      document.querySelectorAll("input[type='submit']").forEach(el => {
        if (localizedSearchButtons.includes(el.value.trim())) {
          animateAndRemove(el);
        }
      });
    }

    if (result.removeElements !== false) {
      const selectorsToRemove = [
        "a[href*='about']", 
        "a[href*='store']",
        "#fbar",
        "footer",
        "div[role='contentinfo']",
        "a[href*='mail']",    
        "a[href*='imghp']",    
        "[aria-label='Aplikacje Google']",  // Polish
        "[aria-label='Google Apps']",       // English
        "[aria-label='Aplicaciones de Google']", // Spanish
        "[aria-label='Applications Google']", // French
        "[aria-label='Google Apps']", // German
        "[aria-label='Додатки Google']", // Ukrainian
        "[aria-label='Приложения Google']", // Russian
        "[jsname='VlcLAe']",
        ".xtSCL",
        ".VfL2Y",
        ".BKRPef",
        ".Umvnrc", // Keyboard
        ".XDyW0e" // Microphone
      ];

      selectorsToRemove.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          animateAndRemove(el);
        });
      });
    }
  });
}

// Function to apply animation before removal
function animateAndRemove(el) {
  el.style.transition = "all 1s";
  el.style.opacity = "0";
  el.style.transform = "translateY(-10px) scale(0.6)";
  el.style.filter = "blur(15px)";
  setTimeout(() => el.remove(), 700);
}

function getBackgroundColor() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "#303134" : "#ffffff";
}

function styleSearchBox() {
  chrome.storage.sync.get(['styleSearchBox'], (result) => {
    if (result.styleSearchBox !== false) {
      const searchBoxContainer = document.querySelector(".RNNXgb");
      if (searchBoxContainer) {
        searchBoxContainer.style.transition = "all 0.3s ease-in-out"; 
        searchBoxContainer.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.3)"; 
        searchBoxContainer.style.borderRadius = "12px"; 
        searchBoxContainer.style.backgroundColor = getBackgroundColor(); 

        searchBoxContainer.addEventListener("focusin", () => {
          searchBoxContainer.style.transform = "scale(1.05)";
        });
        
        searchBoxContainer.addEventListener("focusout", () => {
          searchBoxContainer.style.transform = "scale(1)";
        });
      }
    }
  });
}

function searchBoxContainerIcon() {
  chrome.storage.sync.get(['styleSearchBoxIcon'], (result) => {
    if (result.styleSearchBoxIcon !== false) {
      const searchBoxContainerIcon = document.querySelector(".QCzoEc.z1asCe.MZy1Rb");
      if (searchBoxContainerIcon) {
        searchBoxContainerIcon.style.transition = "all 0.3s ease-in-out"; 
        searchBoxContainerIcon.style.height = "30px";
        searchBoxContainerIcon.style.width = "30px";

        const svg = searchBoxContainerIcon.querySelector("svg");
        if (svg) updateIconColor(svg);

        searchBoxContainerIcon.addEventListener("mouseenter", () => {
          searchBoxContainerIcon.style.transform = "scale(1.2)";
          searchBoxContainerIcon.style.filter = "brightness(1.5)";
        });

        searchBoxContainerIcon.addEventListener("mouseleave", () => {
          searchBoxContainerIcon.style.transform = "scale(1)";
          searchBoxContainerIcon.style.filter = "brightness(1)";
        });

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
          if (svg) updateIconColor(svg);
        });
      }
    }
  });
}

function updateIconColor(svg) {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  svg.style.transition = "fill 0.5s ease-in-out";
  svg.style.fill = isDarkMode ? "#ffffff" : "#000000";
}

function styleDropdownBox() {
  chrome.storage.sync.get(['styleDropdownBox'], (result) => {
    if (result.styleDropdownBox !== false) {
      const dropdownBox = document.querySelector(".aajZCb");
      if (dropdownBox) {
        dropdownBox.style.transition = "all 0.6s";
        dropdownBox.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.3)";
        dropdownBox.style.borderRadius = "12px"; 
        dropdownBox.style.backgroundColor = getBackgroundColor();
        dropdownBox.style.transform = "translateY(38px) scale(1.07)";
        dropdownBox.style.paddingTop = "12px";

        setTimeout(() => {
          dropdownBox.style.transform = "translateY(28px) scale(1.05)";
        }, 300);
      }
    }
  });
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", styleSearchBox);
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", styleDropdownBox);

document.addEventListener("DOMContentLoaded", () => {
  removeElements();
  styleSearchBox();
  styleDropdownBox();
  searchBoxContainerIcon();
});

const observer = new MutationObserver(() => {
  removeElements();
  styleSearchBox();
  styleDropdownBox();
  searchBoxContainerIcon();
});
observer.observe(document.body, { childList: true, subtree: true });