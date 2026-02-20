// Wallpaper themes — names and emojis match the app exactly
const themes = [
    { asset: 'wallpaper_blue.jpg', name: 'Blue Velvet', emoji: '🔵' },
    { asset: 'wallpaper_red.jpg', name: 'Red Leather', emoji: '🔴' },
    { asset: 'wallpaper_orange.jpg', name: 'Orange Leopard', emoji: '🟠' },
    { asset: 'wallpaper_yellow.jpg', name: 'Yellow Plaid', emoji: '🟡' },
    { asset: 'wallpaper_green.jpg', name: 'Green Canvas', emoji: '🟢' },
    { asset: 'wallpaper_purple.jpg', name: 'Purple Cashmere', emoji: '🟣' },
    { asset: 'wallpaper_pink.jpg', name: 'Pink Mohair', emoji: '💗' },
    { asset: 'wallpaper_white.jpg', name: 'White Knit', emoji: '⚪' },
    { asset: 'wallpaper_gray.jpg', name: 'Gray Houndstooth', emoji: '🩶' },
    { asset: 'wallpaper_snakeskin.jpg', name: 'Snakeskin', emoji: '🐍' },
    { asset: 'wallpaper_alligator.jpg', name: 'Alligator', emoji: '🐊' },
    { asset: 'wallpaper_mink.jpg', name: 'Mink', emoji: '🐻' }
];

function getCurrentWallpaper() {
    return localStorage.getItem('klosyt_wallpaper') || 'wallpaper_blue.jpg';
}

function getThemeName(asset) {
    const t = themes.find(t => t.asset === asset);
    return t ? `${t.emoji} <span class="theme-name-text">${t.name}</span>` : '🎨';
}

function setWallpaper(asset) {
    const bg = document.querySelector('.hero-background');
    if (!bg) return;
    const img = new Image();
    img.onload = () => {
        bg.style.transition = 'opacity 0.4s ease';
        bg.style.opacity = '0.3';
        setTimeout(() => {
            bg.style.backgroundImage = `url('assets/${asset}')`;
            bg.style.opacity = '1';
        }, 400);
    };
    img.src = `assets/${asset}`;
    // Persist wallpaper asset name
    localStorage.setItem('klosyt_wallpaper', asset);
    sessionStorage.setItem('klosyt_wallpaper', asset);
    // Sync the inline-script theme key (short name, e.g. 'blue' from 'wallpaper_blue.jpg')
    const shortName = asset.replace('wallpaper_', '').replace('.jpg', '');
    localStorage.setItem('klosyt_theme', shortName);
    sessionStorage.setItem('klosyt_theme', shortName);
    // Update CSS variable so it stays in sync
    document.documentElement.style.setProperty('--current-wallpaper', `url('assets/${asset}')`);
    // Update theme pill text
    const pill = document.getElementById('theme-pill');
    if (pill) pill.innerHTML = getThemeName(asset);
}

function rotateWallpaper() {
    const current = getCurrentWallpaper();
    const currentIndex = themes.findIndex(t => t.asset === current);
    const nextIndex = (currentIndex + 1) % themes.length;
    setWallpaper(themes[nextIndex].asset);
}

document.addEventListener('DOMContentLoaded', () => {
    // Restore user's saved theme (localStorage persists across visits),
    // fall back to session choice, then default to Blue Velvet
    const wp = localStorage.getItem('klosyt_wallpaper')
        || sessionStorage.getItem('klosyt_wallpaper')
        || 'wallpaper_blue.jpg';
    document.querySelector('.hero-background').style.backgroundImage = `url('assets/${wp}')`;
    sessionStorage.setItem('klosyt_wallpaper', wp);
    localStorage.setItem('klosyt_wallpaper', wp);
    // Keep klosyt_theme in sync with wallpaper asset
    const shortName = wp.replace('wallpaper_', '').replace('.jpg', '');
    localStorage.setItem('klosyt_theme', shortName);
    sessionStorage.setItem('klosyt_theme', shortName);
    // Set initial theme pill text
    const pill = document.getElementById('theme-pill');
    if (pill) pill.innerHTML = getThemeName(wp);

    // Dynamic App Icon update
    const currentTheme = localStorage.getItem('klosyt_theme') || 'blue';
    const appIcons = document.querySelectorAll('.dynamic-app-icon');
    appIcons.forEach(icon => {
        icon.src = `assets/AppIcon_${currentTheme}.png`;
    });

    const glassPanel = document.querySelector('.glass-panel');
    const container = document.querySelector('.placeholder-container');

    // 3D Tilt Effect on mousemove (only if elements exist)
    if (glassPanel && container) {
        container.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

            glassPanel.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Reset tilt on mouseleave
        container.addEventListener('mouseleave', () => {
            glassPanel.style.transition = 'transform 0.5s ease';
            glassPanel.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0)`;

            // Remove the transition after it completes so mousemove is responsive again
            setTimeout(() => {
                glassPanel.style.transition = 'transform 0.1s ease-out';
            }, 500);
        });
    }

    // Check if form exists before adding listener (it might be removed on some pages)
    const form = document.querySelector('.notify-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submit logic here if needed
        });
    }

    // Quick Snappy Scroll Animations (Intersection Observer)
    const animateElements = document.querySelectorAll('.feature-card, .cta-section .glass-panel, .section-title, .slide-up-element, .display-title:not(.hero-section .display-title), .subtitle:not(.hero-section .subtitle), .glass-panel:not(.hero-section .glass-panel)');

    // Add initial state class to elements
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Trigger slightly before the bottom
        threshold: 0
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ensure inline delay is respected if present
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Unobserve after animating once to keep it snappy and permanent
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing
    animateElements.forEach(el => scrollObserver.observe(el));

    // Subtle parallax scroll for floating clothes — middle-layer 3D depth
    const floatingClothes = document.getElementById('floating-clothes');
    if (floatingClothes) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Parallax scroll — items drift up continuously as page scrolls
                    const offset = window.scrollY * 0.35;
                    floatingClothes.style.transform = `translateY(${-offset}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }
});
