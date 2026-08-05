/*====================================================
CHÁ DE FRALDAS DA ELÓA
SCRIPT PREMIUM
====================================================*/

let convidados = [];

const resultado = document.getElementById("resultado");

const lista = document.getElementById("listaConvidados");

const input = document.getElementById("nome");

/*====================================================
REMOVER ACENTOS
====================================================*/

function normalizar(texto){

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .trim();

}

/*====================================================
CARREGAR JSON
====================================================*/

async function carregarConvidados(){

    try{

        const resposta =
        await fetch("convidados.json");

        convidados = await resposta.json();

        preencherLista();

    }catch(e){

        console.error(e);

    }

}

carregarConvidados();

/*====================================================
PREENCHER LISTA
====================================================*/

function preencherLista(){

    lista.innerHTML="";

    convidados.forEach(pessoa=>{

        const li=document.createElement("li");

        li.textContent=pessoa.nome;

        li.onclick=()=>{

            input.value=pessoa.nome;

            procurarPresente();

        }

        lista.appendChild(li);

    });

}

/*====================================================
ENTER
====================================================*/

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        procurarPresente();

    }

});

/*====================================================
PESQUISAR PRESENTE
====================================================*/

function procurarPresente(){

    const nomeDigitado = normalizar(input.value);

    if(nomeDigitado===""){

        resultado.innerHTML=`

        <div class="erro">

            ⚠️ Digite seu nome.

        </div>

        `;

        return;

    }

    const pessoa = convidados.find(item=>

        normalizar(item.nome)===nomeDigitado

    );

    if(!pessoa){

        resultado.innerHTML=`

        <div class="erro">

            ❌ Nome não encontrado.

            <br><br>

            Verifique a escrita do nome.

        </div>

        `;

        return;

    }

    mostrarResultado(pessoa);

    dispararConfetes();

}

/*====================================================
MOSTRAR RESULTADO
====================================================*/

function mostrarResultado(pessoa){

resultado.innerHTML=`

<div class="cardResultado">

<h2>

❤️ Olá, ${pessoa.nome}

</h2>

<h1>

🎁 ${pessoa.presente}

</h1>

<p>

💝 O mais importante é sua presença.

<br><br>

Mas, se Deus tocar no seu coração e você desejar trazer um mimo também,

a Elóa ficará muito feliz! 🥰

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

/*====================================================
CONFETES
====================================================*/

function dispararConfetes(){

    for(let i=0;i<100;i++){

        const confete=document.createElement("div");

        confete.className="confete";

        confete.style.left=Math.random()*100+"vw";

        confete.style.backgroundColor=[

            "#ff4b91",
            "#87ceeb",
            "#ffd54f",
            "#ffffff",
            "#ffb6c1"

        ][Math.floor(Math.random()*5)];

        confete.style.animationDuration=(2+Math.random()*3)+"s";

        document.body.appendChild(confete);

        setTimeout(()=>{

            confete.remove();

        },5000);

    }

}

/*====================================================
MÚSICA
====================================================*/

const musica = document.getElementById("musica");

let tocando = false;

function tocarMusica(){

    if(!musica) return;

    if(tocando){

        musica.pause();

        tocando=false;

        const btn=document.querySelector(".btn-music");

        if(btn){

            btn.innerHTML="🎵 Tocar Música";

        }

    }else{

        musica.volume=0.30;

        musica.play();

        tocando=true;

        const btn=document.querySelector(".btn-music");

        if(btn){

            btn.innerHTML="⏸️ Pausar Música";

        }

    }

}

/*====================================================
CONTAGEM REGRESSIVA
====================================================*/

const dataEvento = new Date(

    "2026-09-12T17:00:00"

);

function atualizarContador(){

    const agora = new Date();

    const diferenca = dataEvento - agora;

    if(diferenca<=0){

        document.getElementById("contador").innerHTML=

        "🎉 Chegou o grande dia!";

        return;

    }

    const dias=Math.floor(

        diferenca/(1000*60*60*24)

    );

    const horas=Math.floor(

        (diferenca%(1000*60*60*24))

        /(1000*60*60)

    );

    const minutos=Math.floor(

        (diferenca%(1000*60*60))

        /(1000*60)

    );

    const segundos=Math.floor(

        (diferenca%(1000*60))/1000

    );

    document.getElementById("contador").innerHTML=

    `

    <strong>

    ${dias}

    </strong>

    dias

    <br>

    <strong>

    ${horas}

    </strong>

    horas

    <br>

    <strong>

    ${minutos}

    </strong>

    minutos

    <br>

    <strong>

    ${segundos}

    </strong>

    segundos

    `;

}

setInterval(atualizarContador,1000);

atualizarContador();

/*====================================================
CORAÇÕES FLUTUANDO
====================================================*/

function criarCoracao(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=

    Math.random()*100+"vw";

    heart.style.fontSize=

    (20+Math.random()*20)+"px";

    heart.style.animationDuration=

    (5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(criarCoracao,1800);

/*====================================================
FOCO NO CAMPO
====================================================*/

window.onload=()=>{

    input.focus();

};

/*====================================================
ANIMAÇÃO DE DIGITAÇÃO
====================================================*/

input.addEventListener("focus",()=>{

    input.style.transform="scale(1.02)";

});

input.addEventListener("blur",()=>{

    input.style.transform="scale(1)";

});

/*====================================================
FIM
====================================================*/
