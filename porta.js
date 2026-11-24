/* KARFLIX · segredo: 7 cliques seguidos no logotipo abrem a porta do 71.
   Só conta cliques no logotipo do topo. Não altera nenhum comportamento
   do site: o logotipo continua levando ao início normalmente. */

(() => {
    const ALVO = 7;                       // cliques necessários
    const JANELA = 1500;                  // ms máximos entre um clique e o próximo
    const DESTINO = 'bruxa-de-71.html';
    const CARTAZ = 'imagens/banners/bruxa-do-71.png';

    let n = 0;
    let ultimo = 0;
    let trava = false;
    let teclaRepetida = false;
    let timer = null;

    const CSS = `
.kf-porta{position:fixed;inset:0;z-index:2147483000;display:flex;perspective:1400px;overflow:hidden;
  background:#05050f;opacity:0;animation:kf-in .5s ease-out forwards}
.kf-luz{position:absolute;inset:0;background:radial-gradient(circle at 50% 52%,#fff0c2 0,#f5b445 38%,#8a4a14 100%);
  animation:kf-brilha 1.7s .45s ease-in forwards}
.kf-folha{position:relative;flex:1;overflow:hidden;backface-visibility:hidden;
  background:
    linear-gradient(90deg,#0000 0,#0000 88%,#0007 100%),
    repeating-linear-gradient(90deg,#0000 0 11.5%,#0006 11.5% 12.5%),
    linear-gradient(180deg,#7a4125,#4a2616 60%,#2f170c)}
.kf-folha::after{content:"71";position:absolute;top:50%;font:700 min(34vw,46vh)/1 Georgia,'Times New Roman',serif;
  color:#f4ecd8;text-shadow:0 4px 0 #0008,0 0 40px #0006}
.kf-e{transform-origin:0 50%;animation:kf-abre-e 1.25s .5s cubic-bezier(.7,0,.25,1) forwards}
.kf-d{transform-origin:100% 50%;animation:kf-abre-d 1.25s .5s cubic-bezier(.7,0,.25,1) forwards}
.kf-e::after{right:0;transform:translate(50%,-50%)}
.kf-d::after{left:0;transform:translate(-50%,-50%)}
@keyframes kf-in{to{opacity:1}}
@keyframes kf-abre-e{to{transform:rotateY(100deg)}}
@keyframes kf-abre-d{to{transform:rotateY(-100deg)}}
@keyframes kf-brilha{from{filter:brightness(.7)}to{filter:brightness(1.12)}}
@media (prefers-reduced-motion:reduce){.kf-porta{animation-duration:.01ms}.kf-luz,.kf-folha{animation:none}.kf-folha{display:none}}
`;

    const limpar = () => {
        document.querySelectorAll('.kf-porta, #kf-estilo').forEach(e => e.remove());
        document.documentElement.style.overflow = '';
        clearTimeout(timer);
        trava = false;
        n = 0;
    };

    function abrir() {
        trava = true;

        const css = document.createElement('style');
        css.id = 'kf-estilo';
        css.textContent = CSS;
        document.head.append(css);

        const porta = document.createElement('div');
        porta.className = 'kf-porta';
        porta.setAttribute('aria-hidden', 'true');
        porta.innerHTML = '<i class="kf-luz"></i><div class="kf-folha kf-e"></div><div class="kf-folha kf-d"></div>';

        document.body.append(porta);
        document.documentElement.style.overflow = 'hidden';

        const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;

        timer = setTimeout(() => location.assign(DESTINO), calmo ? 500 : 2150);
    }

    // Pequeno tremor da luz do logotipo nos últimos cliques (sem texto, sem aviso)
    function tremer(logo) {
        if (!logo.animate || n < 5) return;

        const forte = n >= 6;

        logo.animate(
            [
                { opacity: 1, filter: 'none' },
                { opacity: forte ? .55 : .75, filter: forte ? 'drop-shadow(0 0 10px #f2a93b)' : 'none' },
                { opacity: 1, filter: 'none' }
            ],
            { duration: 200 }
        );
    }

    // Evita contar a tecla Enter segurada no logotipo
    addEventListener('keydown', e => { teclaRepetida = e.repeat; }, true);

    document.addEventListener('click', e => {
        const logo = e.target.closest && e.target.closest('#topo .logo');

        if (!logo || trava) return;
        if (e.detail === 0 && teclaRepetida) return;

        const agora = Date.now();

        n = agora - ultimo > JANELA ? 1 : n + 1;
        ultimo = agora;

        if (n === 4) new Image().src = CARTAZ;   // aquece o cache só quando há intenção

        tremer(logo);

        if (n === ALVO) {
            e.preventDefault();
            abrir();
        }
    }, true);

    // Voltar pelo navegador não pode trazer a transição de volta
    addEventListener('pageshow', e => { if (e.persisted) limpar(); });
})();
