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
    let limpaFx = null;
    let apertado = null;

    const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const AMBAR = '#f2a93b';
    const AZUL = '#6f8cff';

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
        document.querySelectorAll('.kf-porta, #kf-estilo, #kf-fx').forEach(e => e.remove());
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

    // ---------- Efeitos de aperto: crescem a cada clique ----------

    function camada() {
        let c = document.getElementById('kf-fx');

        if (!c) {
            c = document.createElement('div');
            c.id = 'kf-fx';
            c.setAttribute('aria-hidden', 'true');
            c.style.cssText = 'position:fixed;inset:0;z-index:2147482500;pointer-events:none;overflow:hidden';
            document.body.append(c);
        }

        clearTimeout(limpaFx);
        limpaFx = setTimeout(() => c.remove(), 1500);

        return c;
    }

    // anel de luz que se expande a partir do logotipo
    function onda(c, x, y, cor, tam, atraso = 0) {
        const o = document.createElement('i');

        o.style.cssText = `position:absolute;left:${x - 12}px;top:${y - 12}px;width:24px;height:24px;border-radius:50%;` +
            `border:2px solid ${cor};box-shadow:0 0 14px ${cor},inset 0 0 10px ${cor};opacity:0`;
        c.append(o);

        o.animate(
            [{ transform: 'scale(.4)' }, { transform: `scale(${tam})` }],
            { duration: 700, delay: atraso, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' }
        );
        o.animate(
            [{ opacity: .95 }, { opacity: .6, offset: .45 }, { opacity: 0 }],
            { duration: 700, delay: atraso, fill: 'forwards' }
        );
    }

    // faíscas douradas e azuis
    function fagulhas(c, x, y, qtd, alcance) {
        for (let i = 0; i < qtd; i++) {
            const ang = Math.random() * Math.PI * 2;
            const dist = alcance * (.35 + Math.random() * .65);
            const r = 2 + Math.random() * 3;
            const cor = Math.random() < .28 ? AZUL : AMBAR;
            const f = document.createElement('i');

            f.style.cssText = `position:absolute;left:${x - r}px;top:${y - r}px;width:${r * 2}px;height:${r * 2}px;` +
                `border-radius:50%;background:${cor};box-shadow:0 0 ${r * 3}px ${cor};opacity:0`;
            c.append(f);

            const dur = 600 + Math.random() * 600;

            f.animate(
                [
                    { transform: 'translate(0,0) scale(1)' },
                    { transform: `translate(${Math.cos(ang) * dist}px,${Math.sin(ang) * dist + 24}px) scale(.3)` }
                ],
                { duration: dur, easing: 'cubic-bezier(.1,.7,.3,1)', fill: 'forwards' }
            );
            f.animate(
                [{ opacity: 1 }, { opacity: 1, offset: .55 }, { opacity: 0 }],
                { duration: dur, fill: 'forwards' }
            );
        }
    }

    // bordas da tela escurecem, como se a luz da vila baixasse
    function escurecer(c, forca) {
        const v = document.createElement('div');

        v.style.cssText = 'position:absolute;inset:0;opacity:0;background:radial-gradient(ellipse at 50% 40%,transparent 38%,rgba(6,8,50,.9) 100%)';
        c.append(v);

        v.animate(
            [{ opacity: 0 }, { opacity: forca }, { opacity: forca * .55 }, { opacity: 0 }],
            { duration: 900, fill: 'forwards' }
        );
    }

    // clarão dourado nos últimos cliques
    function clarao(c) {
        const v = document.createElement('div');

        v.style.cssText = 'position:absolute;inset:0;opacity:0;background:radial-gradient(circle at 50% 25%,rgba(255,226,160,.6),transparent 70%)';
        c.append(v);

        v.animate([{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }], { duration: 380, fill: 'forwards' });
    }

    function logoReage(logo, nivel) {
        if (!logo.animate) return;

        // brilho do logotipo (único efeito para quem prefere menos movimento)
        logo.animate(
            [
                { filter: `drop-shadow(0 0 ${6 + nivel * 4}px ${AMBAR}) brightness(${1 + nivel * .1})` },
                { filter: 'none' }
            ],
            { duration: 520, easing: 'ease-out' }
        );

        if (calmo) return;

        // mola: o logotipo volta do aperto e, nos últimos cliques, treme
        const t = nivel >= 4 ? nivel * .5 : 0;

        logo.animate(
            [
                { transform: 'scale(.9)' },
                { transform: `translate(${-t}px,${t / 2}px) scale(${1.06 + nivel * .012})` },
                { transform: `translate(${t}px,${-t / 2}px) scale(1.02)` },
                { transform: 'translate(0,0) scale(1)' }
            ],
            { duration: 340, easing: 'ease-out' }
        );
    }

    function efeito(logo, nivel) {
        logoReage(logo, nivel);

        if (calmo) return;

        const r = logo.getBoundingClientRect();
        const x = r.left + r.width / 2;
        const y = r.top + r.height / 2;
        const c = camada();

        onda(c, x, y, AMBAR, 3 + nivel * .9);
        if (nivel >= 5) onda(c, x, y, AZUL, 5 + nivel, 120);
        if (nivel >= 2) fagulhas(c, x, y, 3 + nivel * 4, 50 + nivel * 28);
        if (nivel >= 3) escurecer(c, Math.min(.12 * nivel, .8));
        if (nivel >= 6) clarao(c);
    }

    // Evita contar a tecla Enter segurada no logotipo
    addEventListener('keydown', e => { teclaRepetida = e.repeat; }, true);

    // Enquanto está apertando: o logotipo afunda e acende
    addEventListener('pointerdown', e => {
        const logo = e.target.closest && e.target.closest('#topo .logo');

        if (!logo || trava || calmo || !logo.animate) return;

        apertado = logo.animate(
            [
                { transform: 'scale(1)', filter: 'none' },
                { transform: 'scale(.9)', filter: `drop-shadow(0 0 8px ${AMBAR})` }
            ],
            { duration: 90, fill: 'forwards' }
        );
    }, true);

    const soltar = () => {
        if (apertado) {
            apertado.cancel();
            apertado = null;
        }
    };

    addEventListener('pointerup', soltar, true);
    addEventListener('pointercancel', soltar, true);

    document.addEventListener('click', e => {
        const logo = e.target.closest && e.target.closest('#topo .logo');

        if (!logo || trava) return;
        if (e.detail === 0 && teclaRepetida) return;

        const agora = Date.now();

        n = agora - ultimo > JANELA ? 1 : n + 1;
        ultimo = agora;

        if (n === 4) new Image().src = CARTAZ;   // aquece o cache só quando há intenção

        efeito(logo, n);

        if (n === ALVO) {
            e.preventDefault();
            abrir();
        }
    }, true);

    // Voltar pelo navegador não pode trazer a transição de volta
    addEventListener('pageshow', e => { if (e.persisted) limpar(); });
})();
