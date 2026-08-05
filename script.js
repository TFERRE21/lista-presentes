// ===== CONFIGURAÇÃO =====

let convidados = [];

// Carrega os convidados
fetch("convidados.json")
    .then(response => response.json())
    .then(data => {
        convidados = data;
        carregarLista();
    });

// Remove acentos
function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

// Lista lateral
function carregarLista() {

    const lista = document.getElementById("listaConvidados");

    lista.innerHTML = "";

    convidados.forEach(c => {

        lista.innerHTML += `
            <li>${c.nome}</li>
        `;

    });

}

// Procurar presente
function procurarPresente() {

    const nomeDigitado = normalizar(
        document.getElementById("nome").value
    );

    const resultado = convidados.find(c =>
        normalizar(c.nome) === nomeDigitado
    );

    const div = document.getElementById("resultado");

    if (!resultado) {

        div.innerHTML = `

        <div class="erro">

            Nome não encontrado.

        </div>

        `;

        return;

    }

    dispararConfetes();

    div.innerHTML = `

        <div class="cardResultado">

            <h2>
                ❤️ Olá, ${resultado.nome}
            </h2>

            <h1>
                🎁 ${resultado.presente}
            </h1>

            <p>

                ${resultado.mensagem}

            </p>

            <hr>

            <p>

                📖
                <strong>

                "Os filhos são herança do Senhor,
                uma recompensa que Ele dá."

                </strong>

                <br>

                Salmos 127:3

            </p>

        </div>

    `;

}

// Enter pesquisa
document.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        procurarPresente();

    }

});

// Confetes simples
function dispararConfetes(){

    for(let i=0;i<40;i++){

        const c=document.createElement("div");

        c.className="confete";

        c.style.left=Math.random()*100+"vw";

        c.style.background=
        ["#ff69b4","#87ceeb","#ffd700","#ffffff"]
        [Math.floor(Math.random()*4)];

        c.style.animationDuration=
        (2+Math.random()*2)+"s";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },4000);

    }

}

// Música
function tocarMusica(){

    const audio=document.getElementById("musica");

    if(audio.paused){

        audio.play();

    }else{

        audio.pause();

    }

}

// Contagem regressiva
const dataEvento=new Date("2026-09-12T17:00:00");

setInterval(()=>{

    const agora=new Date();

    const diferenca=dataEvento-agora;

    if(diferenca<0){

        document.getElementById("contador").innerHTML=
        "🎉 Hoje é o grande dia!";

        return;

    }

    const dias=Math.floor(diferenca/1000/60/60/24);

    const horas=Math.floor(
        diferenca/1000/60/60)%24;

    document.getElementById("contador").innerHTML=
    `Faltam ${dias} dias e ${horas} horas`;

},1000);
