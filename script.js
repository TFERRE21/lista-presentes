/*====================================================
CHÁ DE FRALDAS + CULTO DE AÇÃO DE GRAÇAS DA ELÓA
SCRIPT PREMIUM
====================================================*/


/*====================================================
VARIÁVEIS
====================================================*/

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


/*====================================================
NORMALIZAR TEXTO
Remove acentos e espaços extras
====================================================*/

function normalizar(texto){

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .trim();

}


/*====================================================
CARREGAR CONVIDADOS
====================================================*/

async function carregarConvidados(){

    try{

        const resposta =
            await fetch("convidados.json");

        if(!resposta.ok){

            throw new Error(
                "Não foi possível carregar convidados.json"
            );

        }

        convidados =
            await resposta.json();

        preencherLista();

    }

    catch(erro){

        console.error(
            "Erro ao carregar convidados:",
            erro
        );

        if(lista){

            lista.innerHTML = `

                <li>

                    ⚠️ Não foi possível
                    carregar a lista.

                </li>

            `;

        }

    }

}


/*====================================================
INICIAR
====================================================*/

carregarConvidados();


/*====================================================
PREENCHER LISTA DE CONVIDADOS
====================================================*/

function preencherLista(){

    if(!lista){

        return;

    }

    lista.innerHTML = "";

    convidados.forEach(pessoa => {

        const li =
            document.createElement("li");

        li.textContent =
            pessoa.nome;

        li.addEventListener(
            "click",
            function(){

                if(input){

                    input.value =
                        pessoa.nome;

                    procurarPresente();

                }

            }
        );

        lista.appendChild(li);

    });

}


/*====================================================
PESQUISA COM ENTER
====================================================*/

if(input){

    input.addEventListener(
        "keypress",
        function(e){

            if(e.key === "Enter"){

                e.preventDefault();

                procurarPresente();

            }

        }
    );

}


/*====================================================
PESQUISAR PRESENTE
====================================================*/

function procurarPresente(){

    if(!input || !resultado){

        return;

    }

    const nomeDigitado =
        normalizar(input.value);

    /*----------------------------------------------
    CAMPO VAZIO
    ----------------------------------------------*/

    if(nomeDigitado === ""){

        resultado.innerHTML = `

            <div class="erro">

                ⚠️ Digite seu nome para
                descobrir seu presente.

            </div>

        `;

        input.focus();

        return;

    }


    /*----------------------------------------------
    PROCURAR CONVIDADO
    ----------------------------------------------*/

    const pessoa =
        convidados.find(item =>

            normalizar(item.nome)
            === nomeDigitado

        );


    /*----------------------------------------------
    NÃO ENCONTRADO
    ----------------------------------------------*/

    if(!pessoa){

        resultado.innerHTML = `

            <div class="erro">

                ❌ Nome não encontrado.

                <br><br>

                Verifique se o nome foi
                digitado corretamente.

            </div>

        `;

        return;

    }


    /*----------------------------------------------
    ENCONTRADO
    ----------------------------------------------*/

    mostrarResultado(pessoa);

    dispararConfetes();

}


/*====================================================
MOSTRAR PRESENTE
====================================================*/

function mostrarResultado(pessoa){

    if(!resultado){

        return;

    }

    resultado.innerHTML = `

        <div class="cardResultado">

            <h2>

                ❤️ Olá, ${pessoa.nome}!

            </h2>

            <p>

                Preparamos um presente
                especial para você trazer:

            </p>

            <h1>

                🎁 ${pessoa.presente}

            </h1>

            <p>

                💝 O mais importante é
                a sua presença.

                <br><br>

                Mas, se Deus tocar no seu coração
                e você desejar trazer esse mimo,
                a Elóa ficará muito feliz! 🥰

            </p>

            <br>

            <p>

                📖

                <b>

                    "Os filhos são herança
                    do Senhor."

                </b>

                <br>

                Salmos 127:3

            </p>

        </div>

    `;


    /* Rolagem suave até o resultado */

    setTimeout(function(){

        resultado.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    },100);

}


/*====================================================
MÚSICA
====================================================*/

function tocarMusica(){

    if(!musica){

        return;

    }


    if(tocando){

        musica.pause();

        tocando = false;

        atualizarBotaoMusica();

        return;

    }


    musica.volume = 0.30;


    const promessa =
        musica.play();


    if(promessa !== undefined){

        promessa

            .then(function(){

                tocando = true;

                atualizarBotaoMusica();

            })

            .catch(function(erro){

                console.log(
                    "Reprodução bloqueada:",
                    erro
                );

            });

    }

}


/*====================================================
ATUALIZAR BOTÃO DA MÚSICA
====================================================*/

function atualizarBotaoMusica(){

    const botoes =
        document.querySelectorAll(
            ".btn-music"
        );


    botoes.forEach(function(btn){

        if(tocando){

            btn.innerHTML =
                "⏸️ Pausar Música";

        }else{

            btn.innerHTML =
                "🎵 Tocar Música";

        }

    });

}


/*====================================================
CONTAGEM REGRESSIVA
CHÁ DE FRALDAS
12/09/2026 — 17:00
====================================================*/

const dataEvento =
    new Date(
        "2026-09-12T17:00:00"
    );


