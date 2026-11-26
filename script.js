/* ==========================================================
   DADOS DOS FILMES (base centralizada)
   ========================================================== */

// Base de dados única. Caminhos relativos à pasta do projeto.
const FILMES = [
    {
        id: 'scarlet-witch',
        adicionadoEm: '2026-11-05',
        titulo: 'Scarlet Witch',
        sinopse: 'Das ruínas de um reino esquecido, uma feiticeira desperta um poder carmesim capaz de reescrever a realidade — e o preço pode ser o próprio mundo.',
        genero: ['Fantasia', 'Ação'],
        ano: 2026,
        classificacao: '14',
        capa: 'imagens/banners/scarlet-witch.png',
        banner: 'imagens/banners/scarlet-witch.png',
        cenario: 'imagens/banners/scarlet-witch.png',
        video: 'videos/scarlet-witch.mp4',
        duracao: '13 s',
        corPrincipal: '#ff1a2b',
        corSecundaria: '#5a0008',
        efeito: 'magia',
        fonte: "'Cinzel',serif",
        popularidade: 98,
        posicao: '50% 35%',
        ajuste: 'cover',
        disponivel: true
    },

    {
        id: 'super-choque',
        adicionadoEm: '2026-11-02',
        titulo: 'Super Choque',
        sinopse: 'Um jovem descobre que carrega o poder dos raios. Entre a cidade e o medo, ele aprende que um herói não nasce pronto: ele se torna.',
        genero: ['Ação', 'Ficção científica'],
        ano: 2026,
        classificacao: '10',
        capa: 'imagens/banners/super-choque.png',
        banner: 'imagens/banners/super-choque.png',
        cenario: 'imagens/banners/super-choque.png',
        video: 'videos/super-choque.mp4',
        duracao: '10 s',
        corPrincipal: '#2d7bff',
        corSecundaria: '#ffd400',
        efeito: 'raios',
        fonte: "'Bangers',cursive",
        popularidade: 95,
        posicao: '50% 40%',
        ajuste: 'cover',
        disponivel: true
    },

    {
        id: 'it-a-coisa',
        adicionadoEm: '2026-08-14',
        titulo: 'IT: A Coisa',
        sinopse: 'Na escola, os balões vermelhos aparecem antes do medo. Uma presença sombria sussurra nas paredes e só os mais corajosos vão enfrentá-la.',
        genero: ['Terror', 'Suspense'],
        ano: 2025,
        classificacao: '16',
        capa: 'imagens/banners/it-a-coisa.png',
        banner: 'imagens/banners/it-a-coisa.png',
        cenario: 'imagens/banners/it-a-coisa.png',
        video: 'videos/it-a-coisa.mp4',
        duracao: '5 s',
        corPrincipal: '#d10f1f',
        corSecundaria: '#3a3a3f',
        efeito: 'neblina',
        fonte: "'Creepster',cursive",
        popularidade: 92,
        posicao: '50% 45%',
        ajuste: 'cover',
        disponivel: true
    },

    {
        id: 'detona-ralph',
        adicionadoEm: '2026-06-10',
        titulo: 'Detona Ralph',
        sinopse: 'Cansado de ser o vilão do jogo, Ralph decide provar que também pode ser herói, em uma jornada pelos fliperamas mais coloridos do mundo.',
        genero: ['Animação', 'Aventura'],
        ano: 2025,
        classificacao: 'L',
        capa: 'imagens/banners/detona-ralph.png',
        banner: 'imagens/banners/detona-ralph.png',
        cenario: 'imagens/banners/detona-ralph.png',
        video: 'videos/detona-ralph.mp4',
        duracao: '1h 30min',
        corPrincipal: '#ff3b30',
        corSecundaria: '#3ec6ff',
        efeito: 'pixels',
        fonte: "'Press Start 2P',monospace",
        popularidade: 90,
        posicao: '50% 10%',
        ajuste: 'lateral',
        disponivel: true
    },

    {
        id: 'girafales',
        adicionadoEm: '2026-10-20',
        titulo: 'Professor Girafales em Chaves',
        sinopse: 'O mestre mais elegante da vila chega ao pátio do número 14 para ensinar a turma — e descobre que a maior lição vem das confusões da vizinhança.',
        genero: ['Comédia'],
        ano: 2026,
        classificacao: 'L',
        capa: 'imagens/banners/girafales.png',
        banner: 'imagens/banners/girafales.png',
        cenario: 'imagens/banners/girafales.png',
        video: 'videos/girafales.mp4',
        duracao: '1h 25min',
        corPrincipal: '#ffc928',
        corSecundaria: '#c8281e',
        efeito: 'poeira',
        fonte: "'Fredoka',sans-serif",
        popularidade: 88,
        posicao: '50% 35%',
        ajuste: 'cover',
        disponivel: true
    },

    {
        id: 'thanos',
        adicionadoEm: '2026-11-21',
        titulo: 'Thanos: O Multiverso da Resenha',
        sinopse: 'O universo nunca esteve tão perto do caos. Entre as ruínas de mundos inteiros, o titã mais temido do multiverso reúne as joias do infinito e faz a sua escolha.',
        genero: ['Ficção científica', 'Ação'],
        ano: 2026,
        classificacao: '12',
        capa: 'imagens/banners/thanos.jpeg',
        banner: 'imagens/banners/thanos.jpeg',
        cenario: 'imagens/banners/thanos.jpeg',
        video: 'videos/thanos.mp4',
        duracao: '13 s',
        corPrincipal: '#d4a63a',
        corSecundaria: '#4a2a63',
        efeito: 'magia',
        fonte: "'Cinzel',serif",
        popularidade: 96,
        posicao: '50% 50%',
        ajuste: 'cover',
        disponivel: true
    },

    {
        id: 'groot',
        adicionadoEm: '2026-11-25',
        titulo: 'Eu Sou Groot: A Erva da Resenha',
        sinopse: 'No coração de uma floresta encantada, o guardião mais simpático da galáxia descansa sobre uma pedra com a sua fita favorita. Ele só diz uma frase, mas para quem entende, cada “Eu sou Groot” rende uma resenha inteira.',
        genero: ['Comédia', 'Aventura'],
        ano: 2026,
        classificacao: 'L',
        capa: 'imagens/banners/groot.png',
        banner: 'imagens/banners/groot.png',
        cenario: 'imagens/banners/groot.png',
        video: 'videos/groot.mp4',
        duracao: '1h 10min',
        corPrincipal: '#e8a33d',
        corSecundaria: '#2f5d2a',
        efeito: 'poeira',
        fonte: "'Fredoka',sans-serif",
        popularidade: 94,
        posicao: '50% 40%',
        ajuste: 'cover',
        disponivel: true
    }
];

const porId = id => FILMES.find(f => f.id === id);


const GENEROS = [
    {
        id: 'acao',
        nome: 'Ação',
        cor: '#ff6a00',
        desc: 'Perseguições, combates e muita adrenalina do primeiro ao último minuto.'
    },
    {
        id: 'aventura',
        nome: 'Aventura',
        cor: '#2ecc71',
        desc: 'Jornadas, descobertas e mundos inteiros esperando para serem explorados.'
    },
    {
        id: 'terror',
        nome: 'Terror',
        cor: '#d10f1f',
        desc: 'Sombras, neblina e medo que cresce em silêncio. Não assista sozinho.'
    },
    {
        id: 'suspense',
        nome: 'Suspense',
        cor: '#8a8fa3',
        desc: 'Tensão constante, segredos e reviravoltas que prendem até o fim.'
    },
    {
        id: 'ficcao-cientifica',
        nome: 'Ficção científica',
        cor: '#2d7bff',
        desc: 'Poderes, tecnologia e futuros possíveis (ou impossíveis).'
    },
    {
        id: 'fantasia',
        nome: 'Fantasia',
        cor: '#b57cff',
        desc: 'Magia, reinos e criaturas em universos onde tudo pode acontecer.'
    },
    {
        id: 'drama',
        nome: 'Drama',
        cor: '#c9a227',
        desc: 'Histórias intensas sobre pessoas, escolhas e emoções.'
    },
    {
        id: 'comedia',
        nome: 'Comédia',
        cor: '#ffc928',
        desc: 'Confusões, personagens inesquecíveis e risadas garantidas.'
    },
    {
        id: 'animacao',
        nome: 'Animação',
        cor: '#3ec6ff',
        desc: 'Cor, movimento e imaginação para todas as idades.'
    },
    {
        id: 'romance',
        nome: 'Romance',
        cor: '#ff5c8a',
        desc: 'Encontros, sentimentos e histórias de amor.'
    }
];


