/* A Bruxa de 71 · brasas, brilho do cartaz e atalho de retorno */

(() => {
    const VOLTAR = 'index.html';
    const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Esc volta para o KARFLIX
    addEventListener('keydown', e => {
        if (e.key === 'Escape') location.href = VOLTAR;
    });

    // ---- Inclinação suave do cartaz (só com mouse) ----
    const cartaz = document.getElementById('cartaz');

    if (cartaz && !calmo) {
        addEventListener('pointermove', e => {
            if (e.pointerType !== 'mouse') return;

            const nx = e.clientX / innerWidth;
            const ny = e.clientY / innerHeight;

            cartaz.style.setProperty('--rx', ((nx - .5) * 5).toFixed(2) + 'deg');
            cartaz.style.setProperty('--ry', ((.5 - ny) * 3.5).toFixed(2) + 'deg');
            cartaz.style.setProperty('--mx', (nx * 100).toFixed(0) + '%');
            cartaz.style.setProperty('--my', (ny * 100).toFixed(0) + '%');
        });
    }

    // ---- Brasas e faíscas azuis (canvas leve, pausa com a aba oculta) ----
    const c = document.getElementById('brasas');

    if (!c || !c.getContext) return;

    const x = c.getContext('2d');
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;

    const sprite = cor => {
        const s = document.createElement('canvas');
        s.width = s.height = 32;

        const g = s.getContext('2d');
        const r = g.createRadialGradient(16, 16, 0, 16, 16, 16);

        r.addColorStop(0, cor + 'ff');
        r.addColorStop(.35, cor + '88');
        r.addColorStop(1, cor + '00');

        g.fillStyle = r;
        g.fillRect(0, 0, 32, 32);

        return s;
    };

    const SP = { ambar: sprite('#f2a93b'), azul: sprite('#6f8cff') };

    const medir = () => {
        w = innerWidth;
        h = innerHeight;
        c.width = w * dpr;
        c.height = h * dpr;
        x.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const nova = (aleatorioY = true) => ({
        x: Math.random() * w,
        y: aleatorioY ? Math.random() * h : h + 10,
        r: 3 + Math.random() * 7,
        vy: .12 + Math.random() * .35,
        vx: (Math.random() - .5) * .25,
        f: Math.random() * 6.28,
        sp: Math.random() < .25 ? SP.azul : SP.ambar
    });

    let ps = [];

    medir();
    addEventListener('resize', medir);

    ps = Array.from({ length: innerWidth < 700 ? 22 : 44 }, () => nova());

    const quadro = () => {
        x.clearRect(0, 0, w, h);

        for (const p of ps) {
            p.y -= p.vy;
            p.f += .02;
            p.x += p.vx + Math.sin(p.f) * .25;

            if (p.y < -10) Object.assign(p, nova(false));

            x.globalAlpha = .35 + .5 * Math.abs(Math.sin(p.f * 1.3));
            x.drawImage(p.sp, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
        }

        x.globalAlpha = 1;
    };

    if (calmo) {
        quadro();
        return;
    }

    const laco = () => {
        if (!document.hidden) quadro();
        requestAnimationFrame(laco);
    };

    laco();
})();
