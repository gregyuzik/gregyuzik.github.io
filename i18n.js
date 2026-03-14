/**
 * Klosyt Website — Internationalization Engine
 * Lightweight JSON-based i18n with browser language detection.
 */
(function () {
    'use strict';

    const SUPPORTED_LOCALES = [
        'en', 'zh-Hans', 'zh-Hant', 'da', 'nl', 'fr', 'de',
        'it', 'ja', 'ko', 'nb', 'pt-BR', 'es', 'sv', 'tr', 'vi'
    ];

    const LOCALE_LABELS = {
        'en': 'English',
        'zh-Hans': '简体中文',
        'zh-Hant': '繁體中文',
        'da': 'Dansk',
        'nl': 'Nederlands',
        'fr': 'Français',
        'de': 'Deutsch',
        'it': 'Italiano',
        'ja': '日本語',
        'ko': '한국어',
        'nb': 'Norsk',
        'pt-BR': 'Português (BR)',
        'es': 'Español',
        'sv': 'Svenska',
        'tr': 'Türkçe',
        'vi': 'Tiếng Việt'
    };

    const STORAGE_KEY = 'klosyt_lang';
    let currentTranslations = {};
    let fallbackTranslations = {};

    /* ───── Language detection ───── */

    function detectLanguage() {
        // 1. User's explicit choice
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED_LOCALES.includes(saved)) return saved;

        // 2. Browser language
        const browserLangs = navigator.languages || [navigator.language || 'en'];
        for (const lang of browserLangs) {
            // Exact match first
            if (SUPPORTED_LOCALES.includes(lang)) return lang;
            // Map common variants
            if (lang.startsWith('zh')) {
                if (lang.includes('TW') || lang.includes('HK') || lang.includes('Hant')) return 'zh-Hant';
                return 'zh-Hans';
            }
            if (lang.startsWith('pt') && lang.includes('BR')) return 'pt-BR';
            if (lang.startsWith('nb') || lang.startsWith('no')) return 'nb';
            // Base language match
            const base = lang.split('-')[0];
            if (SUPPORTED_LOCALES.includes(base)) return base;
        }
        return 'en';
    }

    /* ───── Translation loading ───── */

    async function loadTranslations(locale) {
        try {
            const resp = await fetch(`locales/${locale}.json`);
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            return await resp.json();
        } catch (e) {
            console.warn(`[i18n] Failed to load ${locale}, falling back to en`, e);
            if (locale !== 'en') {
                const resp = await fetch('locales/en.json');
                return await resp.json();
            }
            return {};
        }
    }

    /* ───── DOM translation ───── */

    function getNestedValue(obj, path) {
        return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedValue(currentTranslations, key)
                || getNestedValue(fallbackTranslations, key);
            if (value !== null) {
                el.innerHTML = value;
            }
        });

        // Also translate placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const value = getNestedValue(currentTranslations, key)
                || getNestedValue(fallbackTranslations, key);
            if (value !== null) {
                el.placeholder = value;
            }
        });

        // Update <html lang="...">
        const langCode = localStorage.getItem(STORAGE_KEY) || 'en';
        document.documentElement.lang = langCode;

        // Update language switcher label
        const langLabel = document.getElementById('lang-label');
        if (langLabel) {
            langLabel.textContent = LOCALE_LABELS[langCode] || langCode;
        }

        // Mark the active item in the dropdown
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === langCode);
        });

        // Show/hide AI translation notice for non-English languages
        document.querySelectorAll('[data-i18n-visible="non-en"]').forEach(el => {
            el.style.display = langCode === 'en' ? 'none' : 'flex';
        });
    }

    /* ───── Public API ───── */

    async function setLanguage(locale) {
        if (!SUPPORTED_LOCALES.includes(locale)) locale = 'en';
        localStorage.setItem(STORAGE_KEY, locale);

        currentTranslations = await loadTranslations(locale);
        applyTranslations();
    }

    /* ───── Language switcher dropdown ───── */

    function buildLanguageSwitcher() {
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'lang-switcher';

        const btn = document.createElement('a');
        btn.href = 'javascript:void(0)';
        btn.className = 'lang-btn';
        btn.title = 'Change language';
        btn.innerHTML = `<span class="lang-icon">🌐</span><span id="lang-label" class="lang-label-text"></span>`;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            wrapper.classList.toggle('open');
        });

        const dropdown = document.createElement('div');
        dropdown.className = 'lang-dropdown';

        for (const locale of SUPPORTED_LOCALES) {
            const item = document.createElement('button');
            item.className = 'lang-option';
            item.dataset.lang = locale;
            item.textContent = LOCALE_LABELS[locale];
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                setLanguage(locale);
                wrapper.classList.remove('open');
            });
            dropdown.appendChild(item);
        }

        wrapper.appendChild(btn);
        wrapper.appendChild(dropdown);
        navLinks.appendChild(wrapper);

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            wrapper.classList.remove('open');
        });
    }

    /* ───── Init ───── */

    async function init() {
        // Always load English as fallback
        fallbackTranslations = await loadTranslations('en');

        const lang = detectLanguage();
        localStorage.setItem(STORAGE_KEY, lang);

        if (lang !== 'en') {
            currentTranslations = await loadTranslations(lang);
        } else {
            currentTranslations = fallbackTranslations;
        }

        buildLanguageSwitcher();
        applyTranslations();
    }

    // Expose globally
    window.klosytI18n = { setLanguage, detectLanguage };

    // Run after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
