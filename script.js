/* 1. INIZIALIZZAZIONE GOOGLE TRANSLATE */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'it', 
        includedLanguages: 'en,fr,es,de', 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // <-- La virgola qui è fondamentale!
        autoDisplay: false 
    }, 'google_translate_element');
}

/* 2. CARICAMENTO DELLO SCRIPT DI GOOGLE */
(function() {
    var gt = document.createElement('script');
    gt.type = 'text/javascript';
    gt.async = true;
    gt.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gt, s);
})();

/* 3. PULIZIA LAYOUT E CAMBIO TESTO */
document.addEventListener('DOMContentLoaded', function() {
    var observer = new MutationObserver(function(mutations) {
        // Rimuove la barra superiore
        var banner = document.querySelector('.goog-te-banner-frame');
        if (banner) banner.style.display = 'none';
        
        // Blocca il salto del sito verso il basso
        if (document.body.style.top !== '0px') {
            document.body.style.top = '0px';
        }

        // Cambia il testo del selettore in modo diretto
var gadgetText = document.querySelector('.goog-te-menu-value span:first-child');
if (gadgetText) {
    gadgetText.innerText = '🌐 LANGUAGE'; 
}
    });

    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
});
