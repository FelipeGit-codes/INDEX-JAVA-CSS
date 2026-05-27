const talismasData = [
    // === CATEGORIA: STATUS ===
    {
        name: "Favor da Térvore +2",
        category: "status",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtrees_favor_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Retrata a bênção direta de Marika. Aumenta os PV, estamina e carga de equipamento. Simboliza a era gloriosa da Árvore antes do Caos."
    },
    {
        name: "Medalhão de Âmbar Carmesim +3",
        category: "status",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crimson_amber_medallion_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Contém resina de âmbar primordial da Térvore. Concede o maior aumento bruto de vida útil (PV) do jogo para o portador."
    },
    {
        name: "Medalhão de Âmbar Viridiano +3",
        category: "status",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/viridian_amber_medallion_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Medalhão com âmbar esverdeado. Eleva a barra de estamina ao limite máximo, permitindo sequências ininterruptas de esquivas."
    },
    {
        name: "Medalhão de Âmbar Cerúleo +3",
        category: "status",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cerulean_amber_medallion_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Feito de seiva azul petrificada. Expande drasticamente os Pontos de Foco (PF), cruciais para magos e habilidades de armas."
    },
    {
        name: "Grande Escudo de Arsenal de Trindade",
        category: "status",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great-jars_knuckle_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Um talismã dado pelo Grande Pote de Caelid. Aumenta massivamente a carga máxima de equipamento, permitindo usar as armaduras mais pesadas."
    },
    {
        name: "Marca de Ferida de Radagon",
        category: "status",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/radagons_soreseal_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Um selo rúnico gravado diretamente nos olhos do herói Radagon. Aumenta vigor, fortitude, força e destreza, mas faz você sofrer mais dano."
    },
    {
        name: "Marca de Ferida de Marika",
        category: "status",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marikas_soreseal_talisman_elden_ring_wiki_guide_200px.png",
        lore: "O selo rúnico solene da Rainha Marika. Concede +5 pontos em Mente, Inteligência, Fé e Arcano, mas aumenta todo o dano recebido."
    },

    // === CATEGORIA: COMBATE ===
    {
        name: "Estilhaço de Alexander",
        category: "combate",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shard_of_alexander_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Um pedaço colhido do bravo punho de Alexander. Potencializa o poder de ataque de absolutamente todas as Cinzas de Guerra e habilidades."
    },
    {
        name: "Insignia de Espada Alada Podre",
        category: "combate",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_winged_sword_insignia_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Simboliza a dança da Espada de Malenia. Quanto mais golpes consecutivos você desferir contra os alvos, maior se torna seu dano físico."
    },
    {
        name: "Prótese de Millicent",
        category: "combate",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/millicents_prosthesis_talisman_elden_ring_wiki_guide_200px.png",
        lore: "A prótese mecânica de Millicent, manchada de sangue. Aumenta a destreza e concede acréscimo de dano físico a ataques em sequência rápida."
    },
    {
        name: "Exultação do Lorde do Sangue",
        category: "combate",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lord_of_bloods_exultation_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Usado pelos servos da Dinastia Moghwyn. Sempre que alguém sangrar ou sofrer hemorragia por perto, o dano do portador sobe 20%."
    },
    {
        name: "Exultação do Membro da Podridão",
        category: "combate",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/kindred_of_rots_exultation_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Abordado pelos adoradores da podridão de Caelid. Dispara o poder de ataque caso envenenamento ou podridão escarlate ocorra por perto."
    },
    {
        name: "Talismã de Espada de Garra",
        category: "combate",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/claw_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Retrata os assassinos de asas de Leyndell. Melhora substancialmente o dano causado por ataques pulados pesados."
    },
    {
        name: "Talismã de Espada Ritual",
        category: "combate",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ritual_sword_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Bênção dada antes do combate ritual. Aumenta consideravelmente todo o seu poder de ataque enquanto sua barra de vida estiver 100% cheia."
    },
    {
        name: "Talismã de Lança",
        category: "combate",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spear_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Melhora os ataques de contra-ataque perfurantes exclusivos de armas como lanças e estoques enquanto o inimigo está atacando."
    },

    // === CATEGORIA: DEFESA ===
    {
        name: "Talismã de Grande Escudo de Dragão de Couro",
        category: "defesa",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragoncrest_greatshield_talisman_elden_ring_wiki_guide_200px.png",
        lore: "O maior artefato defensivo do jogo. Mitiga uma enorme porcentagem de qualquer dano físico físico bruto recebido por monstros ou armas."
    },
    {
        name: "Talismã de Escudo de Dragão de Ouro +2",
        category: "defesa",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_braid_talisman_shadow_of_the_erdtree_wiki_guide_200px.png",
        lore: "O amuleto definitivo para anular magias de luz e milagres. Oferece imensa proteção contra danos de elemento Sagrado."
    },
    {
        name: "Talismã de Dragão de Perlados +3",
        category: "defesa",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pearl drake_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Um escudo místico de dragão perolado. Concede proteção simultânea contra todos os elementos não-físicos (Magia, Fogo, Raio, Sagrado)."
    },
    {
        name: "Talismã de Dragão de Fogo +3",
        category: "defesa",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flamedrake_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Usado pelos caçadores de dragões antigos. Reduz em níveis extremos o dano sofrido por chamas, piromancias ou sopros de dragão."
    },
    {
        name: "Talismã de Dragão de Raio +3",
        category: "defesa",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/boltdrake_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Amuleto com o brasão do dragão azul. Excelente para anular ataques elétricos e os raios vermelhos de Farum Azula."
    },
    {
        name: "Talismã de Escudo de Cabelo",
        category: "defesa",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatshield_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Fortalece a postura. Melhora a capacidade de guarda do seu escudo, reduzindo o consumo de estamina ao bloquear ataques inimigos."
    },
    {
        name: "Talismã de Escudo Ritual",
        category: "defesa",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ritual_shield_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Reduz drasticamente o dano do primeiro golpe recebido caso sua vida esteja completamente cheia. Evita mortes instantâneas (*one-shots*)."
    },

    // === CATEGORIA: MAGIA ===
    {
        name: "Ícone de Radagon",
        category: "magia",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/radagons_icon_talisman_elden_ring_wiki_guide_200px.png",
        lore: "O amuleto do lendário Radagon. Acelera brutalmente a velocidade de conjuração de qualquer feitiço de Inteligência ou encantamento de Fé."
    },
    {
        name: "Ícone de Godfrey",
        category: "magia",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godfreys_icon_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Retrata o primeiro Lorde Prístino, Godfrey. Aumenta de forma devastadora o poder de ataque de magias e habilidades que podem ser carregadas."
    },
    {
        name: "Talismã de Massa de Gravações de Feitiço",
        category: "magia",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/graven-mass_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Contém o pesadelo de mentes fundidas da Academia Raya Lucaria. Concede o maior bônus de dano passivo para todas as feitiçarias de brilho."
    },
    {
        name: "Talismã de Tela de Lanches de Rebanho",
        category: "magia",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flocks_canvas_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Bordado com orações fervorosas dos sábios de Gowry. Melhora massivamente a eficácia e o poder destrutivo de Milagres e Encantamentos."
    },
    {
        name: "Amuleto de Escorpião Mágico",
        category: "magia",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/magic_scorpion_charm_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Infiltrado na linha de missões de Seluvis. Aumenta todo o dano do elemento Magia em 12%, mas fragiliza suas defesas físicas corporais."
    },
    {
        name: "Amuleto de Escorpião Sagrado",
        category: "magia",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacred_scorpion_charm_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Símbolo dos cavaleiros santos. Eleva o dano sagrado e ataques de luz ao custo de reduzir a resistência física do usuário."
    },
    {
        name: "Talismã de Lâmina de Pedra Prístina",
        category: "magia",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/primal_glintstone_blade_talisman_elden_ring_wiki_guide_200px.png",
        lore: "Diminui o custo de consumo de PF ao conjurar feitiços, sacrificando uma pequena parcela da sua vida máxima (PV)."
    },

    // === CATEGORIA: EXPANSÃO (DLC) ===
    {
        name: "Trança Dourada de Marika",
        category: "dlc",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_braid_talisman_shadow_of_the_erdtree_wiki_guide_200px.png",
        lore: "Uma relíquia sagrada contendo uma trança real cortada de Marika no Vilarejo Xamã. Concede a maior negação de dano sagrado existente."
    },
    {
        name: "Poeira Estelar Amada",
        category: "dlc",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beloved_stardust_talisman_shadow_of_the_erdtree_wiki_guide_200px.png",
        lore: "Dado por Metyr, a Mãe dos Dedos. Leva a velocidade de conjuração ao limite máximo absoluto instantaneamente, mas penaliza suas resistências."
    },
    {
        name: "Talismã de Lorde Idoso de Selo",
        category: "dlc",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/aged_ones_exultation_talisman_shadow_of_the_erdtree_wiki_guide_200px.png",
        lore: "Originado do sofrimento de Midra na floresta abissal. Aumenta substancialmente o poder de ataque se houver loucura ou chama frenética por perto."
    },
    {
        name: "Talismã de Semente de Árvore Sombria",
        category: "dlc",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/talisman_of_all_crucibles_shadow_of_the_erdtree_wiki_guide_200px.png",
        lore: "Contém vestígios do Crisol primordial sob a Terra das Sombras. Melhora as jogadas de esquiva de costas e fintas de combate."
    },
    {
        name: "Insígnia de Linha de Lâmina Externa",
        category: "dlc",
        img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/outer_god_heirloom_shadow_of_the_erdtree_wiki_guide_200px.png",
        lore: "Representa a herança direta e oculta de um Deus Exterior. Concede um bônus maciço fixo ao atributo de Arcane (+5)."
    }
];

