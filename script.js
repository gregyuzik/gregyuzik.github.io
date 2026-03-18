// Wallpaper themes — names and emojis match the app exactly
// Each theme includes its matching color app icon
const themes = [
    { asset: 'wallpaper_blue.jpg', name: 'Blue Velvet', emoji: '🔵', icon: 'AppIcon-blue.png' },
    { asset: 'wallpaper_red.jpg', name: 'Red Leather', emoji: '🔴', icon: 'AppIcon-red.png' },
    { asset: 'wallpaper_orange.jpg', name: 'Orange Leopard', emoji: '🟠', icon: 'AppIcon-orange.png' },
    { asset: 'wallpaper_yellow.jpg', name: 'Yellow Plaid', emoji: '🟡', icon: 'AppIcon-yellow.png' },
    { asset: 'wallpaper_green.jpg', name: 'Green Canvas', emoji: '🟢', icon: 'AppIcon-green.png' },
    { asset: 'wallpaper_purple.jpg', name: 'Purple Cashmere', emoji: '🟣', icon: 'AppIcon-purple.png' },
    { asset: 'wallpaper_pink.jpg', name: 'Pink Mohair', emoji: '💗', icon: 'AppIcon-pink.png' },
    { asset: 'wallpaper_white.jpg', name: 'White Knit', emoji: '⚪', icon: 'AppIcon-white.png' },
    { asset: 'wallpaper_gray.jpg', name: 'Gray Houndstooth', emoji: '🩶', icon: 'AppIcon-gray.png' }
];

function getCurrentWallpaper() {
    return localStorage.getItem('klosyt_wallpaper') || 'wallpaper_blue.jpg';
}

function getThemeName(asset) {
    const t = themes.find(t => t.asset === asset);
    return t ? `${t.emoji} <span class="theme-name-text">${t.name}</span>` : '🎨';
}

function getThemeIcon(asset) {
    const t = themes.find(t => t.asset === asset);
    return t ? t.icon : 'AppIcon-blue.png';
}

function updateIcons(iconFile) {
    const iconPath = `assets/${iconFile}`;
    document.querySelectorAll('.dynamic-app-icon').forEach(img => {
        img.src = iconPath;
    });
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) favicon.href = iconPath;
    const touchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (touchIcon) touchIcon.href = iconPath;
}

function setWallpaper(asset) {
    const bg = document.querySelector('.hero-background');
    if (!bg) return;
    const img = new Image();
    img.onload = () => {
        bg.style.transition = 'opacity 0.4s ease';
        bg.style.opacity = '0.15';
        setTimeout(() => {
            bg.style.backgroundImage = `url('assets/${asset}')`;
            bg.style.opacity = '0.4';
        }, 400);
    };
    img.src = `assets/${asset}`;
    localStorage.setItem('klosyt_wallpaper', asset);
    sessionStorage.setItem('klosyt_wallpaper', asset);
    localStorage.setItem('klosyt_wallpaper_manual', 'true');
    const shortName = asset.replace('wallpaper_', '').replace('.jpg', '');
    localStorage.setItem('klosyt_theme', shortName);
    sessionStorage.setItem('klosyt_theme', shortName);
    document.documentElement.style.setProperty('--current-wallpaper', `url('assets/${asset}')`);
    const pill = document.getElementById('theme-pill');
    if (pill) pill.innerHTML = getThemeName(asset);
    updateIcons(getThemeIcon(asset));
}

function rotateWallpaper() {
    const current = getCurrentWallpaper();
    const currentIndex = themes.findIndex(t => t.asset === current);
    const nextIndex = (currentIndex + 1) % themes.length;
    setWallpaper(themes[nextIndex].asset);
}

document.addEventListener('DOMContentLoaded', () => {
    // Default wallpaper: Blue Velvet
    const autoWallpaper = 'wallpaper_blue.jpg';
    const isManual = localStorage.getItem('klosyt_wallpaper_manual') === 'true';
    const wp = isManual
        ? (localStorage.getItem('klosyt_wallpaper') || autoWallpaper)
        : autoWallpaper;

    const bg = document.querySelector('.hero-background');
    if (bg) bg.style.backgroundImage = `url('assets/${wp}')`;
    localStorage.setItem('klosyt_wallpaper', wp);
    sessionStorage.setItem('klosyt_wallpaper', wp);
    const shortName = wp.replace('wallpaper_', '').replace('.jpg', '');
    localStorage.setItem('klosyt_theme', shortName);
    sessionStorage.setItem('klosyt_theme', shortName);
    const pill = document.getElementById('theme-pill');
    if (pill) pill.innerHTML = getThemeName(wp);
    updateIcons(getThemeIcon(wp));

    // Scroll reveal with Intersection Observer
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0
    });

    reveals.forEach(el => revealObserver.observe(el));

    // Subtle parallax scroll for floating clothes
    const floatingClothes = document.getElementById('floating-clothes');
    if (floatingClothes) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const offset = window.scrollY * 0.35;
                    floatingClothes.style.transform = `translateY(${-offset}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }
});
