const loreDataBase = {
    "default": {
        name: "O Caos das Ilhas Intermédias",
        lore: "Escolha um dos semideuses ou lendas lendárias acima para explorar sua história, sua tragédia e as forças elementais que os cercam."
    },
    "godrick": {
        name: "Godrick, o Enxertado",
        lore: "Lorde de Stormveil, Godrick é o mais fraco da linhagem dourada. Desesperado por poder, recorreu à grotesca arte do 'enxerto', costurando membros de guerreiros mortos e até mesmo a cabeça de um dragão ao seu corpo para tentar alcançar a imponência de seus ancestrais."
    },
    "radahn": {
        name: "General Radahn, o Flagelo das Estrelas",
        lore: "O maior guerreiro das Ilhas Intermédias. Ele dominou as forças gravitacionais cósmicas para impedir o movimento das estrelas no firmamento. Consumido internamente pela Podridão Escarlate, hoje ele ronda os desertos de Caelid como uma fera canibal irracional, rugindo para o vazio cósmico."
    },
    "rykard": {
        name: "Lorde Rykard, o Senhor Blasfemo",
        lore: "No Monte Gelmir, Rykard cometeu a heresia suprema: permitiu voluntariamente que a Serpente Devoradora de Deuses o engolisse por completo. Agora fundido com o réptil eterno, ele devora campeões em seu covil de lava para absorvê-los em sua família blasfema."
    },
    "malenia": {
        name: "Malenia, Espada de Miquella",
        lore: "A semideusa amaldiçoada com a Podridão Escarlate desde o nascimento. Ela possui uma técnica de esgrima perfeita e flutuante. Cercada por borboletas da podridão que anunciam sua flor de decomposição, ela aguarda nas profundezas da Árvore Haligtree pelo retorno do seu irmão gêmeo."
    },
    "morgott": {
        name: "Morgott, o Rei Agouro",
        lore: "Nascido com a mutação maldita dos Agouros e trancado nos esgotos na infância, Morgott foi o único que permaneceu para defender Leyndell e o Trono Prístino durante a Devastação, protegendo a mesma Térvore que o rejeitou e o condenou."
    },
    "mohgh": {
        name: "Mohg, Lorde do Sangue",
        lore: "Irmão gêmeo de Morgott, Mohg abraçou sua maldição de Agouro. Nas profundezas subterrâneas, ele fez contato com uma divindade externa conhecida como a 'Mãe Sem Forma'. Ele utiliza feitiçarias de fogo e sangue puro, raptando Miquella para fundar sua própria dinastia sangrenta."
    },
    "placidusax": {
        name: "Lorde Dragão Placidusax",
        lore: "O Lorde Prístino ancestral que governou eras antes da criação da Térvore. Ele reside fora do próprio tempo, no olho da tempestade eterna de Farum Azula, esperando pelo retorno de seu Deus desaparecido enquanto manipula colossais raios vermelhos destrutivos."
    },
    "maliketh": {
        name: "Maliketh, a Lâmina Negra",
        lore: "A sombra fiel da Rainha Marika. Maliketh selou a própria Runa da Morte Cadente em sua lâmina negra para que nenhum semideus pudesse morrer de verdade. Disfarçado como o Clérigo da Fera, ele guarda o destino do mundo sob vestes pesadas de isolamento."
    }
};

class ParticleSystemBase {
    constructor() {
        this.container = document.getElementById("particle-container");
    }
    clear() { this.container.innerHTML = ""; }
    spawn(type) {
        this.clear();
        if (type === "default") return;
        let color = "#ffd700"; let count = 40; let isButterfly = false;

        switch(type) {
            case "godrick": color = "#a37613"; break;
            case "radahn": color = "#8a2be2"; count = 60; break;
            case "rykard": color = "#ff4500"; break;
            case "malenia": color = "#cfb997"; isButterfly = true; count = 35; break;
            case "morgott": color = "#9acd32"; break;
            case "mohgh": color = "#ff0000"; count = 70; break;
            case "placidusax": color = "#ff3333"; count = 50; break;
            case "maliketh": color = "#cf1b42"; count = 50; break;
        }

        for (let i = 0; i < count; i++) {
            const p = document.createElement("div");
            p.classList.add("particle");
            const size = isButterfly ? Math.random() * 8 + 6 : Math.random() * 5 + 2;
            p.style.width = `${size}px`; p.style.height = `${size}px`;
            p.style.background = color;
            if (isButterfly) {
                p.style.borderRadius = "30% 70% 70% 30% / 30% 30% 70% 70%";
                p.style.boxShadow = `0 0 10px ${color}`;
            } else {
                p.style.boxShadow = `0 0 8px ${color}, 0 0 15px ${color}`;
            }
            p.style.left = `${Math.random() * 100}vw`;
            p.style.animationDuration = `${Math.random() * 5 + 4}s`;
            p.style.animationDelay = `${Math.random() * -5}s`;
            p.style.setProperty("--drift", `${Math.random() * 200 - 100}px`);
            this.container.appendChild(p);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".boss-btn");
    const display = document.querySelector(".boss-display");
    const nameElement = document.getElementById("boss-name");
    const loreElement = document.getElementById("boss-lore");
    const particles = new ParticleSystemBase();

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const bossKey = button.getAttribute("data-boss");
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            document.body.setAttribute("data-theme", bossKey);
            particles.spawn(bossKey);
            display.classList.remove("fade-in");
            void display.offsetWidth;
            if (loreDataBase[bossKey]) {
                nameElement.innerText = loreDataBase[bossKey].name;
                loreElement.innerText = loreDataBase[bossKey].lore;
            }
            display.classList.add("fade-in");
        });
    });
});