// Lógica de Renderização e Filtros de Abas
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("talismas-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const particleContainer = document.getElementById("particle-container");

    // Função para renderizar os talismãs com base no filtro
    function renderTalismas(filter = "all") {
        grid.innerHTML = ""; // Limpa a grade antiga
        
        const filteredData = filter === "all" 
            ? talismasData 
            : talismasData.filter(item => item.category === filter);

        filteredData.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("talisma-card");
            card.className = "talisma-card fade-in";
            
            card.innerHTML = `
                <div class="talisma-img-wrapper">
                    <img src="${item.img}" alt="${item.name}" onerror="this.src='https://eldenring.wiki.fextralife.com/file/Elden-Ring/talisman_elden_ring_wiki_guide_200px.png'">
                </div>
                <h3>${item.name}</h3>
                <p>${item.lore}</p>
            `;
            grid.appendChild(card);
        });
    }

    // Gerenciador de eventos dos botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            const targetFilter = button.getAttribute("data-filter");
            renderTalismas(targetFilter);
        });
    });

    // Inicializar carregando todos os itens
    renderTalismas("all");

    // Invocação das Partículas de Ambiente (Pó de Ouro Reluzente RPG)
    for (let i = 0; i < 35; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        const size = Math.random() * 4 + 2;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.background = "#ffd700";
        p.style.boxShadow = "0 0 6px #ffd700, 0 0 10px #c5a880";
        p.style.left = `${Math.random() * 100}vw`;
        p.style.animationDuration = `${Math.random() * 6 + 5}s`;
        p.style.animationDelay = `${Math.random() * -5}s`;
        p.style.setProperty("--drift", `${Math.random() * 100 - 50}px`);
        particleContainer.appendChild(p);
    }
});