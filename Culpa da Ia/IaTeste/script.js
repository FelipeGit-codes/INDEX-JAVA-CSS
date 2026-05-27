// --- DADOS DAS 10 PÁGINAS SOBRE O VÁCUO ---
const pagesData = [
    {
        title: "1. Introdução ao Vácuo Espacial",
        content: "O vácuo do espaço não é um vazio absoluto, mas sim uma região do universo onde a matéria é extremamente rala e a densidade de partículas é incrivelmente baixa. Diferente do que muitos pensam, o espaço interestelar contém traços de gás, poeira cósmica e radiação. É o laboratório definitivo para testar as leis da física sem a interferência da atmosfera terrestre."
    },
    {
        title: "2. A Ausência de Pressão Atmosférica",
        content: "Na Terra, a atmosfera exerce uma pressão constante sobre nós. No vácuo do espaço, essa pressão cai para praticamente zero. Sem uma força externa segurando os fluidos, os gases dissolvidos no corpo humano tentariam se expandir. Ao contrário do cinema, um corpo não explode instantaneamente, mas a falta de oxigênio causa perda de consciência em poucos segundos."
    },
    {
        title: "3. O Silêncio Absoluto",
        content: "O som é uma onda mecânica que necessita de um meio material (como o ar, a água ou sólidos) para se propagar através de vibrações moleculares. Como o vácuo espacial carece desse meio denso, as ondas sonoras simplesmente não têm como viajar. Explosões cósmicas, colisões de asteroides e o nascimento de estrelas acontecem em um silêncio sepulcral."
    },
    {
        title: "4. Gradiente de Temperatura Extremo",
        content: "O vácuo em si não possui temperatura, pois temperatura é a medição da energia cinética das partículas. No entanto, objetos no espaço experimentam extremos térmicos bizarros. Sob a luz direta do Sol, sem atmosfera para filtrar ou distribuir o calor, superfícies podem passar de 120°C. Na sombra, sem retenção térmica, a temperatura despenca para cerca de -150°C."
    },
    {
        title: "5. Radiação Cósmica de Fundo",
        content: "Mesmo sem matéria, o vácuo está repleto de energia. A Radiação Cósmica de Fundo em Micro-ondas (CMB) é o 'eco' remanescente do Big Bang que preenche todo o cosmos. Além disso, o vácuo é atravessado constantemente por ventos solares, raios gama e raios cósmicos de alta energia vindos de galáxias distantes."
    },
    {
        title: "6. Flutuações Quânticas do Vácuo",
        content: "Segundo a Mecânica Quântica, o vácuo perfeito é impossível devido ao Princípio da Incerteza de Heisenberg. O 'vácuo quântico' é um fervilhar constante de energia, onde pares de partículas e antipartículas virtuais piscam constantemente para a existência e se aniquilam mútuamente em frações infinitesimais de segundo."
    },
    {
        title: "7. A Velocidade da Luz no Vácuo",
        content: "O vácuo espacial é o meio onde a luz atinge sua velocidade máxima universal e absoluta: exatamente 299.792.458 metros por segundo (representada pela constante c). Em qualquer outro meio material, como água ou vidro, os fótons interagem com os átomos locais e são atrasados, mas no vácuo eles viajam livres de barreiras."
    },
    {
        title: "8. Efeito de Soldagem a Frio",
        content: "Uma propriedade mecânica fascinante no vácuo é a soldagem a frio. Na Terra, os metais desenvolvem uma camada de oxidação ao contato com o ar que impede que pedaços diferentes se fundam. No vácuo rígido do espaço, se dois pedaços de metal limpo do mesmo tipo se tocarem, os átomos não 'sabem' que pertencem a objetos separados e se unem permanentemente."
    },
    {
        title: "9. O Vácuo Perfeito vs. Vácuo Parcial",
        content: "Cientistas categorizam o vácuo em diferentes níveis de qualidade. O vácuo criado em laboratórios terrestres avançados é chamado de 'alto vácuo', mas ainda contém milhões de moléculas por centímetro cúbico. O vácuo do espaço profundo (intergaláctico) é o mais próximo que chegamos do vácuo perfeito, contendo às vezes apenas um único átomo por metro cúbico."
    },
    {
        title: "10. A Expansão do Próprio Tecido Espacial",
        content: "O vácuo não é apenas um palco estático onde as coisas acontecem; ele possui dinâmica própria. A Energia Escura, que compõe a maior parte do nosso universo, parece estar intrinsecamente ligada ao tecido do vácuo, empurrando o espaço para se expandir de forma acelerada, afastando as galáxias umas das outras a cada segundo."
    }
];

// --- SISTEMA DE NAVEGAÇÃO SPA ---
let currentPageIndex = 0;
const sidebarNav = document.getElementById('sidebar-nav');
const contentPanel = document.getElementById('content-panel');

