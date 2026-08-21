function criarJogo() {

    const jogo = document.querySelector("#jogo");

    // Limpa o jogo antes de criar novamente
    jogo.innerHTML = "";


    // =========================
    // CRIAR 100 QUADRADOS
    // =========================

    for (let i = 0; i < 100; i++) {

        const box = document.createElement("div");

        box.id = i + 1;
        box.className = "quadrado";
        box.textContent = i + 1;

        jogo.appendChild(box);
    }


    // =========================
    // VETORES
    // =========================

    let bomba = [];
    let roubaPista = [];
    let revelarPista = [];
    let espiarPista = [];
    let trocarPista = [];
    let conferirNumero = [];
    let dica = [];


    // Guarda posições já utilizadas
    let usados = [];


    // =========================
    // BOMBAS - 25
    // =========================

    for (let i = 0; i < 25; i++) {

        let x = Math.floor(Math.random() * 100);

        while (usados.includes(x)) {
            x = Math.floor(Math.random() * 100);
        }

        bomba.push(x);
        usados.push(x);

        document.getElementById(x + 1).addEventListener("click", function () {

            criarBomba();

            this.remove();

        });
    }


    // =========================
    // ROUBA PISTA - 7
    // =========================

    for (let i = 0; i < 7; i++) {

        let x = Math.floor(Math.random() * 100);

        while (usados.includes(x)) {
            x = Math.floor(Math.random() * 100);
        }

        roubaPista.push(x);
        usados.push(x);

        document.getElementById(x + 1).addEventListener("click", function () {

            criarAcao1();

            this.remove();

        });
    }


    // =========================
    // REVELAR PISTA - 7
    // =========================

    for (let i = 0; i < 7; i++) {

        let x = Math.floor(Math.random() * 100);

        while (usados.includes(x)) {
            x = Math.floor(Math.random() * 100);
        }

        revelarPista.push(x);
        usados.push(x);

        document.getElementById(x + 1).addEventListener("click", function () {

            criarAcao2();

            this.remove();

        });
    }


    // =========================
    // ESPIAR PISTA - 7
    // =========================

    for (let i = 0; i < 7; i++) {

        let x = Math.floor(Math.random() * 100);

        while (usados.includes(x)) {
            x = Math.floor(Math.random() * 100);
        }

        espiarPista.push(x);
        usados.push(x);

        document.getElementById(x + 1).addEventListener("click", function () {

            criarAcao3();

            this.remove();

        });
    }


    // =========================
    // TROCAR PISTA - 4
    // =========================

    for (let i = 0; i < 4; i++) {

        let x = Math.floor(Math.random() * 100);

        while (usados.includes(x)) {
            x = Math.floor(Math.random() * 100);
        }

        trocarPista.push(x);
        usados.push(x);

        document.getElementById(x + 1).addEventListener("click", function () {

            criarAcao4();

            this.remove();

        });
    }


    // =========================
    // CONFERIR NUMERO - 5
    // =========================

    for (let i = 0; i < 5; i++) {

        let x = Math.floor(Math.random() * 100);

        while (usados.includes(x)) {
            x = Math.floor(Math.random() * 100);
        }

        conferirNumero.push(x);
        usados.push(x);

        document.getElementById(x + 1).addEventListener("click", function () {

            criarAcao5();

            this.remove();

        });
    }


    // =========================
    // DICAS - 45
    // =========================

    for (let i = 0; i < 45; i++) {

        let x = Math.floor(Math.random() * 100);

        while (usados.includes(x)) {
            x = Math.floor(Math.random() * 100);
        }

        dica.push(x);
        usados.push(x);

        document.getElementById(x + 1).addEventListener("click", function () {

            criarDica();

            this.remove();

        });
    }


    // =========================
    // MOSTRAR VETORES
    // =========================

    console.log("Bomba:", bomba);
    console.log("Rouba Pista:", roubaPista);
    console.log("Revelar Pista:", revelarPista);
    console.log("Espiar Pista:", espiarPista);
    console.log("Trocar Pista:", trocarPista);
    console.log("Conferir Número:", conferirNumero);
    console.log("Dica:", dica);
}


// ===================================
// FUNÇÃO DICA
// ===================================

function criarDica() {

    const dica = document.createElement("div");

    dica.setAttribute("class", "tipo dica");

    dica.textContent = "?";

    dica.onclick = function () {
        dica.remove();
    };

    document.body.appendChild(dica);
}


// ===================================
// FUNÇÃO BOMBA
// ===================================

function criarBomba() {

    const bomba = document.createElement("div");

    bomba.setAttribute("class", "tipo bomba");

    bomba.textContent = "X";

    bomba.onclick = function () {
        bomba.remove();
    };

    document.body.appendChild(bomba);
}


// ===================================
// ROUBA PISTA
// ===================================

function criarAcao1() {

    const acao = document.createElement("div");

    acao.setAttribute("class", "tipo acao1");

    acao.textContent = "RoP";

    acao.onclick = function () {
        acao.remove();
    };

    document.body.appendChild(acao);
}


// ===================================
// REVELAR PISTA
// ===================================

function criarAcao2() {

    const acao = document.createElement("div");

    acao.setAttribute("class", "tipo acao2");

    acao.textContent = "ReP";

    acao.onclick = function () {
        acao.remove();
    };

    document.body.appendChild(acao);
}


// ===================================
// ESPIAR PISTA
// ===================================

function criarAcao3() {

    const acao = document.createElement("div");

    acao.setAttribute("class", "tipo acao3");

    acao.textContent = "EsP";

    acao.onclick = function () {
        acao.remove();
    };

    document.body.appendChild(acao);
}


// ===================================
// TROCAR PISTA
// ===================================

function criarAcao4() {

    const acao = document.createElement("div");

    acao.setAttribute("class", "tipo acao4");

    acao.textContent = "TrP";

    acao.onclick = function () {
        acao.remove();
    };

    document.body.appendChild(acao);
}


// ===================================
// CONFERIR NUMERO
// ===================================

function criarAcao5() {

    const acao = document.createElement("div");

    acao.setAttribute("class", "tipo acao5");

    acao.textContent = "CnfN";

    acao.onclick = function () {
        acao.remove();
    };

    document.body.appendChild(acao);
}