/* ==========================================================
   NÚCLEO: utilitários, Minha Lista, cartões, menu e eventos globais
   ========================================================== */

const $ = (s, r = document) => r.querySelector(s);

const reduzir = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Detecta o tipo de tela (celular / tablet / desktop) e atualiza ao girar ou redimensionar
const MQ = [
    matchMedia('(max-width:700px)'),
    matchMedia('(max-width:1023px)')
];

const dispositivo = () =>
    document.documentElement.dataset.dispositivo =
        MQ[0].matches ? 'mobile' : MQ[1].matches ? 'tablet' : 'desktop';

dispositivo();

MQ.forEach(m => m.addEventListener('change', dispositivo));

const estiloFilme = f =>
    `--c1:${f.corPrincipal};--c2:${f.corSecundaria};--fonte:${f.fonte}`;

const meta = f =>
    `${f.genero.join(' • ')} · ${f.ano} · ${f.classificacao}`;

const novo = f =>
    (Date.now() - new Date(f.adicionadoEm)) / 864e5 < 60;


// ---- Minha Lista (localStorage, sem login) ----

const LISTA = (() => {
    const K = 'karflix:minha-lista';
    let mem = [];

    const ler = () => {
        try {
            const v = JSON.parse(localStorage.getItem(K));

            if (Array.isArray(v)) {
                return v;
            }
        } catch (e) {}

        return mem;
    };

    const salvar = l => {
        mem = l;

        try {
            localStorage.setItem(K, JSON.stringify(l));
        } catch (e) {}
    };

    return {
        K,
        ler,
        tem: id => ler().includes(id),

        alternar(id) {
            const l = ler();
            const i = l.indexOf(id);

            i < 0 ? l.push(id) : l.splice(i, 1);

            salvar(l);

            return i < 0;
        }
    };
})();


const rotulo = (on, cls) =>
    `<span class="ic">${on ? '✓' : '+'}</span>${cls.includes('grande') ? `<span>${on ? 'Na Minha Lista' : 'Minha Lista'}</span>` : ''}`;


const botaoLista = (f, cls = '') => {
    const on = LISTA.tem(f.id);

    return `
        <button
            type="button"
            class="lista-btn ${cls}"
            data-lista="${f.id}"
            aria-pressed="${on}"
            title="${on ? 'Remover da Minha Lista' : 'Adicionar à Minha Lista'}"
        >
            ${rotulo(on, cls)}
        </button>
    `;
};


function sincronizar() {
    document.querySelectorAll('[data-lista]').forEach(b => {
        const on = LISTA.tem(b.dataset.lista);

        b.setAttribute('aria-pressed', on);
        b.title = on ? 'Remover da Minha Lista' : 'Adicionar à Minha Lista';
        b.innerHTML = rotulo(on, b.className);
    });

    const q = LISTA.ler().length;

    document.querySelectorAll('.contador').forEach(n => {
        n.textContent = q;
        n.hidden = !q;
    });
}


function cartao(f) {
    return `
        <div class="card" data-id="${f.id}" style="${estiloFilme(f)}">

            <a class="card-link" href="#filme-${f.id}">

                <img
                    src="${f.capa}"
                    alt="${f.titulo}"
                    loading="lazy"
                    style="object-position:${f.posicao}"
                >

                <div class="card-info">
                    <h3>${f.titulo}</h3>
                    <small>${meta(f)}</small>
                    <span class="btn mini">▶ Assistir</span>
                </div>

            </a>

            ${novo(f) ? '<i class="novo">NOVO</i>' : ''}

            ${botaoLista(f)}

        </div>
    `;
}


// ---- Menu ----

const ITENS = [
    ['index', 'Início', 'index.html', '🏠', 'Início'],
    ['generos', 'Gêneros', 'pages/generos.html', '🎭', 'Gêneros'],
    ['novidades', 'Novidades', 'pages/novidades.html', '✨', 'Novidades'],
    ['minha-lista', 'Minha Lista', 'pages/minha-lista.html', '🔖', 'Lista'],
    ['sobre', 'Sobre o Projeto', 'pages/sobre.html', 'ℹ️', 'Sobre']
];

const ROTA = c =>
    '#' + c.replace('pages/', '').replace('.html', '').replace('index', 'inicio');


(function topo() {
    const h = $('#topo');

    if (!h) return;

    h.innerHTML = `
        <a class="logo" href="${ROTA('index.html')}">
            KAR<b>FLIX</b>
        </a>

        <nav id="menu">
            ${ITENS.map(([id, t, c]) => `
                <a href="${ROTA(c)}" data-id="${id}">
                    ${t}
                    ${id === 'minha-lista' ? '<span class="contador" hidden>0</span>' : ''}
                </a>
            `).join('')}
        </nav>

        <input
            id="busca"
            type="search"
            placeholder="Buscar filmes…"
            aria-label="Buscar filmes"
            autocomplete="off"
        >

        <button
            id="menu-btn"
            type="button"
            aria-label="Abrir menu"
            aria-expanded="false"
            aria-controls="menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    `;

    const b = $('#busca');
    const btn = $('#menu-btn');

    b.addEventListener('input', () =>
        window.aoBuscar && window.aoBuscar(b.value)
    );

    btn.onclick = () =>
        btn.setAttribute('aria-expanded', h.classList.toggle('aberto'));

    $('#menu').onclick = e => {
        if (e.target.closest('a')) {
            h.classList.remove('aberto');
            btn.setAttribute('aria-expanded', 'false');
        }
    };

    addEventListener('scroll', () =>
        h.classList.toggle('solido', scrollY > 40)
    );
})();


// Navegação inferior (aparece só no celular, via CSS)

(function inferior() {
    const n = document.createElement('div');

    n.id = 'nav-inferior';
    n.setAttribute('role', 'navigation');
    n.setAttribute('aria-label', 'Navegação principal');

    n.innerHTML = ITENS.map(([id, , c, ic, curto]) => `
        <a href="${ROTA(c)}" data-id="${id}">
            <span class="ic">${ic}</span>
            ${curto}
            ${id === 'minha-lista' ? '<span class="contador" hidden>0</span>' : ''}
        </a>
    `).join('');

    document.body.append(n);
})();


// ---- Cliques: Minha Lista primeiro, depois animação do cartão ----

document.addEventListener('click', e => {
    const b = e.target.closest('[data-lista]');

    if (!b) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    LISTA.alternar(b.dataset.lista);

    sincronizar();

    document.querySelectorAll(`[data-lista="${b.dataset.lista}"]`).forEach(x => {
        x.classList.remove('pulo');
        void x.offsetWidth;
        x.classList.add('pulo');
    });

    document.dispatchEvent(new Event('lista:mudou'));
});


document.addEventListener('click', e => {
    const c = e.target.closest('.card-link');

    if (!c || reduzir || e.ctrlKey || e.metaKey) return;

    e.preventDefault();

    c.parentElement.classList.add('clicado');

    setTimeout(() =>
        (location.hash = c.getAttribute('href').slice(1)), 380
    );
});


addEventListener('storage', e => {
    if (e.key === LISTA.K) {
        sincronizar();
        document.dispatchEvent(new Event('lista:mudou'));
    }
});


// ---- Fileiras da página inicial ----

function renderFileiras() {
    const fil = $('#fileiras');

    const L = [
        ['Lançamentos', [...FILMES].sort((a, b) => b.ano - a.ano)],
        ['Mais populares', [...FILMES].sort((a, b) => b.popularidade - a.popularidade)],
        ['Produções originais de IA', FILMES]
    ];

    fil.innerHTML = L.map(([t, l]) => `
        <section class="fila">

            <h2>${t}</h2>

            <div class="trilho">
                ${l.map(cartao).join('')}
            </div>

        </section>
    `).join('');

    // setas de navegação das fileiras (visíveis só no desktop, via CSS)

    fil.querySelectorAll('.fila').forEach(s => {
        const t = s.querySelector('.trilho');

        s.insertAdjacentHTML(
            'beforeend',
            '<button class="fl e" aria-label="Anterior">‹</button><button class="fl d" aria-label="Próximo">›</button>'
        );

        s.querySelector('.fl.e').onclick = () =>
            t.scrollBy({ left: -t.clientWidth * .85, behavior: 'smooth' });

        s.querySelector('.fl.d').onclick = () =>
            t.scrollBy({ left: t.clientWidth * .85, behavior: 'smooth' });
    });
}


