/* =========================================================
   ELÓA
   CHÁ DE FRALDAS + CULTO DE AÇÃO DE GRAÇAS
   SCRIPT COMPLETO
========================================================= */


/* =========================================================
   VARIÁVEIS
========================================================= */

let convidados = [];

let tocando = false;

const resultado =
    document.getElementById("resultado");

const lista =
    document.getElementById("listaConvidados");

const input =
    document.getElementById("nome");

const musica =
    document.getElementById("musica");


/* =========================================================
   NORMALIZAR TEXTO
   Remove acentos e facilita a busca
========================================================= */

function normalizar(texto) {

    return String(texto || "")
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
            await fetch("convidados.json", {
                cache: "no-store"
            });


        if (!resposta.ok) {

            throw new Error(
                "Não foi possível carregar convidados.json"
            );

        }


        convidados =
            await resposta.json();


        if (!Array.isArray(convidados)) {

            throw new Error(
                "O arquivo convidados.json precisa conter uma lista."
            );

        }


        preencherLista();


    } catch (erro) {

        console.error(
            "Erro ao carregar convidados:",
            erro
        );


        if (lista) {

            lista.innerHTML = `

                <li style="
                    grid-column:1/-1;
                    text-align:center;
                    color:#b24e71;
                ">

                    ⚠️ Não foi possível carregar
                    a lista de convidados.

                </li>

            `;

        }

    }

}


/* =========================================================
   INICIAR
========================================================= */

carregarConvidados();


/* =========================================================
   PREENCHER LISTA DE CONVIDADOS
========================================================= */

