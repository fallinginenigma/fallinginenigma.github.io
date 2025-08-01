// Theme toggle functionality
class ThemeToggle {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    // Set initial theme
    this.setTheme(this.theme);
    
    // Create toggle button
    this.createToggleButton();
    
    // Listen for system theme changes
    this.listenForSystemTheme();
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.theme = theme;
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    this.updateToggleIcon();
  }

  createToggleButton() {
    // Remove existing button if any
    const existingButton = document.querySelector('.theme-toggle');
    if (existingButton) {
      existingButton.remove();
    }

    // Create new button
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Toggle dark mode');
    button.setAttribute('title', 'Toggle dark mode');
    
    const icon = document.createElement('span');
    icon.className = 'theme-icon material-icons';
    icon.textContent = this.theme === 'light' ? 'dark_mode' : 'light_mode';
    
    button.appendChild(icon);
    
    // Add click event
    button.addEventListener('click', () => {
      this.toggleTheme();
    });
    
    // Try to add to header first, fallback to body
    const header = document.querySelector('.top_bar');
    if (header) {
      // Add to the top_bar header
      const headerInner = header.querySelector('.top_inner');
      if (headerInner) {
        headerInner.appendChild(button);
      } else {
        header.appendChild(button);
      }
    } else {
      // Fallback to body if no header found
      document.body.appendChild(button);
    }
  }

  updateToggleIcon() {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = this.theme === 'light' ? 'dark_mode' : 'light_mode';
    }
  }

  listenForSystemTheme() {
    // Check if user prefers dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
        this.updateToggleIcon();
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Initial check
    if (!localStorage.getItem('theme')) {
      handleChange(mediaQuery);
    }
  }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
});

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ThemeToggle();
  });
} else {
  new ThemeToggle();
} 