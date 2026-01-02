# Ultimate LaTeX Cheat Sheet

The most comprehensive LaTeX reference guide ever created - from beginner to PhD researcher.

## 🚀 Features

- **Complete Coverage**: Every LaTeX command, environment, symbol, and best practice
- **Interactive**: Dark/light mode toggle, copy-to-clipboard buttons, search functionality
- **Responsive**: Mobile-friendly design with collapsible sidebar
- **Modular Architecture**: Clean separation of concerns for easy maintenance
- **Performance Optimized**: Fast loading, efficient JavaScript, print-friendly

## 📁 Project Structure

```
latex-cheatsheet/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles (CSS variables, responsive design)
│   └── js/
│       └── scripts.js      # All JavaScript functionality
└── README.md              # This file
```

## 🏗️ Architecture Principles

### Separation of Concerns
- **HTML**: Semantic structure and content only
- **CSS**: All styling with CSS custom properties for theming
- **JavaScript**: Interactive functionality with error handling

### Modularity
- External CSS and JS files for better caching and maintainability
- CSS custom properties for consistent theming
- Modular JavaScript functions for different features

### Best Practices
- Semantic HTML5 elements
- Accessible design (ARIA labels, keyboard navigation)
- Progressive enhancement
- Mobile-first responsive design
- Print styles for documentation

## 🔧 Development

### Adding New Content
1. Add HTML content to `index.html` in the appropriate section
2. Use semantic elements (`<section>`, `<article>`, `<details>`, etc.)
3. Include copy buttons for code blocks: `<button class="copy-btn" onclick="copyCode(this)">Copy</button>`

### Styling Guidelines
- Use CSS custom properties for colors and spacing
- Follow BEM-like naming conventions
- Ensure dark mode compatibility
- Test responsive breakpoints

### JavaScript Features
- Theme toggling with localStorage persistence
- Copy-to-clipboard functionality
- Smooth scrolling navigation
- Active section highlighting
- Search functionality
- Mobile sidebar toggle
- Keyboard shortcuts (Ctrl+K for search)

## 🚀 Deployment

The project is designed to work offline. Simply open `index.html` in any modern browser.

### Web Server (Recommended)
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## 📱 Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 🎨 Customization

### Colors
Edit CSS custom properties in `assets/css/styles.css`:
```css
:root {
    --accent-color: #0066cc;
    --bg-primary: #ffffff;
    /* ... */
}
```

### Adding New Sections
1. Add navigation link in sidebar
2. Create new `<section id="new-section">` in main content
3. Update table of contents

### Extending Functionality
- Add new JavaScript modules in `assets/js/scripts.js`
- Follow the existing pattern of modular functions
- Use event delegation for dynamic content

## 📊 Performance

- **CSS**: ~15KB (minified)
- **JavaScript**: ~8KB (minified)
- **HTML**: ~500KB (content-heavy by design)
- **First Paint**: <100ms
- **Interactive**: <200ms

## 🔍 SEO & Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (when added)
- Keyboard navigation support
- Screen reader friendly
- Print-optimized styles

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes following the architecture principles
4. Test across browsers and devices
5. Submit a pull request

## 📄 License

Created by gagradebnath - January 2, 2026

## 🔗 Links

- [LaTeX Project](https://www.latex-project.org/)
- [Overleaf Documentation](https://www.overleaf.com/learn)
- [CTAN](https://ctan.org/)

---

**Version 1.0.0** - Complete LaTeX reference with 15 comprehensive sections covering everything from basic document structure to advanced features, specialized domains, and troubleshooting.