// Theme definitions — match the app exactly
var themes = [
    { asset: 'wallpaper_blue.jpg', name: 'Blue Velvet', emoji: '🔵', icon: 'AppIcon-blue.png', hue: '220' },
    { asset: 'wallpaper_red.jpg', name: 'Red Leather', emoji: '🔴', icon: 'AppIcon-red.png', hue: '0' },
    { asset: 'wallpaper_orange.jpg', name: 'Orange Leopard', emoji: '🟠', icon: 'AppIcon-orange.png', hue: '30' },
    { asset: 'wallpaper_yellow.jpg', name: 'Yellow Plaid', emoji: '🟡', icon: 'AppIcon-yellow.png', hue: '48' },
    { asset: 'wallpaper_green.jpg', name: 'Green Canvas', emoji: '🟢', icon: 'AppIcon-green.png', hue: '140' },
    { asset: 'wallpaper_purple.jpg', name: 'Purple Cashmere', emoji: '🟣', icon: 'AppIcon-purple.png', hue: '270' },
    { asset: 'wallpaper_pink.jpg', name: 'Pink Mohair', emoji: '💗', icon: 'AppIcon-pink.png', hue: '330' },
    { asset: 'wallpaper_white.jpg', name: 'White Knit', emoji: '⚪', icon: 'AppIcon-white.png', hue: '0' },
    { asset: 'wallpaper_gray.jpg', name: 'Gray Houndstooth', emoji: '🩶', icon: 'AppIcon-gray.png', hue: '0' }
];

function getTheme(asset) {
    return themes.find(function(t) { return t.asset === asset; }) || themes[0];
}

function getCurrentWallpaper() {
    return localStorage.getItem('klosyt_wallpaper') || 'wallpaper_blue.jpg';
}

function updateIcons(iconFile) {
    var path = 'assets/' + iconFile;
    document.querySelectorAll('.dynamic-app-icon').forEach(function(img) { img.src = path; });
    var fav = document.querySelector('link[rel="icon"]');
    if (fav) fav.href = path;
    var touch = document.querySelector('link[rel="apple-touch-icon"]');
    if (touch) touch.href = path;
}

function updateMeshColors(theme) {
    var orbs = document.querySelectorAll('.mesh-orb');
    if (orbs.length < 3) return;
    var h = parseInt(theme.hue, 10);

    // Special cases for achromatic themes
    if (theme.asset === 'wallpaper_white.jpg') {
        orbs[0].style.background = 'radial-gradient(circle, rgba(180,180,200,.6) 0%, transparent 70%)';
        orbs[1].style.background = 'radial-gradient(circle, rgba(160,170,190,.5) 0%, transparent 70%)';
        orbs[2].style.background = 'radial-gradient(circle, rgba(170,180,200,.4) 0%, transparent 70%)';
        return;
    }
    if (theme.asset === 'wallpaper_gray.jpg') {
        orbs[0].style.background = 'radial-gradient(circle, rgba(100,100,120,.6) 0%, transparent 70%)';
        orbs[1].style.background = 'radial-gradient(circle, rgba(80,80,100,.5) 0%, transparent 70%)';
        orbs[2].style.background = 'radial-gradient(circle, rgba(90,90,110,.4) 0%, transparent 70%)';
        return;
    }

    orbs[0].style.background = 'radial-gradient(circle, hsl(' + h + ',55%,35%) 0%, transparent 70%)';
    orbs[1].style.background = 'radial-gradient(circle, hsl(' + ((h + 40) % 360) + ',50%,30%) 0%, transparent 70%)';
    orbs[2].style.background = 'radial-gradient(circle, hsl(' + ((h - 30 + 360) % 360) + ',45%,32%) 0%, transparent 70%)';
}

function setTheme(asset) {
    var theme = getTheme(asset);
    localStorage.setItem('klosyt_wallpaper', asset);
    localStorage.setItem('klosyt_wallpaper_manual', 'true');
    var short = asset.replace('wallpaper_', '').replace('.jpg', '');
    localStorage.setItem('klosyt_theme', short);

    updateIcons(theme.icon);
    updateMeshColors(theme);

    var pill = document.getElementById('theme-pill');
    if (pill) pill.innerHTML = theme.emoji + ' <span class="theme-name-text">' + theme.name + '</span>';
}

function buildThemeDropdown() {
    var switcher = document.getElementById('theme-switcher');
    var btn = document.getElementById('theme-btn');
    var dropdown = document.getElementById('theme-dropdown');
    if (!switcher || !btn || !dropdown) return;

    var current = getCurrentWallpaper();

    themes.forEach(function(t) {
        var opt = document.createElement('button');
        opt.className = 'theme-option';
        if (t.asset === current) opt.classList.add('active');
        opt.textContent = t.emoji + ' ' + t.name;
        opt.addEventListener('click', function(e) {
            e.stopPropagation();
            setTheme(t.asset);
            dropdown.querySelectorAll('.theme-option').forEach(function(o) { o.classList.remove('active'); });
            opt.classList.add('active');
            switcher.classList.remove('open');
        });
        dropdown.appendChild(opt);
    });

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        switcher.classList.toggle('open');
    });

    document.addEventListener('click', function() {
        switcher.classList.remove('open');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var wp = localStorage.getItem('klosyt_wallpaper_manual') === 'true'
        ? (localStorage.getItem('klosyt_wallpaper') || 'wallpaper_blue.jpg')
        : 'wallpaper_blue.jpg';

    var theme = getTheme(wp);
    updateIcons(theme.icon);
    updateMeshColors(theme);

    var pill = document.getElementById('theme-pill');
    if (pill) pill.innerHTML = theme.emoji + ' <span class="theme-name-text">' + theme.name + '</span>';

    buildThemeDropdown();
});
