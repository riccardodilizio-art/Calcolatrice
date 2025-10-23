// Funzionalità minima per rendere l'interfaccia utilizzabile
(function(){
    const exprEl = document.getElementById('expression');
    const resEl = document.getElementById('result');
    let expression = '';
    let lastResult = null;

    function updateScreen(){
        exprEl.textContent = expression || '\u00A0';
        resEl.textContent = expression ? formatDisplay(evalSafe(expression) ?? '0') : '0';
    }

    function formatDisplay(v){
        if (v === null) return 'Errore';
        return (''+v).replace('.',',');
    }

    function evalSafe(expr){
        try{
            // Sostituzioni per usare operatori riconoscibili
            const safe = expr.replace(/×/g,'*').replace(/÷/g,'/').replace(/,/g,'.');
            // blocco caratteri non ammessi
            if (/[^0-9+\-*/().,% ]/.test(safe)) return null;
            // valutazione
            /* eslint-disable no-eval */
            let val = eval(safe);
            if (typeof val === 'number' && !isFinite(val)) return null;
            return Number.isInteger(val) ? val : Number(val.toFixed(10));
        }catch(e){return null}
    }

    document.querySelectorAll('button.key').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            const v = btn.getAttribute('data-value');
            const a = btn.getAttribute('data-action');
            if (a === 'clear') { expression = ''; lastResult = null; updateScreen(); return; }
            if (a === 'negate'){
                // semplice gestione ±: applica al numero finale
                const m = expression.match(/([+\-*/()]|^)?(-?\d*\.?\d+)$/);
                if (m){
                    const num = m[2].replace(',', '.');
                    const neg = String(-parseFloat(num));
                    expression = expression.slice(0,m.index) + neg.replace('.',',');
                }
                updateScreen(); return;
            }
            if (a === 'percent'){
                const val = evalSafe(expression);
                if (val!==null) { expression = String(val/100).replace('.',','); }
                updateScreen(); return;
            }
            if (a === 'equals'){
                const val = evalSafe(expression);
                if (val === null){ resEl.textContent = 'Errore'; } else { resEl.textContent = formatDisplay(val); lastResult = val; expression = String(val).replace('.',','); }
                return;
            }

            // valori predefiniti
            if (v){
                // se l'ultimo risultato è stato appena mostrato e l'utente digita un numero, reset
                if (lastResult !== null && /^[0-9,.]$/.test(v) && /^[0-9,.]+$/.test(expression)){
                    expression = '';
                    lastResult = null;
                }

                // Virgola come separatore italiano (visuale), ma in expression manteniamo ',' per chiarezza
                expression += v;
                updateScreen();
            }
        });
    });

    // supporto tastiera base
    window.addEventListener('keydown', (ev)=>{
        const key = ev.key;
        if ((/^[0-9]$/.test(key)) || key === '.'){
            document.querySelector('[data-value="'+ (key==='.'?'.':key) + '"]')?.click();
            ev.preventDefault();
        } else if (key === 'Enter' || key === '='){
            document.querySelector('[data-action="equals"]').click(); ev.preventDefault();
        } else if (key === 'Backspace'){
            expression = expression.slice(0,-1); updateScreen(); ev.preventDefault();
        } else if (key === '+'|| key === '-' || key === '*' || key === '/'){
            // mappa per simboli visuali
            const map = {"+":"+","-":"-","*":"*","/":"/"};
            expression += map[key]; updateScreen(); ev.preventDefault();
        }
    });

    // Toggle tema semplice
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', ()=>{
        document.body.classList.toggle('alt-theme');
        if (document.body.classList.contains('alt-theme')){
            document.documentElement.style.setProperty('--bg','#f3f4f6');
            document.documentElement.style.setProperty('--card','#ffffff');
            document.documentElement.style.setProperty('--txt','#0b1220');
            document.documentElement.style.setProperty('--muted','#5b6a7b');
        } else {
            document.documentElement.style.removeProperty('--bg');
            document.documentElement.style.removeProperty('--card');
            document.documentElement.style.removeProperty('--txt');
            document.documentElement.style.removeProperty('--muted');
        }
    });

    // inizializza
    updateScreen();
})();