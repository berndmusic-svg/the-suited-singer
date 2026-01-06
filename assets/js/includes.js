// Includes.js - Central header and footer injection system
// Loads partials/header.html and partials/footer.html and injects them into page

(function() {
    'use strict';

    // Configuration
    const config = {
        headerElementId: 'site-header',
        footerElementId: 'site-footer',
        headerPath: '/partials/header.html',
        footerPath: '/partials/footer.html'
    };

    /**
     * Fetch and inject a partial HTML file
     */
    async function loadPartial(elementId, path) {
        try {
            const element = document.getElementById(elementId);
            if (!element) return; // Element doesn't exist on this page

            const response = await fetch(path);
            if (!response.ok) {
                console.error(`Failed to load ${path}:`, response.status);
                return;
            }

            const html = await response.text();
            element.innerHTML = html;

            // After injection, initialize event listeners
            if (elementId === config.headerElementId) {
                initializeNavigation();
            }
        } catch (error) {
            console.error(`Error loading ${path}:`, error);
        }
    }

    /**
     * Initialize navigation active states and dropdown menus
     */
    function initializeNavigation() {
        // Set active states based on current pathname
        setActiveNavLink();
        
        // Mobile menu toggle
        setupMobileMenu();
        
        // Mobile dropdowns
        setupMobileDropdowns();
        
        // Close dropdowns when clicking outside
        setupOutsideClickHandler();
    }

    /**
     * Mark the current page link as active
     */
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;
        
        // Get all nav links
        const navLinks = document.querySelectorAll('.nav-link[data-nav]');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href') || '';
            const dataNav = link.getAttribute('data-nav');
            
            let isActive = false;
            
            // Check if this is the current page
            if (dataNav === 'home') {
                isActive = currentPath === '/' || currentPath === '/index.html';
            } else if (dataNav === 'contact') {
                isActive = (currentPath === '/' || currentPath === '/index.html') && currentHash === '#contact';
            } else if (href.includes(currentPath) || (currentPath.includes(href.replace(/\//g, '')))) {
                isActive = true;
            }
            
            // Apply active styling
            if (isActive) {
                link.classList.add('text-ts-gold', 'font-semibold');
                link.classList.remove('text-white');
            }
        });
    }

    /**
     * Setup mobile menu toggle (hamburger)
     */
    function setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (!mobileMenuBtn || !mobileMenu) return;
        
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                // Smoothly expand menu
                const height = mobileMenu.scrollHeight;
                mobileMenu.style.maxHeight = height + 'px';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.maxHeight = '0';
            }
        });
    }

    /**
     * Setup mobile dropdown toggles
     */
    function setupMobileDropdowns() {
        // Events dropdown
        const mobileEventsToggle = document.getElementById('mobileEventsToggle');
        const mobileEventsMenu = document.getElementById('mobileEventsMenu');
        
        if (mobileEventsToggle && mobileEventsMenu) {
            mobileEventsToggle.addEventListener('click', function(e) {
                e.preventDefault();
                toggleMobileDropdown(mobileEventsMenu, mobileEventsToggle);
            });
        }
        
        // Specials dropdown
        const mobileSpecialsToggle = document.getElementById('mobileSpecialsToggle');
        const mobileSpecialsMenu = document.getElementById('mobileSpecialsMenu');
        
        if (mobileSpecialsToggle && mobileSpecialsMenu) {
            mobileSpecialsToggle.addEventListener('click', function(e) {
                e.preventDefault();
                toggleMobileDropdown(mobileSpecialsMenu, mobileSpecialsToggle);
            });
        }
    }

    /**
     * Toggle a mobile dropdown menu
     */
    function toggleMobileDropdown(menu, button) {
        const isHidden = menu.classList.contains('hidden');
        
        if (isHidden) {
            menu.classList.remove('hidden');
            button.querySelector('i').classList.remove('fa-chevron-down');
            button.querySelector('i').classList.add('fa-chevron-up');
        } else {
            menu.classList.add('hidden');
            button.querySelector('i').classList.add('fa-chevron-down');
            button.querySelector('i').classList.remove('fa-chevron-up');
        }
    }

    /**
     * Close dropdowns when clicking outside
     */
    function setupOutsideClickHandler() {
        document.addEventListener('click', function(e) {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.style.maxHeight = '0';
                }
            }
        });
    }

    /**
     * Initialize on DOM ready
     */
    function init() {
        // Load header and footer partials
        Promise.all([
            loadPartial(config.headerElementId, config.headerPath),
            loadPartial(config.footerElementId, config.footerPath)
        ]);
    }

    // Start initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
