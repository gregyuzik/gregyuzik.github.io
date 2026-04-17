(function(){
    if(!window.matchMedia)return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    if(!window.matchMedia('(hover: hover) and (pointer: fine)').matches)return;

    var targets = document.querySelectorAll('.card, .link');
    targets.forEach(function(el){
        el.addEventListener('pointermove', function(ev){
            var r = el.getBoundingClientRect();
            el.style.setProperty('--mx',(ev.clientX - r.left) + 'px');
            el.style.setProperty('--my',(ev.clientY - r.top) + 'px');
        });
    });
})();