function preencherLista() {

    if (!lista) return;


    lista.innerHTML = "";


    convidados.forEach((pessoa) => {


        if (!pessoa || !pessoa.nome) {
            return;
        }


        const li =
            document.createElement("li");


        li.textContent =
            pessoa.nome;


        li.setAttribute(
            "title",
            "Clique para descobrir seu presente"
        );


        li.addEventListener(
            "click",
            function () {

                if (input) {

                    input.value =
                        pessoa.nome;

                    input.focus();

                }


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
        "keypress",
        function (evento) {

            if (
                evento.key === "Enter"
            ) {

                evento.preventDefault();

                procurarPresente();

            }

        }
    );

}


/* =========================================================
   PESQUISAR PRESENTE
========================================================= */

function procurarPresente() {

    if (!resultado) return;


    const nomeDigitado =
        normalizar(
            input ? input.value : ""
        );


    /* -----------------------------------------
       CAMPO VAZIO
    ----------------------------------------- */

    if (nomeDigitado === "") {

        resultado.innerHTML = `

            <div class="erro">

                ⚠️ Digite seu nome
                para descobrir seu presente.

            </div>

        `;


        if (input) {

            input.focus();

        }


        return;

    }


    /* -----------------------------------------
       PROCURAR
    ----------------------------------------- */

    const pessoa =
        convidados.find(
            function (item) {

                return (
                    normalizar(item.nome) ===
                    nomeDigitado
                );

            }
        );


    /* -----------------------------------------
       NÃO ENCONTRADO
    ----------------------------------------- */

    if (!pessoa) {

        resultado.innerHTML = `

            <div class="erro">

                ❌ Nome não encontrado.

                <br><br>

                Verifique se o nome foi digitado
                exatamente como aparece na lista.

            </div>

        `;


        return;

    }


    /* -----------------------------------------
       ENCONTRADO
    ----------------------------------------- */

    mostrarResultado(pessoa);


    dispararConfetes();

}


/* =========================================================
   MOSTRAR RESULTADO
========================================================= */

function mostrarResultado(pessoa) {

    if (!resultado) return;


    const nome =
        pessoa.nome || "Convidado";


    const presente =
        pessoa.presente ||
        pessoa.item ||
        "Um mimo especial";


    resultado.innerHTML = `

        <div class="cardResultado">

            <div style="
                font-size:32px;
                margin-bottom:8px;
            ">

                🎁

            </div>


            <h2>

                ❤️ Olá, ${escaparHTML(nome)}

            </h2>


            <h1>

                ${escaparHTML(presente)}

            </h1>


            <p>

                💝 O mais importante
                é sua presença!

                <br><br>

                Mas, se Deus tocar no seu coração
                e você desejar trazer esse mimo,
                a Elóa ficará muito feliz. 🥰

            </p>


            <br>


            <p>

                📖

                <b>

                    "Os filhos são herança do Senhor."

                </b>

                <br>

                Salmos 127:3

            </p>


        </div>

    `;

}


/* =========================================================
   PROTEÇÃO BÁSICA CONTRA HTML
========================================================= */

function escaparHTML(texto) {

    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   CONFETES
========================================================= */

function dispararConfetes() {


    const quantidade = 120;


    const cores = [

        "#ff4b91",
        "#87ceeb",
        "#ffd54f",
        "#ffffff",
        "#ffb6c1",
        "#e8a0bb"

    ];


    for (
        let i = 0;
        i < quantidade;
        i++
    ) {


        const confete =
            document.createElement("div");


        confete.className =
            "confete";


        confete.style.left =
            Math.random() * 100 + "vw";


        confete.style.backgroundColor =
            cores[
                Math.floor(
                    Math.random() *
                    cores.length
                )
            ];


        confete.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) + "s";


        confete.style.animationDelay =
            (
                Math.random() * .8
            ) + "s";


        confete.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        document.body.appendChild(
            confete
        );


        setTimeout(
            function () {

                confete.remove();

            },
            5500
        );

    }

}


/* =========================================================
   MÚSICA
========================================================= */

function tocarMusica() {

    if (!musica) {

        console.warn(
            "Elemento de música não encontrado."
        );

        return;

    }


    if (tocando) {

        musica.pause();

        tocando = false;

        atualizarBotoesMusica(false);


    } else {


        musica.volume = 0.30;


        const promessa =
            musica.play();


        if (
            promessa !== undefined
        ) {

            promessa
                .then(function () {

                    tocando = true;

                    atualizarBotoesMusica(true);

                })
                .catch(function (erro) {

                    console.warn(
                        "O navegador bloqueou a reprodução:",
                        erro
                    );

                    tocando = false;

                    atualizarBotoesMusica(false);

                });

        } else {

            tocando = true;

            atualizarBotoesMusica(true);

        }

    }

}


/* =========================================================
   ATUALIZAR BOTÕES DE MÚSICA
========================================================= */

function atualizarBotoesMusica(estaTocando) {


    const botoes =
        document.querySelectorAll(
            ".btn-music"
        );


    botoes.forEach(
        function (botao) {


            if (
                botao.classList.contains(
                    "music-button"
                )
            ) {


                const icone =
                    botao.querySelector(
                        ".music-play-icon"
                    );


                const titulo =
                    botao.querySelector(
                        ".music-text strong"
                    );


                const subtitulo =
                    botao.querySelector(
                        ".music-text small"
                    );


                if (icone) {

                    icone.textContent =
                        estaTocando
                            ? "⏸️"
                            : "🎵";

                }


                if (titulo) {

                    titulo.textContent =
                        estaTocando
                            ? "Música tocando"
                            : "Música do Convite";

                }


                if (subtitulo) {

                    subtitulo.textContent =
                        estaTocando
                            ? "Toque para pausar"
                            : "Toque para ouvir nossa música";

                }


            } else {


                botao.innerHTML =
                    estaTocando
                        ? "⏸️ Pausar música"
                        : "🎵 Tocar música";

            }

        }
    );

}


/* =========================================================
   QUANDO A MÚSICA TERMINAR
========================================================= */

if (musica) {

    musica.addEventListener(
        "pause",
        function () {

            if (
                musica.currentTime ===
                musica.duration
            ) {

                tocando = false;

                atualizarBotoesMusica(
                    false
                );

            }

        }
    );

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


    /*
       O novo index pode não ter
       contador visível.

       Nesse caso simplesmente
       não faz nada.
    */

    if (!contador) {

        return;

    }


    const agora =
        new Date();


    const diferenca =
        dataEvento - agora;


    /* -----------------------------------------
       EVENTO CHEGOU
    ----------------------------------------- */

    if (
        diferenca <= 0
    ) {

        contador.innerHTML = `

            <div style="
                font-size:26px;
                margin-bottom:8px;
            ">

                🎉

            </div>

            <strong>

                Chegou o grande dia!

            </strong>

        `;


        return;

    }


    /* -----------------------------------------
       CÁLCULOS
    ----------------------------------------- */

    const dias =
        Math.floor(
            diferenca /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const horas =
        Math.floor(
            (
                diferenca %
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            ) /
            (
                1000 *
                60 *
                60
            )
        );


    const minutos =
        Math.floor(
            (
                diferenca %
                (
                    1000 *
                    60 *
                    60
                )
            ) /
            (
                1000 *
                60
            )
        );


    const segundos =
        Math.floor(
            (
                diferenca %
                (
                    1000 *
                    60
                )
            ) /
            1000
        );


    contador.innerHTML = `

        <div class="contador-grid">

            <div>

                <strong>
                    ${dias}
                </strong>

                <span>
                    dias
                </span>

            </div>


            <div>

                <strong>
                    ${horas}
                </strong>

                <span>
                    horas
                </span>

            </div>


            <div>

                <strong>
                    ${minutos}
                </strong>

                <span>
                    min
                </span>

            </div>


            <div>

                <strong>
                    ${segundos}
                </strong>

                <span>
                    seg
                </span>

            </div>

        </div>

    `;

}


/* =========================================================
   INICIAR CONTADOR
========================================================= */

setInterval(
    atualizarContador,
    1000
);

atualizarContador();


/* =========================================================
   CORAÇÕES FLUTUANDO
========================================================= */

function criarCoracao() {


    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "heart";


    heart.innerHTML =
        "💖";


    heart.style.left =
        Math.random() *
        100 +
        "vw";


    heart.style.fontSize =
        (
            18 +
            Math.random() * 22
        ) +
        "px";


    heart.style.animationDuration =
        (
            6 +
            Math.random() * 5
        ) +
        "s";


    document.body.appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        11000
    );

}


setInterval(
    criarCoracao,
    2200
);


/* =========================================================
   FOCO NO CAMPO
========================================================= */

window.addEventListener(
    "load",
    function () {


        if (!input) {

            return;

        }


        /*
           Não força o foco no celular.
           No computador pode facilitar
           a busca do convidado.
        */

        if (
            window.innerWidth >
            700
        ) {

            setTimeout(
                function () {

                    input.focus();

                },
                500
            );

        }

    }
);


/* =========================================================
   ANIMAÇÃO DO INPUT
========================================================= */

if (input) {


    input.addEventListener(
        "focus",
        function () {

            input.style.transform =
                "scale(1.015)";

        }
    );


    input.addEventListener(
        "blur",
        function () {

            input.style.transform =
                "scale(1)";

        }
    );

}


/* =========================================================
   ABRIR CONVITE
   Compatível com o novo index.html
========================================================= */

function abrirConvite() {


    const entrada =
        document.getElementById(
            "entrada"
        );


    if (!entrada) {

        return;

    }


    entrada.style.opacity =
        "0";

    entrada.style.pointerEvents =
        "none";


    /*
       Tentar iniciar a música.
       Como a ação veio do clique
       do usuário, o navegador
       normalmente permite.
    */

    if (musica) {


        musica.volume =
            0.30;


        const promessa =
            musica.play();


        if (
            promessa !== undefined
        ) {


            promessa
                .then(function () {

                    tocando = true;

                    atualizarBotoesMusica(
                        true
                    );

                })
                .catch(function () {

                    tocando = false;

                    atualizarBotoesMusica(
                        false
                    );

                });


        } else {

            tocando = true;

            atualizarBotoesMusica(
                true
            );

        }

    }


    /*
       Confetes de entrada
    */

    dispararConfetes();


    setTimeout(
        function () {

            entrada.style.display =
                "none";

        },
        850
    );

}


/* =========================================================
   SCROLL SUAVE PARA ÂNCORAS
========================================================= */

document.addEventListener(
    "click",
    function (evento) {


        const link =
            evento.target.closest(
                'a[href^="#"]'
            );


        if (!link) {

            return;

        }


        const destino =
            link.getAttribute(
                "href"
            );


        if (
            !destino ||
            destino === "#"
        ) {

            return;

        }


        const elemento =
            document.querySelector(
                destino
            );


        if (!elemento) {

            return;

        }


        evento.preventDefault();


        elemento.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }
);


/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

window.addEventListener(
    "scroll",
    function () {


        const botao =
            document.getElementById(
                "btnTopo"
            );


        if (!botao) {

            return;

        }


        if (
            window.scrollY >
            500
        ) {

            botao.classList.add(
                "mostrar"
            );

        } else {

            botao.classList.remove(
                "mostrar"
            );

        }

    }
);


/* =========================================================
   ESCUTAR TECLA ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (evento) {


        if (
            evento.key !== "Escape"
        ) {

            return;

        }


        /*
           Se a música estiver tocando,
           ESC pausa.
        */

        if (
            musica &&
            tocando
        ) {

            musica.pause();

            tocando = false;

            atualizarBotoesMusica(
                false
            );

        }

    }
);


/* =========================================================
   VISIBILIDADE DA PÁGINA
========================================================= */

document.addEventListener(
    "visibilitychange",
    function () {


        /*
           Não reinicia a música
           automaticamente quando
           o usuário volta à página.
        */

        if (
            document.hidden
        ) {

            return;

        }

    }
);


/* =========================================================
   FIM DO SCRIPT
========================================================= */
