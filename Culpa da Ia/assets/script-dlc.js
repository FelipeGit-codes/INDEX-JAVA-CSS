const loreDataDLC = {
    "dlc-default": {
        name: "O Casulo Oculto",
        lore: "Explore os segredos daqueles que guardam as fronteiras do reino de sombras de Miquella. Cuidado com as cinzas e as traições enterradas sob a árvore caída."
    },
    "messmer": {
        name: "Messmer, o Empalador",
        lore: "Filho de Marika que herdou uma terrível chama capaz de queimar a própria Térvore. Condenado a liderar uma purificação violenta na Terra das Sombras, ele foi banido e esquecido por sua mãe nesta escuridão profunda, convivendo com cobras e ódio eterno."
    },
    "romina": {
        name: "Romina, Santa do Broto",
        lore: "Após ver seus templos serem purificados pelo fogo das tropas de Messmer, Romina cultivou as cinzas remanescentes misturando-as com a Podridão Escarlate original. Ela costurou essa praga em si mesma, tornando-se a borboleta e o broto mãe deste reino desolado."
    },
    "radahn-miquella": {
        name: "Consorte Prometido Radahn (Ápice)",
        lore: "A alma do General Radahn instalada em um receptáculo físico perfeito pelas preces de Miquella. Erguendo-se no ápice de sua juventude e força e abençoado com a luz sagrada da divindade emergente de Miquella, ele executa ataques gravitacionais colossais infundidos com feixes divinos."
    },
    "midra": {
        name: "Midra, Senhor da Chama Frenética",
        lore: "Um homem que falhou em conter a dor. Torturado por séculos em sua mansão isolada nas profundezas da floresta abissal, Midra sucumbiu ao sofrimento extremo, decapitando-se para dar lugar ao sol derretido da Chama Frenética Absoluta."
    },
    "bayle": {
        name: "Bayle, o Temível",
        lore: "O dragão ancestral rebelde que duelou contra o Lorde Dragão Placidusax em uma batalha titânica que rasgou os céus. Bayle sobreviveu nas encostas do Pico Jagged, banhado em chamas elétricas laranjas e magmáticas, impulsionado pelo puro ódio violento."
    }
};

class ParticleSystemDLC {
    constructor() {
        this.container = document.getElementById("particle-container");
    }
    clear() { this.container.innerHTML = ""; }
    spawn(type) {
        this.clear();
        if (type === "dlc-default") return;
        let color = "#ffd700"; let count = 40; let isButterfly = false;

        switch(type) {
            case "messmer": color = "#e61919"; count = 60; break;
            case "romina": color = "#ba55d3"; isButterfly = true; break;
            case "radahn-miquella": color = "#fff7c2"; count = 60; break;
            case "midra": color = "#ff8c00"; count = 80; break;
            case "bayle": color = "#ff4500"; count = 50; break;
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
    const particles = new ParticleSystemDLC();

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const bossKey = button.getAttribute("data-boss");
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            document.body.setAttribute("data-theme", bossKey);
            particles.spawn(bossKey);
            display.classList.remove("fade-in");
            void display.offsetWidth;
            if (loreDataDLC[bossKey]) {
                nameElement.innerText = loreDataDLC[bossKey].name;
                loreElement.innerText = loreDataDLC[bossKey].lore;
            }
            display.classList.add("fade-in");
        });
    });
});