function renderEstatisticas() {
    document.querySelectorAll('[data-stat]').forEach(e => {
        e.textContent = {
            filmes: FILMES.length,
            generos: new Set(FILMES.flatMap(f => f.genero)).size,
            efeitos: new Set(FILMES.map(f => f.efeito)).size
        }[e.dataset.stat];
    });
}


/* ==========================================================
   PÁGINA INICIAL: carrossel de destaques com efeitos por filme
   ========================================================== */

function iniciarCarrossel() {
    const hero = $('#hero');

    if (!hero) return;

    const dest = FILMES.filter(f => f.disponivel);

    hero.querySelector('.slides').innerHTML = dest.map((f, k) => `
        <div class="slide" style="${estiloFilme(f)}">
            <img
                class="${f.ajuste}"
                src="${f.banner}"
                alt="${f.titulo}"
                style="object-position:${f.posicao}"
                ${k ? 'loading="lazy"' : ''}
            >
        </div>
    `).join('');

    const slides = [...hero.querySelectorAll('.slide')];
    const dots = $('.dots', hero);
    const info = $('.hero-info', hero);

    dots.innerHTML = dest.map((_, k) =>
        `<button aria-label="Filme ${k + 1}"></button>`
    ).join('');

    [...dots.children].forEach((d, k) =>
        d.onclick = () => ir(k)
    );

    $('.seta.e', hero).onclick = () => ir(i - 1);
    $('.seta.d', hero).onclick = () => ir(i + 1);


    // ----- Efeitos individuais (canvas) -----

    const cv = $('#fx');
    const cx = cv.getContext('2d');

    let W, H, P = [], ef = '', c1 = '#fff', bolt = [], bt = 0;

    const tam = () => {
        W = cv.width = hero.clientWidth;
        H = cv.height = hero.clientHeight;
    };

    addEventListener('resize', tam);

    tam();

    const nova = ini => {
        const p = {
            x: Math.random() * W,
            y: ini ? Math.random() * H : H + 10,
            r: 1 + Math.random() * 3,
            v: .3 + Math.random() * 1.2,
            a: Math.random() * 6.28
        };

        if (ef === 'neblina') {
            p.r = 120 + Math.random() * 180;
            p.y = H * .4 + Math.random() * H * .6;
            p.v = .15 + Math.random() * .25;
        }

        if (ef === 'pixels') {
            p.r = 4 + Math.random() * 8;
            p.y = ini ? Math.random() * H : -10;
            p.c = ['#ff3b30', '#3ec6ff', '#ffd400', '#7cff6b'][Math.random() * 4 | 0];
        }

        if (ef === 'raios') {
            p.v = 1 + Math.random() * 3;
        }

        return p;
    };


    const fx = f => {
        tam();

        ef = f.efeito;
        c1 = f.corPrincipal;

        const n = {
            magia: 70,
            neblina: 14,
            raios: 60,
            pixels: 50,
            poeira: 60
        }[ef] || 40;

        P = Array.from(
            {
                length: document.documentElement.dataset.dispositivo === 'mobile'
                    ? Math.round(n / 2)
                    : n
            },
            () => nova(true)
        );
    };


    let raf;

    const laco = () => {
        raf = requestAnimationFrame(laco);

        cx.clearRect(0, 0, W, H);

        cx.globalCompositeOperation = 'lighter';

        for (const p of P) {
            p.a += .03;

            if (ef === 'neblina') {
                p.x += p.v;

                if (p.x - p.r > W) {
                    p.x = -p.r;
                }

                const g = cx.createRadialGradient(
                    p.x, p.y, 0,
                    p.x, p.y, p.r
                );

                g.addColorStop(0, 'rgba(200,200,215,.07)');
                g.addColorStop(1, 'rgba(0,0,0,0)');

                cx.fillStyle = g;

                cx.beginPath();
                cx.arc(p.x, p.y, p.r, 0, 6.28);
                cx.fill();

                continue;
            }

            if (ef === 'pixels') {
                p.y += p.v * 1.5;

                if (p.y > H + 10) {
                    Object.assign(p, nova(false));
                }

                cx.globalAlpha = .75;
                cx.fillStyle = p.c;
                cx.fillRect(p.x, p.y, p.r, p.r);

                continue;
            }

            p.y -= p.v * (ef === 'raios' ? 2 : 1);

            p.x += ef === 'raios'
                ? (Math.random() - .5) * 6
                : Math.sin(p.a) * (ef === 'magia' ? 1.2 : .4);

            if (p.y < -10) {
                Object.assign(p, nova(false));
            }

            cx.globalAlpha = .35 + .65 * Math.abs(Math.sin(p.a));

            const g = cx.createRadialGradient(
                p.x, p.y, 0,
                p.x, p.y, p.r * 4
            );

            g.addColorStop(0, c1);
            g.addColorStop(1, 'rgba(0,0,0,0)');

            cx.fillStyle = g;

            cx.beginPath();
            cx.arc(p.x, p.y, p.r * 4, 0, 6.28);
            cx.fill();
        }

        cx.globalAlpha = 1;

        if (ef === 'raios') {
            if (Math.random() < .012) {
                bolt = [];

                let x = Math.random() * W;
                let y = 0;

                while (y < H * .7) {
                    bolt.push([x, y]);

                    x += (Math.random() - .5) * 60;
                    y += 30 + Math.random() * 30;
                }

                bt = 6;
            }

            if (bt > 0) {
                bt--;

                cx.beginPath();

                bolt.forEach(([x, y], k) =>
                    k ? cx.lineTo(x, y) : cx.moveTo(x, y)
                );

                cx.strokeStyle = '#bfe0ff';
                cx.shadowColor = c1;
                cx.shadowBlur = 18;
                cx.lineWidth = 2;

                cx.stroke();

                cx.shadowBlur = 0;
            }
        }
    };

    if (!reduzir) {
        laco();
    }


    // ----- Carrossel -----

    let i = 0;
    let t;

    function ir(n) {
        i = (n + dest.length) % dest.length;

        const f = dest[i];

        hero.style.cssText = estiloFilme(f);

        slides.forEach((s, k) =>
            s.classList.toggle('on', k === i)
        );

        [...dots.children].forEach((d, k) =>
            d.classList.toggle('on', k === i)
        );

        info.innerHTML = `
            <h1 class="titulo-fx">${f.titulo}</h1>

            <p class="meta">${meta(f)}</p>

            <p class="sinopse">${f.sinopse}</p>

            <div class="acoes">
                <a class="btn" href="#assistir-${f.id}">
                    ▶ Assistir
                </a>

                <a class="btn sec" href="#filme-${f.id}">
                    Detalhes
                </a>

                ${botaoLista(f, 'grande')}
            </div>
        `;

        info.classList.remove('entra');

        void info.offsetWidth;

        info.classList.add('entra');

        fx(f);

        clearInterval(t);

        if (!reduzir) {
            t = setInterval(() => ir(i + 1), 7000);
        }
    }


    // swipe (deslizar) no celular e tablet

    let x0 = null;

    hero.ontouchstart = e => {
        x0 = e.touches[0].clientX;
    };

    hero.ontouchend = e => {
        if (x0 == null) return;

        const dx = e.changedTouches[0].clientX - x0;

        x0 = null;

        if (Math.abs(dx) > 50) {
            ir(i + (dx < 0 ? 1 : -1));
        }
    };

    ir(0);

    return () => {
        clearInterval(t);
        cancelAnimationFrame(raf);
        removeEventListener('resize', tam);
    };
}


/* ==========================================================
   PÁGINA GÊNEROS
   ========================================================== */

function iniciarGeneros() {
    const chips = $('#chips');
    const alvo = $('#generos');

    const doGenero = g =>
        FILMES.filter(f => f.genero.includes(g.nome));

    chips.innerHTML = GENEROS.map(g => `
        <button
            type="button"
            data-g="${g.id}"
            style="--c1:${g.cor}"
        >
            ${g.nome}
            <b>${doGenero(g).length}</b>
        </button>
    `).join('');


    alvo.innerHTML = GENEROS.map(g => {
        const l = doGenero(g);
        const img = l[0] ? `,url('${l[0].capa}')` : '';

        return `
            <section
                class="genero"
                id="g-${g.id}"
                style="--c1:${g.cor}"
            >

                <div
                    class="gen-cab"
                    style="background-image:linear-gradient(90deg,#000e 25%,#0004)${img}"
                >
                    <h2>${g.nome}</h2>
                    <p>${g.desc}</p>
                </div>

                ${
                    l.length
                        ? `<div class="grade">${l.map(cartao).join('')}</div>`
                        : '<p class="breve">Ainda não há produções neste gênero. Em breve!</p>'
                }

            </section>
        `;
    }).join('');


    chips.onclick = e => {
        const b = e.target.closest('[data-g]');

        if (b) {
            document.getElementById('g-' + b.dataset.g)
                .scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
        }
    };
}


