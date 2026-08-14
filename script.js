/* =========================================================
   CHÁ DE FRALDAS DA ELÓA
   +
   CULTO DE AÇÃO DE GRAÇAS

   SCRIPT PREMIUM
   VERSÃO COM ANIMAÇÕES
========================================================= */


/* =========================================================
   VARIÁVEIS
========================================================= */

let convidados = [];

const resultado =
    document.getElementById("resultado");

const lista =
    document.getElementById("listaConvidados");

const input =
    document.getElementById("nome");

const musica =
    document.getElementById("musica");

let tocando = false;


/* =========================================================
   NORMALIZAR TEXTO
========================================================= */

function normalizar(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


/* =========================================================
   CARREGAR CONVIDADOS
========================================================= */

async function carregarConvidados() {

    try {

        const resposta =
            await fetch("./convidados.json");

        if (!resposta.ok) {

            throw new Error(
                "Não foi possível carregar convidados.json"
            );

        }

        convidados =
            await resposta.json();

        preencherLista();

    } catch (erro) {

        console.error(
            "Erro ao carregar convidados:",
            erro
        );

        if (lista) {

            lista.innerHTML = `
                <li style="
                    color:#d85b8e;
                    text-align:center;
                ">
                    Não foi possível carregar a lista.
                </li>
            `;

        }

    }

}

carregarConvidados();


/* =========================================================
   PREENCHER LISTA
========================================================= */

function preencherLista() {

    if (!lista) return;

    lista.innerHTML = "";

    convidados.forEach((pessoa) => {

        const li =
            document.createElement("li");

        li.textContent =
            pessoa.nome;

        li.title =
            "Clique para descobrir seu presente";

        li.addEventListener(
            "click",
            () => {

                input.value =
                    pessoa.nome;

                procurarPresente();

            }
        );

        lista.appendChild(li);

    });

}


/* =========================================================
   ENTER NO CAMPO
========================================================= */

if (input) {

    input.addEventListener(
        "keydown",
        function (e) {

            if (e.key === "Enter") {

                e.preventDefault();

                procurarPresente();

            }

        }
    );

}


/* =========================================================
   PROCURAR PRESENTE
========================================================= */

function procurarPresente() {

    if (!input || !resultado) return;

    const nomeDigitado =
        normalizar(input.value);

    if (nomeDigitado === "") {

        mostrarErro(
            "⚠️ Digite seu nome para descobrir seu presente."
        );

        input.focus();

        return;

    }


    const pessoa =
        convidados.find((item) =>

            normalizar(item.nome) ===
            nomeDigitado

        );


    if (!pessoa) {

        mostrarErro(`
            ❌ Nome não encontrado.
            <br><br>
            Verifique se o nome foi digitado
            exatamente como está na lista.
        `);

        return;

    }


    mostrarResultado(pessoa);

    /* efeitos */

    dispararConfetes();

    dispararFogos();

    criarExplosaoCoracoes();

    destacarCampo();

    vibrarCelular();

}


/* =========================================================
   MOSTRAR ERRO
========================================================= */

function mostrarErro(mensagem) {

    resultado.innerHTML = `

        <div style="
            padding:18px;
            border-radius:18px;
            background:#fff1f6;
            border:1px solid #f4c5d7;
            text-align:center;
            color:#c65383;
            font-size:11px;
            line-height:1.6;
            animation: aparecerResultado .4s ease;
        ">

            ${mensagem}

        </div>

    `;

}


/* =========================================================
   MOSTRAR RESULTADO
========================================================= */

function mostrarResultado(pessoa) {

    resultado.innerHTML = `

        <div
            class="resultado-box resultado-premium"
            style="
                position:relative;
                overflow:hidden;
                animation:
                    aparecerResultado .6s ease,
                    destaquePresente 1s ease .2s;
            "
        >

            <div style="
                font-size:32px;
                margin-bottom:5px;
            ">
                🎁
            </div>


            <h3>

                🎉 Parabéns, ${pessoa.nome}!

            </h3>


            <div style="
                margin:12px 0;
                padding:15px;
                border-radius:16px;
                background:rgba(255,255,255,.75);
            ">

                <small style="
                    display:block;
                    color:#b77995;
                    font-size:9px;
                    letter-spacing:1px;
                    margin-bottom:5px;
                ">

                    SEU PRESENTE PARA A ELÓA

                </small>


                <strong style="
                    color:#df5790;
                    font-size:21px;
                ">

                    ${pessoa.presente}

                </strong>

            </div>


            <p>

                💝 O mais importante é sua presença!

                <br><br>

                Mas, se Deus tocar no seu coração
                e você desejar trazer um mimo também,
                a Elóa ficará muito feliz! 🥰

            </p>


            <div style="
                margin-top:15px;
                padding-top:13px;
                border-top:1px solid #f1cfdd;
            ">

                <span style="
                    font-size:18px;
                ">
                    🙏
                </span>

                <br>

                <b style="
                    font-family:'Cormorant Garamond',serif;
                    font-size:17px;
                    color:#716771;
                ">

                    "Os filhos são herança do Senhor."

                </b>

                <br>

                <small style="
                    color:#b77995;
                ">

                    Salmos 127:3

                </small>

            </div>


            <div class="mini-coracoes-resultado">

                💕 💗 💖 💕 💗

            </div>

        </div>

    `;

}


/* =========================================================
   CONFETES
========================================================= */

function dispararConfetes() {

    const quantidade = 150;

    const cores = [

        "#ff4b91",
        "#ff8fba",
        "#ffd54f",
        "#87ceeb",
        "#ffffff",
        "#f7a7c5",
        "#d99cff"

    ];


    for (
        let i = 0;
        i < quantidade;
        i++
    ) {

        const confete =
            document.createElement("div");

        confete.className =
            "confete-eloa";


        confete.style.left =
            Math.random() * 100 + "vw";


        confete.style.background =
            cores[
                Math.floor(
                    Math.random() * cores.length
                )
            ];


        confete.style.width =
            (5 + Math.random() * 7) + "px";


        confete.style.height =
            (7 + Math.random() * 12) + "px";


        confete.style.animationDuration =
            (2.5 + Math.random() * 3) + "s";


        confete.style.animationDelay =
            Math.random() * .8 + "s";


        confete.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        document.body.appendChild(
            confete
        );


        setTimeout(() => {

            confete.remove();

        }, 6500);

    }

}


/* =========================================================
   FOGOS DE ARTIFÍCIO
========================================================= */

function dispararFogos() {

    const quantidadeFogos = 6;


    for (
        let i = 0;
        i < quantidadeFogos;
        i++
    ) {

        setTimeout(() => {

            criarFogo();

        }, i * 350);

    }

}


/* =========================================================
   CRIAR FOGO
========================================================= */

function criarFogo() {

    const centroX =
        15 + Math.random() * 70;

    const centroY =
        15 + Math.random() * 40;


    const cores = [

        "#ff4b91",
        "#ffd54f",
        "#87ceeb",
        "#ffffff",
        "#ff8fba"

    ];


    const cor =
        cores[
            Math.floor(
                Math.random() * cores.length
            )
        ];


    const quantidade = 28;


    for (
        let i = 0;
        i < quantidade;
        i++
    ) {

        const particula =
            document.createElement("div");

        particula.className =
            "fogo-particula";


        const angulo =
            (Math.PI * 2 / quantidade) * i;


        const distancia =
            40 + Math.random() * 90;


        particula.style.left =
            centroX + "vw";


        particula.style.top =
            centroY + "vh";


        particula.style.background =
            cor;


        particula.style.setProperty(
            "--dx",
            Math.cos(angulo) * distancia + "px"
        );


        particula.style.setProperty(
            "--dy",
            Math.sin(angulo) * distancia + "px"
        );


        document.body.appendChild(
            particula
        );


        setTimeout(() => {

            particula.remove();

        }, 1400);

    }


    /* brilho central */

    const brilho =
        document.createElement("div");

    brilho.className =
        "fogo-brilho";

    brilho.style.left =
        centroX + "vw";

    brilho.style.top =
        centroY + "vh";

    brilho.style.background =
        cor;

    document.body.appendChild(
        brilho
    );


    setTimeout(() => {

        brilho.remove();

    }, 900);

}


/* =========================================================
   EXPLOSÃO DE CORAÇÕES
========================================================= */

function criarExplosaoCoracoes() {

    const quantidade = 35;


    for (
        let i = 0;
        i < quantidade;
        i++
    ) {

        const heart =
            document.createElement("div");

        heart.className =
            "heart-explosion";


        heart.innerHTML =
            [
                "💖",
                "💕",
                "💗",
                "💓",
                "💝"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];


        heart.style.left =
            "50%";

        heart.style.top =
            "48%";


        heart.style.setProperty(
            "--x",
            (Math.random() * 500 - 250) + "px"
        );


        heart.style.setProperty(
            "--y",
            (Math.random() * 400 - 250) + "px"
        );


        heart.style.animationDelay =
            Math.random() * .3 + "s";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}


/* =========================================================
   CORAÇÕES SUBINDO
========================================================= */

function criarCoracaoFlutuante() {

    const heart =
        document.createElement("div");


    heart.className =
        "heart-flutuante";


    heart.innerHTML =
        [
            "♡",
            "♥",
            "💗",
            "💖",
            "💕"
        ][
            Math.floor(
                Math.random() * 5
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (14 + Math.random() * 22) + "px";


    heart.style.animationDuration =
        (6 + Math.random() * 7) + "s";


    heart.style.opacity =
        (.25 + Math.random() * .55);


    document.body.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 14000);

}


/* inicia corações */

setInterval(
    criarCoracaoFlutuante,
    1300
);


/* =========================================================
   ESTRELAS
========================================================= */

function criarEstrela() {

    const estrela =
        document.createElement("div");


    estrela.className =
        "estrela-eloa";


    estrela.innerHTML =
        "✦";


    estrela.style.left =
        Math.random() * 100 + "vw";


    estrela.style.top =
        Math.random() * 100 + "vh";


    estrela.style.animationDuration =
        (2 + Math.random() * 3) + "s";


    document.body.appendChild(
        estrela
    );


    setTimeout(() => {

        estrela.remove();

    }, 5000);

}


setInterval(
    criarEstrela,
    900
);


/* =========================================================
   MÚSICA
========================================================= */

function tocarMusica() {

    if (!musica) {

        alert(
            "Arquivo de música não encontrado."
        );

        return;

    }


    if (tocando) {

        musica.pause();

        tocando = false;

        atualizarBotaoMusica(false);

        return;

    }


    musica.volume = 0.30;


    const promessa =
        musica.play();


    if (promessa !== undefined) {

        promessa
            .then(() => {

                tocando = true;

                atualizarBotaoMusica(true);

            })
            .catch((erro) => {

                console.log(
                    "Navegador bloqueou o áudio:",
                    erro
                );

                alert(
                    "Clique novamente no botão para iniciar a música."
                );

            });

    }

}


/* =========================================================
   ATUALIZAR BOTÃO MÚSICA
========================================================= */

function atualizarBotaoMusica(estaTocando) {

    const botoes =
        document.querySelectorAll(
            ".btn-music"
        );


    botoes.forEach((btn) => {

        const icon =
            btn.querySelector(
                ".music-circle"
            );


        const texto =
            btn.querySelector(
                "#musicTexto"
            );


        if (estaTocando) {

            if (icon) {

                icon.innerHTML =
                    "❚❚";

            }

            if (texto) {

                texto.innerHTML =
                    "Pausar Música";

            }

            btn.innerHTML =
                btn.innerHTML
                    .replace(
                        "🎵 Tocar Música",
                        "⏸️ Música Tocando"
                    );

        } else {

            if (icon) {

                icon.innerHTML =
                    "▶";

            }

            if (texto) {

                texto.innerHTML =
                    "Tocar Música";

            }

            btn.innerHTML =
                btn.innerHTML
                    .replace(
                        "⏸️ Música Tocando",
                        "🎵 Tocar Música"
                    );

        }

    });

}


/* =========================================================
   ENTRAR NO CONVITE
========================================================= */

function abrirConvite() {

    const entrada =
        document.getElementById(
            "entrada"
        );


    if (!entrada) {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        return;

    }


    entrada.style.opacity =
        "0";


    entrada.style.visibility =
        "hidden";


    document.body.style.overflow =
        "auto";


    setTimeout(() => {

        entrada.style.display =
            "none";


        const campo =
            document.getElementById(
                "nome"
            );


        if (campo) {

            setTimeout(() => {

                campo.focus();

            }, 500);

        }

    }, 700);


    /* pequenos fogos */

    setTimeout(
        dispararConfetes,
        300
    );


    setTimeout(
        criarExplosaoCoracoes,
        500
    );

}


/* =========================================================
   DESTACAR CAMPO
========================================================= */

function destacarCampo() {

    if (!input) return;


    input.style.transition =
        "all .3s ease";


    input.style.transform =
        "scale(1.03)";


    input.style.boxShadow =
        "0 0 0 4px rgba(232,93,149,.15)";


    setTimeout(() => {

        input.style.transform =
            "scale(1)";

        input.style.boxShadow =
            "none";

    }, 700);

}


/* =========================================================
   VIBRAÇÃO
========================================================= */

function vibrarCelular() {

    if (
        navigator.vibrate
    ) {

        navigator.vibrate([
            80,
            50,
            80
        ]);

    }

}


/* =========================================================
   CONTAGEM REGRESSIVA
========================================================= */

const dataEvento =
    new Date(
        "2026-09-12T17:00:00"
    );


function atualizarContador() {

    const contador =
        document.getElementById(
            "contador"
        );


    if (!contador) return;


    const agora =
        new Date();


    const diferenca =
        dataEvento - agora;


    if (diferenca <= 0) {

        contador.innerHTML =
            "🎉 CHEGOU O GRANDE DIA!";

        return;

    }


    const dias =
        Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (
                diferenca %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutos =
        Math.floor(
            (
                diferenca %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const segundos =
        Math.floor(
            (
                diferenca %
                (1000 * 60)
            ) /
            1000
        );


    contador.innerHTML = `

        <div style="
            display:flex;
            justify-content:center;
            gap:10px;
            flex-wrap:wrap;
        ">

            <span>
                <strong>${dias}</strong>
                <small>dias</small>
            </span>

            <span>
                <strong>${horas}</strong>
                <small>horas</small>
            </span>

            <span>
                <strong>${minutos}</strong>
                <small>min</small>
            </span>

            <span>
                <strong>${segundos}</strong>
                <small>seg</small>
            </span>

        </div>

    `;

}


setInterval(
    atualizarContador,
    1000
);

atualizarContador();


/* =========================================================
   FOCO NO CAMPO
========================================================= */

if (input) {

    input.addEventListener(
        "focus",
        () => {

            input.style.transform =
                "scale(1.02)";

        }
    );


    input.addEventListener(
        "blur",
        () => {

            input.style.transform =
                "scale(1)";

        }
    );

}


/* =========================================================
   ESTILOS DAS ANIMAÇÕES
   INSERIDOS PELO PRÓPRIO SCRIPT
========================================================= */

const estiloAnimacoes =
    document.createElement("style");


estiloAnimacoes.innerHTML = `


/* CORAÇÕES SUBINDO */

.heart-flutuante{

    position:fixed;

    bottom:-50px;

    z-index:2;

    pointer-events:none;

    color:#ed78a6;

    text-shadow:
        0 3px 15px
        rgba(232,93,149,.25);

    animation:
        subirCoracao
        linear forwards;

}


@keyframes subirCoracao{

    0%{

        transform:
            translateY(0)
            rotate(0deg)
            scale(.8);

        opacity:0;

    }

    10%{

        opacity:.7;

    }

    50%{

        transform:
            translateY(-50vh)
            rotate(15deg)
            scale(1);

    }

    100%{

        transform:
            translateY(-115vh)
            rotate(-20deg)
            scale(1.2);

        opacity:0;

    }

}


/* ESTRELAS */

.estrela-eloa{

    position:fixed;

    z-index:1;

    pointer-events:none;

    color:#f3b5cb;

    font-size:12px;

    animation:
        piscarEstrela
        ease-in-out forwards;

}


@keyframes piscarEstrela{

    0%{

        opacity:0;

        transform:scale(.2);

    }

    50%{

        opacity:1;

        transform:scale(1.4);

    }

    100%{

        opacity:0;

        transform:scale(.2);

    }

}


/* CONFETES */

.confete-eloa{

    position:fixed;

    top:-20px;

    z-index:99999;

    pointer-events:none;

    border-radius:2px;

    animation:
        cairConfete
        ease-in forwards;

}


@keyframes cairConfete{

    0%{

        transform:
            translateY(-20px)
            rotate(0deg);

        opacity:1;

    }

    100%{

        transform:
            translateY(110vh)
            rotate(900deg);

        opacity:0;

    }

}


/* FOGOS */

.fogo-particula{

    position:fixed;

    width:7px;

    height:7px;

    z-index:99999;

    pointer-events:none;

    border-radius:50%;

    box-shadow:
        0 0 8px currentColor;

    animation:
        explodirFogo
        1.3s ease-out forwards;

}


@keyframes explodirFogo{

    0%{

        transform:
            translate(-50%,-50%)
            scale(1);

        opacity:1;

    }

    100%{

        transform:
            translate(
                calc(-50% + var(--dx)),
                calc(-50% + var(--dy))
            )
            scale(.1);

        opacity:0;

    }

}


.fogo-brilho{

    position:fixed;

    width:12px;

    height:12px;

    z-index:99998;

    pointer-events:none;

    border-radius:50%;

    transform:translate(-50%,-50%);

    box-shadow:
        0 0 10px 5px currentColor,
        0 0 30px 12px currentColor;

    animation:
        brilhoFogo
        .8s ease-out forwards;

}


@keyframes brilhoFogo{

    0%{

        transform:
            translate(-50%,-50%)
            scale(.2);

        opacity:1;

    }

    100%{

        transform:
            translate(-50%,-50%)
            scale(3);

        opacity:0;

    }

}


/* CORAÇÕES EXPLODINDO */

.heart-explosion{

    position:fixed;

    z-index:99999;

    pointer-events:none;

    font-size:22px;

    animation:
        explodirCoracao
        2s cubic-bezier(.2,.8,.3,1)
        forwards;

}


@keyframes explodirCoracao{

    0%{

        transform:
            translate(-50%,-50%)
            scale(.3);

        opacity:1;

    }

    70%{

        opacity:1;

    }

    100%{

        transform:
            translate(
                calc(-50% + var(--x)),
                calc(-50% + var(--y))
            )
            scale(1.3)
            rotate(30deg);

        opacity:0;

    }

}


/* RESULTADO */

@keyframes aparecerResultado{

    from{

        opacity:0;

        transform:
            translateY(20px)
            scale(.95);

    }

    to{

        opacity:1;

        transform:
            translateY(0)
            scale(1);

    }

}


@keyframes destaquePresente{

    0%{

        transform:scale(.95);

    }

    45%{

        transform:scale(1.03);

    }

    100%{

        transform:scale(1);

    }

}


/* CORAÇÕES DENTRO DO RESULTADO */

.mini-coracoes-resultado{

    margin-top:12px;

    font-size:16px;

    letter-spacing:3px;

    animation:
        pulsarCoracoes
        1.5s infinite;

}


@keyframes pulsarCoracoes{

    0%,
    100%{

        transform:scale(1);

    }

    50%{

        transform:scale(1.08);

    }

}


`;


document.head.appendChild(
    estiloAnimacoes
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.style.overflow =
            "hidden";

    }
);


/* =========================================================
   FIM
========================================================= */
