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
    ['catalogo', 'Catálogo', 'pages/catalogo.html', '🎞️', 'Catálogo'],
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

    b.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !window.aoBuscar) {
            location.hash = 'catalogo';
        }
    });

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
   PÁGINA CATÁLOGO
   ========================================================== */

function iniciarCatalogo() {
    const g = $('#fg');
    const a = $('#fa');
    const o = $('#fo');
    const grade = $('#grade-cat');
    const vazio = $('#vazio-cat');

    const norm = s =>
        s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    let busca = $('#busca').value;

    g.innerHTML =
        '<option value="">Todos os gêneros</option>' +
        [...new Set(FILMES.flatMap(f => f.genero))]
            .sort()
            .map(x => `<option>${x}</option>`)
            .join('');

    a.innerHTML =
        '<option value="">Todos os anos</option>' +
        [...new Set(FILMES.map(f => f.ano))]
            .sort((x, y) => y - x)
            .map(x => `<option>${x}</option>`)
            .join('');

    g.value = '';


    function render() {
        const l = FILMES.filter(f =>
            (!g.value || f.genero.includes(g.value)) &&
            (!a.value || f.ano == a.value) &&
            norm(f.titulo + ' ' + f.genero.join(' ') + ' ' + f.sinopse).includes(norm(busca))
        );

        l.sort(
            o.value === 'az'
                ? (x, y) => x.titulo.localeCompare(y.titulo)
                : o.value === 'ano'
                    ? (x, y) => y.ano - x.ano
                    : (x, y) => y.popularidade - x.popularidade
        );

        grade.innerHTML = l.map(cartao).join('');

        vazio.hidden = l.length > 0;

        $('#contagem').textContent =
            `${l.length} ${l.length === 1 ? 'filme' : 'filmes'}`;
    }


    window.aoBuscar = v => {
        busca = v;
        render();
    };

    [g, a, o].forEach(e => e.onchange = render);

    render();
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

                <a class="btn" href="#catalogo">
                    Ver catálogo
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

    catalogo: iniciarCatalogo,
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