function atualizarContador(){

    const contador =
        document.getElementById(
            "contador"
        );


    if(!contador){

        return;

    }


    const agora =
        new Date();


    const diferenca =
        dataEvento - agora;


    if(diferenca <= 0){

        contador.innerHTML = `

            <div class="contador-chegou">

                🎉

                <strong>

                    Chegou o grande dia!

                </strong>

                ❤️

            </div>

        `;

        return;

    }


    const dias =
        Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(

            (diferenca %
                (1000 * 60 * 60 * 24))

            /

            (1000 * 60 * 60)

        );


    const minutos =
        Math.floor(

            (diferenca %
                (1000 * 60 * 60))

            /

            (1000 * 60)

        );


    const segundos =
        Math.floor(

            (diferenca %
                (1000 * 60))

            / 1000

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


/* Executar contador */

atualizarContador();


/* Atualizar a cada segundo */

setInterval(
    atualizarContador,
    1000
);

/*====================================================
CONFETES
====================================================*/

function dispararConfetes(){

    const quantidade = 120;

    const cores = [

        "#ff4b91",
        "#ff8fba",
        "#87ceeb",
        "#ffd54f",
        "#ffffff",
        "#ffb6c1"

    ];


    for(let i = 0; i < quantidade; i++){

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


        confete.style.width =
            (6 + Math.random() * 6) + "px";


        confete.style.height =
            (6 + Math.random() * 10) + "px";


        confete.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        confete.style.animationDelay =
            (Math.random() * .8) + "s";


        document.body.appendChild(
            confete
        );


        setTimeout(function(){

            confete.remove();

        },6000);

    }

}


/*====================================================
ABRIR CONVITE
====================================================*/

function abrirConvite(){

    const entrada =
        document.getElementById(
            "entrada"
        );


    if(entrada){

        entrada.style.opacity = "0";

        entrada.style.pointerEvents =
            "none";

    }


    /*----------------------------------------------
    TENTAR INICIAR MÚSICA
    ----------------------------------------------*/

    if(musica){

        musica.volume = 0.30;


        const promessa =
            musica.play();


        if(promessa !== undefined){

            promessa

                .then(function(){

                    tocando = true;

                    atualizarBotaoMusica();

                })

                .catch(function(){

                    /*
                    Alguns navegadores podem
                    bloquear a reprodução.
                    O botão de música continuará
                    disponível.
                    */

                    tocando = false;

                });

        }

    }


    /*----------------------------------------------
    CONFETES DE ABERTURA
    ----------------------------------------------*/

    dispararConfetes();


    /*----------------------------------------------
    ESCONDER TELA
    ----------------------------------------------*/

    setTimeout(function(){

        if(entrada){

            entrada.style.display =
                "none";

        }

    },850);

}


/*====================================================
CORAÇÕES FLUTUANDO
====================================================*/

function criarCoracao(){

    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    heart.innerHTML =
        "💖";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (18 + Math.random() * 20) +
        "px";


    heart.style.animationDuration =
        (6 + Math.random() * 5) +
        "s";


    heart.style.opacity =
        (.45 + Math.random() * .4);


    document.body.appendChild(
        heart
    );


    setTimeout(function(){

        heart.remove();

    },12000);

}


/*
   Corações aparecem somente depois
   que o convite estiver aberto.
*/

let coracoesAtivos = false;


function iniciarCoracoes(){

    if(coracoesAtivos){

        return;

    }


    coracoesAtivos = true;


    setInterval(
        criarCoracao,
        2200
    );

}


/*====================================================
FOCO NO CAMPO DE NOME
====================================================*/

if(input){

    input.addEventListener(
        "focus",
        function(){

            input.style.transform =
                "scale(1.01)";

        }
    );


    input.addEventListener(
        "blur",
        function(){

            input.style.transform =
                "scale(1)";

        }
    );

}


/*====================================================
INICIAR CORAÇÕES APÓS ABRIR
====================================================*/

const botaoAbrir =
    document.querySelector(
        ".btn-entrar"
    );


if(botaoAbrir){

    botaoAbrir.addEventListener(
        "click",
        function(){

            setTimeout(
                iniciarCoracoes,
                900
            );

        }
    );

}


/*====================================================
ROLAGEM SUAVE PARA SEÇÕES
====================================================*/

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function(link){

    link.addEventListener(
        "click",
        function(e){

            const destino =
                this.getAttribute("href");


            if(!destino ||
               destino === "#"){

                return;

            }


            const elemento =
                document.querySelector(
                    destino
                );


            if(elemento){

                e.preventDefault();


                elemento.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }
    );

});


/*====================================================
VERIFICAÇÃO DA PÁGINA
====================================================*/

document.addEventListener(
    "DOMContentLoaded",
    function(){

        console.log(
            "💖 Convite da Elóa carregado com sucesso!"
        );


        if(!input){

            console.warn(
                "Campo #nome não encontrado."
            );

        }


        if(!lista){

            console.warn(
                "Lista #listaConvidados não encontrada."
            );

        }


        if(!resultado){

            console.warn(
                "Área #resultado não encontrada."
            );

        }

    }
);


/*====================================================
ATUALIZAÇÃO DO BOTÃO DA MÚSICA
====================================================*/

if(musica){

    musica.addEventListener(
        "play",
        function(){

            tocando = true;

            atualizarBotaoMusica();

        }
    );


    musica.addEventListener(
        "pause",
        function(){

            tocando = false;

            atualizarBotaoMusica();

        }
    );

}


/*====================================================
FIM DO SCRIPT
====================================================*/
