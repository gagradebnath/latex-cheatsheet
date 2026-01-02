/**
 * Ultimate LaTeX Cheat Sheet - JavaScript
 * Author: gagradebnath
 * Generated: January 2, 2026
 *
 * This script handles:
 * - Theme toggling (light/dark mode)
 * - Copy to clipboard functionality
 * - Smooth scrolling navigation
 * - Active section highlighting
 * - Search functionality
 */

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}

// Copy code functionality
function copyCode(button) {
    const pre = button.previousElementSibling;
    const code = pre.textContent;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#28a745';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        button.textContent = 'Error';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Smooth scroll for anchor links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Highlight current section in sidebar
function initializeSectionHighlighting() {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('#sidebar nav a');

    function highlightCurrentSection() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.background = '';
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.style.background = 'rgba(255,255,255,0.2)';
            }
        });
    }

    window.addEventListener('scroll', highlightCurrentSection);
    highlightCurrentSection(); // Initial call
}

// Search functionality
function initializeSearch() {
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.placeholder = 'Search LaTeX commands...';
    searchBox.id = 'search-box';
    searchBox.style.cssText = `
        width: 100%;
        padding: 8px;
        margin: 10px 0;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        background: var(--bg-code);
        color: var(--text-primary);
        font-size: 0.9em;
    `;

    const sidebar = document.getElementById('sidebar');
    sidebar.insertBefore(searchBox, sidebar.querySelector('nav'));

    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const allCodeBlocks = document.querySelectorAll('pre code');
        const allHeadings = document.querySelectorAll('main h2, main h3, main h4');

        // Reset previous highlights
        allCodeBlocks.forEach(block => {
            block.parentElement.style.border = '';
        });

        // Simple highlight for code blocks containing search term
        if (searchTerm) {
            allCodeBlocks.forEach(block => {
                const text = block.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    block.parentElement.style.border = '2px solid var(--accent-color)';
                }
            });
        }
    });
}

// Mobile sidebar toggle (for responsive design)
function initializeMobileSidebar() {
    // Add hamburger menu for mobile
    const hamburger = document.createElement('button');
    hamburger.id = 'hamburger-menu';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 1001;
        background: var(--accent-color);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1.2em;
    `;

    document.body.appendChild(hamburger);

    // Show hamburger on mobile
    function checkMobile() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
        } else {
            hamburger.style.display = 'none';
            document.getElementById('sidebar').classList.remove('open');
        }
    }

    window.addEventListener('resize', checkMobile);
    checkMobile();

    // Toggle sidebar
    hamburger.addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchBox = document.getElementById('search-box');
            if (searchBox) {
                searchBox.focus();
            }
        }

        // Escape to close mobile sidebar
        if (e.key === 'Escape') {
            document.getElementById('sidebar').classList.remove('open');
        }
    });
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeThemeToggle();
    initializeSmoothScroll();
    initializeSectionHighlighting();
    initializeSearch();
    initializeMobileSidebar();
    initializeKeyboardShortcuts();

    // Add loading class removal for smooth transitions
    document.body.classList.add('loaded');
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Could send to error tracking service here
});

// Service worker registration (for offline capability - future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js');
    });
}