function initApp() {
    // Renderizar os botões laterais e as telas de conteúdo
    pagesData.forEach((page, index) => {
        // Criar botão da barra lateral
        const btn = document.createElement('button');
        btn.className = `nav-btn ${index === 0 ? 'active' : ''}`;
        btn.innerText = page.title.split('.')[1] || page.title;
        btn.onclick = () => { triggerShatter(); goToPage(index); };
        sidebarNav.appendChild(btn);

        // Criar estrutura da página de conteúdo
        const pageDiv = document.createElement('div');
        pageDiv.className = `page ${index === 0 ? 'active' : ''}`;
        pageDiv.id = `page-${index}`;

        pageDiv.innerHTML = `
            <h1>${page.title}</h1>
            <p>${page.content}</p>
            <div class="page-navigation">
                <button class="ctrl-btn" ${index === 0 ? 'disabled' : ''} onclick="prevPage()">Anterior</button>
                <button class="ctrl-btn" ${index === pagesData.length - 1 ? 'disabled' : ''} onclick="nextPage()">Próximo</button>
            </div>
        `;
        contentPanel.appendChild(pageDiv);
    });
}

function goToPage(index) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    currentPageIndex = index;
    document.getElementById(`page-${index}`).classList.add('active');
    sidebarNav.children[index].classList.add('active');
}

function nextPage() {
    if (currentPageIndex < pagesData.length - 1) {
        triggerShatter();
        goToPage(currentPageIndex + 1);
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        triggerShatter();
        goToPage(currentPageIndex - 1);
    }
}


// --- EFEITO VERGIL SHATTER (REALIDADE QUEBRANDO) ---
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

let slices = [];

class ShatterCrack {
    constructor(cx, cy) {
        this.cx = cx;
        this.cy = cy;
        this.life = 1.0;
        this.decay = 0.018; // Taxa de desaparecimento do corte
        this.lines = [];
        this.generateCracks();
    }

    generateCracks() {
        const numLines = 12 + Math.random() * 8;
        for (let i = 0; i < numLines; i++) {
            let angle = (i / numLines) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
            let length = 150 + Math.random() * 250;
           
            let currentX = this.cx;
            let currentY = this.cy;
            let points = [{x: currentX, y: currentY}];
           
            // Quebras angulares zigue-zague
            let segments = 4;
            for(let j=0; j<segments; j++) {
                let segLength = length / segments;
                currentX += Math.cos(angle) * segLength + (Math.random() * 30 - 15);
                currentY += Math.sin(angle) * segLength + (Math.random() * 30 - 15);
                points.push({x: currentX, y: currentY});
            }

            this.lines.push(points);
        }
    }

    draw() {
        ctx.save();
        // Brilho neon azul cortante
        ctx.shadowBlur = 20 * this.life;
        ctx.shadowColor = `rgba(0, 180, 255, ${this.life})`;
       
        ctx.strokeStyle = `rgba(230, 245, 255, ${this.life})`;
        ctx.lineWidth = 3 * this.life;

        this.lines.forEach(points => {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for(let i=1; i<points.length; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.stroke();
        });

        // Distorção cinza escura no centro do impacto
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(10, 15, 25, ${this.life * 0.4})`;
        ctx.beginPath();
        this.lines.forEach((points, idx) => {
            if(idx % 2 === 0 && idx < this.lines.length - 1) {
                ctx.moveTo(this.cx, this.cy);
                ctx.lineTo(points[1].x, points[1].y);
                ctx.lineTo(this.lines[idx+1][1].x, this.lines[idx+1][1].y);
            }
        });
        ctx.fill();

        ctx.restore();
    }

    update() {
        this.life -= this.decay;
    }
}

// Dispara múltiplos cortes rápidos na tela (Estilo Judgment Cut)
function triggerShatter() {
    const cuts = 3 + Math.floor(Math.random() * 2);
    for(let i=0; i<cuts; i++) {
        setTimeout(() => {
            let rx = Math.random() * width;
            let ry = Math.random() * height;
            slices.push(new ShatterCrack(rx, ry));
        }, i * 80); // Pequeno delay milimétrico entre os golpes para dar impacto físico
    }
}

// Loop de renderização contínua (60fps)
function animate() {
    ctx.fillStyle = 'rgba(10, 10, 12, 0.3)'; // Rastro de tela para suavizar os cortes
    ctx.fillRect(0, 0, width, height);

    for (let i = slices.length - 1; i >= 0; i--) {
        slices[i].update();
        slices[i].draw();
        if (slices[i].life <= 0) {
            slices.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

// Inicialização dos scripts
initApp();
animate();

// Corte dimensional inicial decorativo
setTimeout(triggerShatter, 500);