/* ==========================================================
   PÁGINA NOVIDADES
   ========================================================== */

function iniciarNovidades() {
    $('#grade-nov').innerHTML = [...FILMES]
        .sort((a, b) => b.adicionadoEm.localeCompare(a.adicionadoEm))
        .map(f => `
            <div class="nov">

                ${cartao(f)}

                <p class="data-add">
                    Adicionado em ${f.adicionadoEm.split('-').reverse().join('/')}
                </p>

            </div>
        `)
        .join('');
}


/* ==========================================================
   PÁGINA MINHA LISTA
   ========================================================== */

function iniciarLista() {
    const grade = $('#grade-lista');
    const vazio = $('#vazio-lista');
    const sub = $('#cont-sub');

    function render() {
        const l = LISTA.ler().slice().reverse().map(porId).filter(Boolean);

        grade.innerHTML = l.map(cartao).join('');

        vazio.hidden = l.length > 0;

        sub.textContent = l.length
            ? `${l.length} ${l.length === 1 ? 'filme salvo' : 'filmes salvos'} para assistir depois.`
            : '';
    }


    window.aoMudarLista = () => {
        document.querySelectorAll('.card').forEach(c => {
            if (!LISTA.tem(c.dataset.id)) {
                c.classList.add('saindo');
            }
        });

        setTimeout(render, reduzir ? 0 : 320);
    };

    render();
}


/* ==========================================================
   PÁGINA DETALHES + PLAYER
   ========================================================== */

function iniciarDetalhe(id) {
    const f = porId(id);
    const raiz = $('#detalhe');

    if (!f) {
        raiz.innerHTML = `
            <div class="erro">

                <h1>Conteúdo não encontrado</h1>

                <p>Este filme não existe ou foi removido.</p>

                <a class="btn" href="#inicio">
                    Voltar ao início
                </a>

            </div>
        `;
    } else {
        document.title = f.titulo + ' · KARFLIX';

        raiz.style.cssText = estiloFilme(f);

        const comum = x =>
            x.genero.filter(s => f.genero.includes(s)).length;

        const rel = FILMES
            .filter(x => x.id !== f.id)
            .sort((x, y) => comum(y) - comum(x))
            .slice(0, 4);


        raiz.innerHTML = `
            <section class="banner-det">

                <img
                    class="${f.ajuste}"
                    src="${f.banner}"
                    alt=""
                    style="object-position:${f.posicao}"
                >

                <div class="veu"></div>

                <div class="det-info entra">

                    <h1 class="titulo-fx">${f.titulo}</h1>

                    <div class="tec">
                        <span>${f.ano}</span>
                        <span>${f.duracao}</span>
                        <span>Classificação ${f.classificacao}</span>
                        ${f.genero.map(s => `<span>${s}</span>`).join('')}
                    </div>

                    <p class="sinopse">${f.sinopse}</p>

                    <div class="acoes">

                        <a
                            class="btn"
                            data-rolar="player"
                            href="#filme-${f.id}"
                        >
                            ▶ Assistir agora
                        </a>

                        ${botaoLista(f, 'grande')}

                    </div>

                </div>

            </section>


            <section id="player" class="player-wrap">

                <div class="player" id="pl">

                    <video
                        id="v"
                        preload="metadata"
                        poster="${f.capa}"
                        src="${f.video}"
                    ></video>

                    <div class="msg" id="msg" hidden>

                        <div>
                            <h2>Vídeo indisponível</h2>

                            <p>
                                O arquivo deste filme ainda não foi adicionado à pasta videos/.
                            </p>
                        </div>

                    </div>

                    <div class="ctrl">

                        <button id="pp" aria-label="Reproduzir/Pausar">
                            ▶
                        </button>

                        <input
                            id="pg"
                            type="range"
                            min="0"
                            max="100"
                            step=".1"
                            value="0"
                            aria-label="Progresso"
                        >

                        <span id="tm">0:00 / 0:00</span>

                        <button id="mu" aria-label="Mudo">
                            🔊
                        </button>

                        <input
                            id="vo"
                            type="range"
                            min="0"
                            max="1"
                            step=".05"
                            value="1"
                            aria-label="Volume"
                        >

                        <button id="fs" aria-label="Tela cheia">
                            ⛶
                        </button>

                    </div>

                </div>

            </section>


            <section class="fila">

                <h2>Filmes relacionados</h2>

                <div class="grade">
                    ${rel.map(cartao).join('')}
                </div>

            </section>
        `;


        const v = $('#v');
        const pp = $('#pp');

        const fmt = s =>
            isFinite(s)
                ? Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0')
                : '0:00';


        const toggle = () =>
            v.paused
                ? v.play().catch(() => $('#msg').hidden = false)
                : v.pause();


        v.onerror = () => $('#msg').hidden = false;

        pp.onclick = v.onclick = toggle;

        v.onplay = () => pp.textContent = '❚❚';

        v.onpause = () => pp.textContent = '▶';

        v.ontimeupdate = () => {
            $('#pg').value = v.duration
                ? v.currentTime / v.duration * 100
                : 0;

            $('#tm').textContent =
                fmt(v.currentTime) + ' / ' + fmt(v.duration);
        };

        $('#pg').oninput = e => {
            if (v.duration) {
                v.currentTime = e.target.value / 100 * v.duration;
            }
        };

        $('#vo').oninput = e => {
            v.volume = e.target.value;
            v.muted = false;
        };

        $('#mu').onclick = () => {
            v.muted = !v.muted;

            $('#mu').textContent = v.muted ? '🔇' : '🔊';
        };

        $('#fs').onclick = () =>
            document.fullscreenElement
                ? document.exitFullscreen()
                : $('#pl').requestFullscreen();
    }
}


/* ==========================================================
   ROTEADOR (navegação por # sem recarregar)
   ========================================================== */

const INICIAR = {
    inicio: () => {
        renderFileiras();
        return iniciarCarrossel();
    },

    generos: iniciarGeneros,
    novidades: iniciarNovidades,
    'minha-lista': iniciarLista,
    sobre: renderEstatisticas,
    filme: iniciarDetalhe,
    erro: () => {}
};

let limpar = null;


function marcarMenu(id) {
    document.querySelectorAll('#menu a, #nav-inferior a').forEach(a => {
        const on = a.dataset.id === id;

        a.classList.toggle('ativo', on);

        if (on) {
            a.setAttribute('aria-current', 'page');
        } else {
            a.removeAttribute('aria-current');
        }
    });
}


function rotear() {
    const rota = location.hash.slice(1) || 'inicio';

    const m = rota.match(/^(filme|assistir)-(.+)$/);

    const view = m
        ? 'filme'
        : (rota !== 'filme' && INICIAR.hasOwnProperty(rota) ? rota : 'erro');

    if (limpar) {
        limpar();
    }

    limpar = null;

    window.aoBuscar = null;
    window.aoMudarLista = null;

    document.querySelectorAll('video').forEach(v => v.pause());

    document.querySelectorAll('.view').forEach(v => {
        v.hidden = v.id !== 'v-' + view;
    });

    marcarMenu(view === 'inicio' ? 'index' : view);

    const h1 = view === 'filme' ? null : $('#v-' + view + ' h1');

    document.title = view === 'inicio'
        ? 'KARFLIX · Filmes feitos com IA'
        : (h1 ? h1.textContent + ' · KARFLIX' : 'KARFLIX');

    scrollTo(0, 0);

    limpar = INICIAR[view](m ? m[2] : null) || null;

    if (m && m[1] === 'assistir' && $('#player')) {
        $('#player').scrollIntoView();
    }

    sincronizar();
}


document.addEventListener('lista:mudou', () =>
    window.aoMudarLista && window.aoMudarLista()
);


document.addEventListener('click', e => {
    const a = e.target.closest('[data-rolar]');

    if (a) {
        e.preventDefault();

        document.getElementById(a.dataset.rolar)
            .scrollIntoView({ behavior: 'smooth' });
    }
});


addEventListener('hashchange', rotear);

rotear();

/* =========================================================
   KARFLIX · página secreta da Bruxa de 71 (#bruxa-de-71) e a
   transição da "porta do 71".
   A CONTAGEM de cliques no logotipo (agora 10 cliques, com
   animações e mensagens) fica no bloco EASTER EGGS, no fim deste arquivo, que chama
   window.KARFLIX_PORTA() no 10º clique. Este bloco só guarda a
   porta, a página secreta e o aquecimento de cache.
   ========================================================= */

(() => {
    const ALVO = 7;                       // cliques necessários
    const JANELA = 1500;                  // ms máximos entre um clique e o próximo
    const ROTA = 'bruxa-de-71';           // endereço da página secreta: index.html#bruxa-de-71
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

        timer = setTimeout(() => { location.hash = ROTA; setTimeout(() => { if (!aberta) limpar(); }, 1500); }, calmo ? 500 : 2150);
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

    // ---------- Ganchos usados pelo bloco EASTER EGGS (no fim deste arquivo) ----------
    // (a contagem antiga de 7 cliques foi substituída pela sequência de 10 cliques)

    // Inicia a transição da porta; no fim dela o hash vira #bruxa-de-71
    window.KARFLIX_PORTA = () => { if (!trava) abrir(); };

    // Aquece cartaz e fontes da página secreta quando há intenção
    window.KARFLIX_AQUECER = () => { new Image().src = CARTAZ; fontes(); };

    // Voltar pelo navegador não pode trazer a transição de volta
    addEventListener('pageshow', e => { if (e.persisted) limpar(); });

    // ================= Página secreta: A Bruxa de 71 =================
    // O HTML fica em <section id="segredo-bruxa"> (index.html) e o CSS em
    // style.css (classes sb-*). Aqui só abrimos e fechamos a seção, pela rota
    // #bruxa-de-71 do roteador do site. Assim funciona ao atualizar a página.

    const sec = document.getElementById('segredo-bruxa');
    const FONTES = 'https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon:ital@0;1&family=Josefin+Sans:wght@300;400&display=swap';

    let aberta = false;
    let raf = 0;
    let brasas = [];
    let sprites = null;
    let largura = 0;
    let altura = 0;

    // as fontes da página secreta só são baixadas por quem chega perto do segredo
    function fontes() {
        if (document.getElementById('kf-fontes')) return;

        const l = document.createElement('link');
        l.id = 'kf-fontes';
        l.rel = 'stylesheet';
        l.href = FONTES;
        document.head.append(l);
    }

    function sprite(cor) {
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
    }

    function medir() {
        const c = sec.querySelector('.sb-brasas');
        const d = Math.min(devicePixelRatio || 1, 1.5);

        largura = innerWidth;
        altura = innerHeight;
        c.width = largura * d;
        c.height = altura * d;
        c.getContext('2d').setTransform(d, 0, 0, d, 0, 0);
    }

    function nova(sorteia = true) {
        return {
            x: Math.random() * largura,
            y: sorteia ? Math.random() * altura : altura + 10,
            r: 3 + Math.random() * 7,
            vy: .12 + Math.random() * .35,
            vx: (Math.random() - .5) * .25,
            f: Math.random() * 6.28,
            sp: Math.random() < .25 ? sprites.azul : sprites.ambar
        };
    }

    // brasas e faíscas azuis (canvas leve; só roda com a página aberta)
    function iniciarBrasas() {
        const x = sec.querySelector('.sb-brasas').getContext('2d');

        if (!sprites) sprites = { ambar: sprite('#f2a93b'), azul: sprite('#6f8cff') };

        medir();
        brasas = Array.from({ length: innerWidth < 700 ? 22 : 44 }, () => nova());

        const quadro = () => {
            x.clearRect(0, 0, largura, altura);

            for (const p of brasas) {
                p.y -= p.vy;
                p.f += .02;
                p.x += p.vx + Math.sin(p.f) * .25;

                if (p.y < -10) Object.assign(p, nova(false));

                x.globalAlpha = .35 + .5 * Math.abs(Math.sin(p.f * 1.3));
                x.drawImage(p.sp, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
            }

            x.globalAlpha = 1;
        };

        addEventListener('resize', medir);

        if (calmo) {
            quadro();
            return;
        }

        const laco = () => {
            if (!document.hidden) quadro();
            raf = requestAnimationFrame(laco);
        };

        laco();
    }

    function pararBrasas() {
        cancelAnimationFrame(raf);
        removeEventListener('resize', medir);
    }

    function fecharSegredo() {
        if (!aberta) return;

        aberta = false;
        sec.hidden = true;
        pararBrasas();
        document.documentElement.style.overflow = '';
    }

    // o roteador chama esta função quando o endereço é #bruxa-de-71
    // e guarda o retorno para chamar quando a rota mudar
    function abrirSegredo() {
        if (!sec || aberta) return fecharSegredo;

        aberta = true;
        fontes();

        const img = sec.querySelector('.sb-cartaz img');
        const url = img.dataset.src;

        if (!img.getAttribute('src')) img.src = url;     // o cartaz só é pedido aqui
        sec.querySelector('.sb-fundo').style.backgroundImage = `url("${url}")`;

        sec.hidden = false;
        sec.scrollTop = 0;
        iniciarBrasas();

        limpar();                                        // a luz do segredo já cobre a tela: tira a porta
        document.documentElement.style.overflow = 'hidden';
        sec.focus({ preventScroll: true });

        return fecharSegredo;
    }

    if (sec && typeof INICIAR !== 'undefined') {
        INICIAR[ROTA] = abrirSegredo;

        // acessado direto (ou atualizado) em index.html#bruxa-de-71
        if (location.hash.slice(1) === ROTA && typeof rotear === 'function') rotear();
    }

    // Esc volta para o KARFLIX
    addEventListener('keydown', e => {
        if (aberta && e.key === 'Escape') location.hash = 'inicio';
    });

    // brilho que segue o mouse e inclina o cartaz de leve (só com mouse)
    if (sec && !calmo) {
        sec.addEventListener('pointermove', e => {
            if (e.pointerType !== 'mouse') return;

            const c = sec.querySelector('.sb-cartaz');
            const nx = e.clientX / innerWidth;
            const ny = e.clientY / innerHeight;

            c.style.setProperty('--rx', ((nx - .5) * 5).toFixed(2) + 'deg');
            c.style.setProperty('--ry', ((.5 - ny) * 3.5).toFixed(2) + 'deg');
            c.style.setProperty('--mx', (nx * 100).toFixed(0) + '%');
            c.style.setProperty('--my', (ny * 100).toFixed(0) + '%');
        });
    }
})();


/* ==========================================================
   >>> A PARTIR DAQUI: EASTER EGGS (antigo segredos.js)
   Precisa ficar depois de tudo acima (roteador e telas).
   ========================================================== */

/* =========================================================
   KARFLIX · EASTER EGGS

   Fica no FINAL deste arquivo, depois do roteador. Não altera
   o roteador nem os dados: só escuta cliques e o evento
   "hashchange" do próprio site. O CSS está em style.css, na
   seção "EASTER EGGS" (classes kx-*).

   EGG 1 · Título "KARFLIX" (#topo .logo)
     1º lampejo · 2º sussurro · 3º glitch · 4º alerta de vírus
     5º glitch forte · 6º alerta de corrupção · 7º e 8º tensão
     9º "Você foi avisado." · 10º abre a Bruxa de 71
     (a porta e a página #bruxa-de-71 já existiam no script.js)

   EGG 2 · "Sobre o Projeto" (menu do topo e navegação inferior)
     5 cliques desbloqueiam em silêncio. O vídeo só aparece na
     PRÓXIMA navegação interna (mudança de hash), uma vez por sessão.

   Tudo é visual: nada aqui altera o dispositivo do visitante.
   ========================================================= */

(() => {
    'use strict';

    // ---------- Configuração (ajuste aqui) ----------

    const EGG1 = {
        ALVO: 10,            // cliques para abrir a Bruxa de 71
        PAUSA_MAX: 6000,     // ms parado: depois disso a contagem recomeça
        ROTA: 'bruxa-de-71'  // mesma rota criada no script.js
    };

    const EGG2 = {
        ALVO: 5,                 // cliques em "Sobre o Projeto"
        PAUSA_MAX: 3500,         // ms entre cliques seguidos
        VIDEO: 'videos/segredo.mp4',   // arquivo do vídeo secreto (pasta videos/)
        ATRASO: 450              // ms após a navegação até a tela especial
    };

    // chaves do sessionStorage (somem ao fechar a aba)
    const K = {
        desbloqueado: 'karflix:egg2:desbloqueado',
        exibido: 'karflix:egg2:exibido',
        base: 'karflix:egg2:base',     // página em que o 5º clique terminou
        mudo: 'karflix:egg1:mudo'
    };

    // ---------- Utilidades ----------

    // sessionStorage com plano B em memória (modo privado / storage bloqueado)
    const memoria = {};

    const sessao = {
        ler(k) {
            try {
                const v = sessionStorage.getItem(k);
                return v === null ? (memoria[k] ?? null) : v;
            } catch (_) {
                return memoria[k] ?? null;
            }
        },
        gravar(k, v) {
            memoria[k] = v;
            try { sessionStorage.setItem(k, v); } catch (_) { /* segue só em memória */ }
        }
    };

    const calmo = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rotaAtual = () => location.hash.slice(1) || 'inicio';
    const sorteio = (a, b) => a + Math.random() * (b - a);

    const criar = (tag, classe, texto) => {
        const e = document.createElement(tag);
        if (classe) e.className = classe;
        if (texto) e.textContent = texto;
        return e;
    };

    // Web Animations com plano B; remove o elemento ao terminar (se pedido)
    function anima(el, quadros, opcoes, remover) {
        if (!el.animate) {
            if (remover) el.remove();
            return null;
        }

        const a = el.animate(quadros, opcoes);

        if (remover) a.onfinish = a.oncancel = () => el.remove();

        return a;
    }

    // Enter segurado no teclado gera vários "clicks": conta só o primeiro
    let teclaRepetida = false;
    addEventListener('keydown', e => { teclaRepetida = e.repeat; }, true);
    const cliqueRepetido = e => e.detail === 0 && teclaRepetida;

    const comModificador = e => e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button > 0;

    // Estado compartilhado para os dois segredos não se atropelarem
    const estado = {
        video: false,            // tela do vídeo aberta
        suspenso: () => false    // sequência do título em andamento (definido no Egg 1)
    };

    // ---------- Efeitos sonoros (Web Audio, sintetizados, baixos) ----------
    // Só tocam depois de um clique do visitante e podem ser silenciados
    // pelo botão que aparece junto com os efeitos (fica salvo na sessão).

    const som = (() => {
        let ctx = null;

        const ligado = () => sessao.ler(K.mudo) !== '1';

        function audio() {
            try {
                if (!ctx) {
                    const C = window.AudioContext || window.webkitAudioContext;
                    if (!C) return null;
                    ctx = new C();
                }
                if (ctx.state === 'suspended') ctx.resume();
                return ctx;
            } catch (_) {
                return null;
            }
        }

        function tom(freq, dur, vol, tipo, queda) {
            if (!ligado()) return;

            const a = audio();
            if (!a) return;

            const t = a.currentTime;
            const o = a.createOscillator();
            const g = a.createGain();

            o.type = tipo || 'sine';
            o.frequency.setValueAtTime(freq, t);
            if (queda) o.frequency.exponentialRampToValueAtTime(queda, t + dur);

            g.gain.setValueAtTime(0.0001, t);
            g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

            o.connect(g);
            g.connect(a.destination);
            o.start(t);
            o.stop(t + dur + 0.05);
        }

        function ruido(dur, vol) {
            if (!ligado()) return;

            const a = audio();
            if (!a) return;

            const n = Math.floor(a.sampleRate * dur);
            const buf = a.createBuffer(1, n, a.sampleRate);
            const d = buf.getChannelData(0);

            for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);

            const s = a.createBufferSource();
            const g = a.createGain();

            s.buffer = buf;
            g.gain.value = vol;
            s.connect(g);
            g.connect(a.destination);
            s.start();
        }

        return {
            ligado,
            batida() { tom(70, .22, .2, 'sine', 40); setTimeout(() => tom(62, .2, .14, 'sine', 36), 170); },
            glitch() { ruido(.25, .06); tom(220, .18, .035, 'sawtooth', 90); },
            alerta() { tom(880, .12, .04, 'square'); setTimeout(() => tom(660, .18, .04, 'square'), 140); },
            grave() { tom(55, 1.6, .1, 'sawtooth', 38); }
        };
    })();


    /* =====================================================
       EGG 1 · título KARFLIX → 10 cliques → Bruxa de 71
       ===================================================== */

    const susto = (() => {
        const ALVO_SEL = '#topo .logo';
        const GLIFOS = '█▓▒░#@%&$?!/\\<>';

        let n = 0;               // cliques seguidos
        let ultimo = 0;          // instante do último clique
        let travado = false;     // porta abrindo: ignora novos cliques
        let idle = null;         // reinicia a contagem após pausa
        let camadaEl = null;     // contêiner dos efeitos (#kx-fx)
        let msgEl = null;        // mensagem atual
        let msgTimer = null;
        let raf = 0;

        estado.suspenso = () => n > 0 || travado;

        // ---- Camada de efeitos (não bloqueia cliques: pointer-events:none) ----

        function camada() {
            if (camadaEl && camadaEl.isConnected) return camadaEl;

            const c = criar('div');
            c.id = 'kx-fx';
            c.innerHTML = `
                <div class="kx-vinheta" aria-hidden="true"></div>
                <div class="kx-linhas" aria-hidden="true"></div>
                <div class="kx-barra kx-t" aria-hidden="true"></div>
                <div class="kx-barra kx-b" aria-hidden="true"></div>
                <button type="button" class="kx-som"></button>
            `;

            const btn = c.querySelector('.kx-som');
            const atualiza = () => {
                const on = som.ligado();
                btn.textContent = on ? '🔊' : '🔇';
                btn.setAttribute('aria-label', on ? 'Silenciar efeitos sonoros' : 'Ativar efeitos sonoros');
            };

            atualiza();
            btn.addEventListener('click', () => {
                sessao.gravar(K.mudo, som.ligado() ? '1' : '0');
                atualiza();
            });

            document.body.append(c);
            camadaEl = c;

            return c;
        }

        function removerCamada() {
            clearTimeout(msgTimer);
            cancelAnimationFrame(raf);
            msgEl = null;

            const c = camadaEl;
            camadaEl = null;

            if (!c) return;

            c.classList.add('kx-saindo');
            setTimeout(() => c.remove(), 650);
        }

        function reiniciar() {
            if (travado) return;

            n = 0;
            removerCamada();
        }

        // ---- Mensagens ----

        // texto "decodificando": letras embaralhadas se resolvendo da esquerda p/ direita
        function decodificar(el, texto) {
            if (calmo()) {
                el.textContent = texto;
                return;
            }

            const dur = Math.min(900, 300 + texto.length * 18);
            const ini = performance.now();

            const passo = agora => {
                const p = Math.min(1, (agora - ini) / dur);
                const fixos = Math.floor(texto.length * p);
                let out = '';

                for (let i = 0; i < texto.length; i++) {
                    const ch = texto[i];
                    out += (i < fixos || ch === ' ')
                        ? ch
                        : GLIFOS[(Math.random() * GLIFOS.length) | 0];
                }

                el.textContent = out;

                if (p < 1) raf = requestAnimationFrame(passo);
            };

            raf = requestAnimationFrame(passo);
        }

        // some com a mensagem atual (fade rápido; imediato = sem fade)
        function limparMensagem(imediato) {
            clearTimeout(msgTimer);
            cancelAnimationFrame(raf);

            const m = msgEl;
            msgEl = null;

            if (!m) return;

            if (imediato) {
                m.remove();
                return;
            }

            m.classList.add('kx-saindo');
            setTimeout(() => m.remove(), 450);
        }

        // tipo: 'sussurro' | 'alerta' | 'grito'
        function mensagem(tipo, texto, opc = {}) {
            const c = camada();

            // uma mensagem por vez (inclusive as que ainda estão sumindo)
            limparMensagem(true);
            c.querySelectorAll('.kx-msg').forEach(x => x.remove());

            const m = criar('div', 'kx-msg kx-msg--' + tipo);
            const real = criar('span', 'kx-sr');             // texto real, para leitores de tela
            const vis = criar('span', 'kx-txt');             // texto animado (decorativo)

            m.setAttribute('role', 'status');
            vis.setAttribute('aria-hidden', 'true');

            if (tipo === 'alerta') {
                const cab = criar('small', 'kx-cab', '⚠ ALERTA DO SISTEMA');
                cab.setAttribute('aria-hidden', 'true');
                m.append(cab);
            }

            m.append(real, vis);

            if (opc.sub) {
                const s = criar('small', 'kx-sub', opc.sub);
                s.setAttribute('aria-hidden', 'true');
                m.append(s);
            }

            c.append(m);
            msgEl = m;

            requestAnimationFrame(() => { real.textContent = texto; });
            decodificar(vis, texto);

            msgTimer = setTimeout(() => {
                m.classList.add('kx-saindo');
                setTimeout(() => {
                    if (msgEl === m) msgEl = null;
                    m.remove();
                }, 450);
            }, opc.duracao || 2800);
        }

        // ---- Efeitos visuais ----

        // escurece e volta (UMA vez, suave: sem piscar rápido)
        function lampejo(c, cor, opacidade, dur) {
            const f = criar('div', 'kx-flash');
            f.style.background = cor;
            c.append(f);

            anima(f, [{ opacity: 0 }, { opacity: opacidade, offset: .35 }, { opacity: 0 }],
                { duration: dur, easing: 'ease-in-out' }, true);
        }

        // faixas horizontais deslocadas, como sinal de TV falhando
        function fatias(c, qtd, forca) {
            for (let i = 0; i < qtd; i++) {
                const f = criar('i', 'kx-fatia');
                const dx = sorteio(-1, 1) * (20 + forca * 46);

                f.style.top = sorteio(0, 96) + '%';
                f.style.height = sorteio(2, 8 + forca * 16) + 'px';
                f.style.background = Math.random() < .55 ? 'rgba(229,9,20,.55)' : 'rgba(0,229,255,.26)';
                c.append(f);

                anima(f, [
                    { transform: 'translateX(0)', opacity: 0 },
                    { transform: `translateX(${dx}px)`, opacity: 1, offset: .3 },
                    { transform: `translateX(${-dx * .6}px)`, opacity: .8, offset: .62 },
                    { transform: 'translateX(0)', opacity: 0 }
                ], { duration: sorteio(180, 520), delay: sorteio(0, 260), easing: 'steps(4,end)' }, true);
            }
        }

        // o logotipo reage a cada clique (sozinho no modo "menos movimento")
        function logoReage(logo, nivel) {
            if (!logo.animate) return;

            const f = nivel / EGG1.ALVO;

            logo.animate(
                [
                    { filter: `drop-shadow(0 0 ${6 + nivel * 3}px #e50914) brightness(${1 + f * .5})` },
                    { filter: 'none' }
                ],
                { duration: 650, easing: 'ease-out' }
            );

            if (calmo()) return;

            const t = 1 + nivel * .7;

            logo.animate(
                [
                    { transform: 'translate(0,0)' },
                    { transform: `translate(${-t}px,${t / 2}px)` },
                    { transform: `translate(${t}px,${-t / 2}px)` },
                    { transform: `translate(${-t / 2}px,0)` },
                    { transform: 'translate(0,0)' }
                ],
                { duration: 380, easing: 'steps(5,end)' }
            );

            const b = logo.querySelector('b');

            if (nivel >= 3 && b && b.animate) {
                b.animate(
                    [{ opacity: 1 }, { opacity: .25 }, { opacity: 1 }, { opacity: .5 }, { opacity: 1 }],
                    { duration: 460 }
                );
            }

            if (nivel >= 4) {
                logo.animate(
                    [
                        { textShadow: '3px 0 #00e5ff, -3px 0 #e50914' },
                        { textShadow: 'none' }
                    ],
                    { duration: 420 }
                );
            }
        }

        // Um nível = um conjunto de efeitos. Mensagens só nos níveis 2, 4, 6 e 9.
        function efeito(logo, nivel) {
            const c = camada();

            // cada clique é um momento novo: a mensagem do clique anterior sai de cena
            limparMensagem();

            // a vinheta escura cresce com o nível
            c.style.setProperty('--kx-n', Math.min(1, nivel / EGG1.ALVO).toFixed(2));

            logoReage(logo, nivel);

            const movimento = !calmo();

            switch (nivel) {
                case 1:                                                   // lampejo misterioso
                    if (movimento) lampejo(c, '#000', .5, 800);
                    break;

                case 2:                                                   // sussurro enigmático
                    if (movimento) lampejo(c, '#e50914', .16, 900);
                    mensagem('sussurro', 'Você ouviu isso? A vassoura… varrendo.', { duracao: 3200 });
                    break;

                case 3:                                                   // glitch + coração
                    c.classList.add('kx-linhas-on');
                    if (movimento) fatias(c, 6, .3);
                    som.glitch();
                    som.batida();
                    break;

                case 4:                                                   // alerta de vírus
                    if (movimento) fatias(c, 7, .45);
                    mensagem('alerta', 'Vírus detectado. Deseja continuar?', {
                        sub: 'Clique em KARFLIX para continuar',
                        duracao: 3400
                    });
                    som.alerta();
                    if (window.KARFLIX_AQUECER) window.KARFLIX_AQUECER();   // pré-carrega a Bruxa
                    break;

                case 5:                                                   // glitch forte
                    if (movimento) {
                        fatias(c, 10, .65);
                        lampejo(c, '#e50914', .22, 800);
                    }
                    som.glitch();
                    som.batida();
                    break;

                case 6:                                                   // "corrupção"
                    if (movimento) {
                        fatias(c, 18, 1);
                        lampejo(c, '#e50914', .3, 900);
                    }
                    mensagem('alerta', 'Se você continuar, vai corromper o seu dispositivo.', {
                        sub: 'Clique em KARFLIX para continuar',
                        duracao: 3600
                    });
                    som.glitch();
                    setTimeout(som.glitch, 200);
                    break;

                case 7:                                                   // as barras de cinema fecham
                    c.classList.add('kx-cine');
                    if (movimento) fatias(c, 9, .8);
                    som.batida();
                    break;

                case 8:                                                   // quase lá
                    if (movimento) {
                        fatias(c, 12, .9);
                        lampejo(c, '#000', .55, 900);
                    }
                    som.batida();
                    setTimeout(som.batida, 420);
                    break;

                case 9:                                                   // apagão (o título continua aceso)
                    c.classList.add('kx-apagao');
                    mensagem('grito', 'Você foi avisado.', { duracao: 4200 });
                    som.grave();
                    break;
            }
        }

        // ---- 10º clique: abre a Bruxa de 71 ----

        function abrirBruxa() {
            travado = true;
            clearTimeout(idle);
            limparMensagem();

            const c = camada();

            if (!calmo()) lampejo(c, '#e50914', .55, 700);
            som.grave();

            // porta animada do script.js; sem ela, vai direto para a página secreta
            if (typeof window.KARFLIX_PORTA === 'function') {
                window.KARFLIX_PORTA();
            } else {
                location.hash = EGG1.ROTA;
            }

            // a porta (z-index maior) já cobre a tela: tiramos os efeitos por baixo dela
            setTimeout(removerCamada, 800);

            // libera tudo depois que a transição acabou
            setTimeout(() => {
                travado = false;
                n = 0;
                removerCamada();
            }, 4200);
        }

        // ---- Escuta de cliques (um único listener) ----
        // Fase de captura para podermos cancelar o link só no 10º clique.
        // Nos cliques 1–9 NADA é cancelado: o título continua levando ao início.

        document.addEventListener('click', e => {
            const logo = e.target.closest && e.target.closest(ALVO_SEL);

            if (!logo || travado || estado.video) return;
            if (comModificador(e) || cliqueRepetido(e)) return;

            const agora = Date.now();

            n = agora - ultimo > EGG1.PAUSA_MAX ? 1 : n + 1;
            ultimo = agora;

            clearTimeout(idle);

            if (n >= EGG1.ALVO) {
                e.preventDefault();
                abrirBruxa();
                return;
            }

            idle = setTimeout(reiniciar, EGG1.PAUSA_MAX);
            efeito(logo, n);
        }, true);

        // voltar pelo navegador (bfcache) não pode trazer os efeitos de volta
        addEventListener('pageshow', e => {
            if (e.persisted) {
                travado = false;
                n = 0;
                removerCamada();
            }
        });

        return { reiniciar };
    })();


    /* =====================================================
       EGG 2 · "Sobre o Projeto" ×5 → vídeo na PRÓXIMA navegação
       ===================================================== */

    const video = (() => {
        const SOBRE_SEL = '#menu a[data-id="sobre"], #nav-inferior a[data-id="sobre"]';
        const MENU_SEL = '#menu a, #nav-inferior a, #topo .logo';

        let n = 0;
        let ultimo = 0;
        let timerMostrar = null;
        let aquecimento = null;  // <video> invisível que já vai baixando o arquivo
        let el = null;           // tela especial (#kx-video)
        let vid = null;          // <video> com o arquivo local
        let foco = null;         // elemento focado antes de abrir
        let overflowAnterior = '';
        let tocando = false;

        const desbloqueado = () => sessao.ler(K.desbloqueado) === '1';
        const exibido = () => sessao.ler(K.exibido) === '1';

        // ---- Aquecimento: baixa o arquivo em silêncio, antes da hora ----

        function aquecer() {
            if (aquecimento) return;

            try {
                aquecimento = document.createElement('video');
                aquecimento.preload = 'auto';
                aquecimento.muted = true;
                aquecimento.src = EGG2.VIDEO;
            } catch (_) {
                aquecimento = null;
            }
        }

        function soltarAquecimento() {
            if (!aquecimento) return;

            aquecimento.removeAttribute('src');

            try { aquecimento.load(); } catch (_) { /* segue */ }

            aquecimento = null;
        }

        // ---- 1) Contagem e desbloqueio silencioso ----

        function desbloquear(link) {
            sessao.gravar(K.desbloqueado, '1');

            // página onde o 5º clique termina: chegar nela NÃO conta como "próxima navegação"
            sessao.gravar(K.base, (link.hash || '#sobre').slice(1));

            // começa a baixar o vídeo sem mostrar nada
            aquecer();
        }

        document.addEventListener('click', e => {
            const alvo = e.target.closest && e.target.closest(MENU_SEL);

            if (!alvo) return;

            // clicar em outro item do menu quebra a sequência
            if (!alvo.matches(SOBRE_SEL)) {
                n = 0;
                return;
            }

            if (desbloqueado() || exibido()) return;
            if (comModificador(e) || cliqueRepetido(e)) return;

            const agora = Date.now();

            n = agora - ultimo > EGG2.PAUSA_MAX ? 1 : n + 1;
            ultimo = agora;

            if (n === EGG2.ALVO) desbloquear(alvo);   // sem animação, sem aviso
        }, true);

        // ---- 2) Detecta a PRÓXIMA navegação interna ----
        // O site navega por hash (sem recarregar). Este listener foi registrado
        // depois do rotear() do script.js, então roda quando a nova tela já está pronta.

        addEventListener('hashchange', () => {
            if (!desbloqueado() || exibido() || estado.video) return;

            if (rotaAtual() === sessao.ler(K.base)) return;        // navegação do próprio 5º clique

            clearTimeout(timerMostrar);
            timerMostrar = setTimeout(mostrar, EGG2.ATRASO);
        });

        // ---- 3) Tela especial ----

        function mostrar() {
            // não colide com o Egg 1 nem com a Bruxa: fica pendente para a próxima navegação
            if (!desbloqueado() || exibido() || estado.video) return;
            if (estado.suspenso() || rotaAtual() === EGG1.ROTA || rotaAtual() === sessao.ler(K.base)) return;

            sessao.gravar(K.exibido, '1');          // nunca mais nesta sessão
            estado.video = true;

            foco = document.activeElement;
            overflowAnterior = document.documentElement.style.overflow;
            document.documentElement.style.overflow = 'hidden';
            tocando = false;

            el = criar('div');
            el.id = 'kx-video';
            el.tabIndex = -1;
            el.setAttribute('role', 'dialog');
            el.setAttribute('aria-modal', 'true');
            el.setAttribute('aria-label', 'Vídeo secreto do KARFLIX');
            el.innerHTML = `
                <div class="kx-v-fundo" aria-hidden="true"></div>
                <div class="kx-v-barra kx-t" aria-hidden="true"></div>
                <div class="kx-v-barra kx-b" aria-hidden="true"></div>
                <button type="button" class="kx-v-fechar" aria-label="Fechar vídeo secreto">✕ Fechar</button>
                <p class="kx-v-tag" aria-hidden="true"></p>
                <div class="kx-v-moldura">
                    <video class="kx-v-video" controls playsinline preload="auto"></video>
                    <button type="button" class="kx-v-play" hidden>▶ Toque para assistir</button>
                    <p class="kx-v-erro" role="alert" hidden></p>
                </div>
                <p class="kx-v-dica">Você encontrou o segredo do KARFLIX.</p>
            `;

            document.body.append(el);

            // título "decodificando", igual às mensagens do Egg 1
            const tag = el.querySelector('.kx-v-tag');
            const frase = 'TRANSMISSÃO SECRETA INTERCEPTADA';

            if (calmo()) {
                tag.textContent = frase;
            } else {
                const ini = performance.now();
                const G = '█▓▒░#@%&$?!';
                const passo = agora => {
                    if (!el) return;
                    const p = Math.min(1, (agora - ini) / 1100);
                    const fixos = Math.floor(frase.length * p);
                    let out = '';

                    for (let i = 0; i < frase.length; i++) {
                        out += (i < fixos || frase[i] === ' ') ? frase[i] : G[(Math.random() * G.length) | 0];
                    }

                    tag.textContent = out;
                    if (p < 1) requestAnimationFrame(passo);
                };
                requestAnimationFrame(passo);
            }

            el.querySelector('.kx-v-fechar').addEventListener('click', fechar);
            el.querySelector('.kx-v-play').addEventListener('click', tocarManual);
            addEventListener('keydown', teclas, true);

            el.querySelector('.kx-v-fechar').focus({ preventScroll: true });

            iniciarVideo();
        }

        function iniciarVideo() {
            vid = el.querySelector('.kx-v-video');

            vid.addEventListener('playing', () => {
                tocando = true;
                esconderPlay();
            });

            vid.addEventListener('error', () => erro('Não foi possível carregar o vídeo agora.'));

            vid.src = EGG2.VIDEO;

            // tenta tocar sozinho (com som); se o navegador bloquear, mostra o botão
            const p = vid.play();

            if (p && typeof p.catch === 'function') {
                p.catch(err => {
                    const nome = err && err.name;

                    // fechou antes de começar / arquivo com problema (o evento 'error' avisa)
                    if (nome === 'AbortError' || nome === 'NotSupportedError') return;

                    mostrarPlay();
                });
            }
        }

        // autoplay com áudio bloqueado → botão para iniciar manualmente
        function mostrarPlay() {
            const b = el && el.querySelector('.kx-v-play');
            const e = el && el.querySelector('.kx-v-erro');

            if (b && !tocando && !(e && !e.hidden)) b.hidden = false;
        }

        function esconderPlay() {
            const b = el && el.querySelector('.kx-v-play');
            if (b) b.hidden = true;
        }

        // o clique do visitante é o "gesto" que os navegadores exigem
        function tocarManual() {
            if (!vid) return;

            vid.muted = false;

            const p = vid.play();

            if (p && typeof p.catch === 'function') {
                p.catch(() => { /* os controles do próprio vídeo continuam disponíveis */ });
            }

            esconderPlay();
        }

        function erro(texto) {
            if (!el) return;

            const p = el.querySelector('.kx-v-erro');
            p.textContent = texto;
            p.hidden = false;

            esconderPlay();
        }

        // Esc fecha; Tab fica preso dentro da tela especial
        function teclas(e) {
            if (!el) return;

            if (e.key === 'Escape') {
                e.preventDefault();
                fechar();
                return;
            }

            if (e.key !== 'Tab') return;

            const itens = [...el.querySelectorAll('button:not([hidden]), a[href], video')];

            if (!itens.length) return;

            const primeiro = itens[0];
            const ultimo = itens[itens.length - 1];
            const atual = document.activeElement;

            if (e.shiftKey && (atual === primeiro || !el.contains(atual))) {
                e.preventDefault();
                ultimo.focus();
            } else if (!e.shiftKey && (atual === ultimo || !el.contains(atual))) {
                e.preventDefault();
                primeiro.focus();
            }
        }

        function fechar() {
            if (!el) return;

            const tela = el;
            el = null;

            // para o vídeo na hora (o fade-out leva 450 ms e o som não pode continuar)
            if (vid) {
                vid.pause();
                vid.removeAttribute('src');

                try { vid.load(); } catch (_) { /* segue */ }

                vid = null;
            }

            soltarAquecimento();

            tela.classList.add('kx-saindo');
            setTimeout(() => tela.remove(), 450);

            removeEventListener('keydown', teclas, true);
            document.documentElement.style.overflow = overflowAnterior;
            estado.video = false;

            if (foco && foco.focus) foco.focus({ preventScroll: true });
        }

        return { fechar };
    })();
})();
