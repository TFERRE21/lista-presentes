/*==================================================
PAINEL ADMINISTRATIVO
Chá de Fraldas da Elóa
==================================================*/

let convidados = [];

let editando = -1;

/*==================================================
CARREGAR JSON
==================================================*/

async function carregar(){

    try{

        const resposta = await fetch("convidados.json");

        convidados = await resposta.json();

        atualizarTabela();

    }

    catch(erro){

        console.log(erro);

    }

}

carregar();

/*==================================================
ORDENAR
==================================================*/

function ordenar(){

    convidados.sort((a,b)=>

        a.nome.localeCompare(

            b.nome,

            "pt-BR",

            {

                sensitivity:"base"

            }

        )

    );

}

/*==================================================
ATUALIZAR TABELA
==================================================*/

function atualizarTabela(){

    ordenar();

    const tabela =

    document.getElementById("tabela");

    tabela.innerHTML="";

    convidados.forEach((item,indice)=>{

        tabela.innerHTML += `

<tr>

<td>

${item.nome}

</td>

<td>

${item.presente}

</td>

<td>

<button

style="background:#FFC107;color:#000;"

onclick="editar(${indice})">

✏️ Editar

</button>

</td>

<td>

<button

class="btnExcluir"

onclick="excluir(${indice})">

🗑 Excluir

</button>

</td>

</tr>

`;

    });

    document.getElementById("total")

    .innerHTML=convidados.length;

}

/*==================================================
ADICIONAR OU EDITAR
==================================================*/

function adicionarOuEditar(){

    const nome =

    document.getElementById("nome")
    .value.trim();

    const presente =

    document.getElementById("presente")
    .value.trim();

    if(nome=="" || presente==""){

        alert("Preencha todos os campos.");

        return;

    }

    if(editando==-1){

        convidados.push({

            nome:nome,

            presente:presente

        });

    }

    else{

        convidados[editando]={

            nome:nome,

            presente:presente

        };

        editando=-1;

        document.getElementById("btnSalvar")

        .innerHTML=

        "➕ Adicionar Convidado";

    }

    limparCampos();

    atualizarTabela();

}

/*==================================================
EDITAR
==================================================*/

function editar(indice){

    editando=indice;

    document.getElementById("nome")

    .value=

    convidados[indice].nome;

    document.getElementById("presente")

    .value=

    convidados[indice].presente;

    document.getElementById("btnSalvar")

    .innerHTML=

    "💾 Salvar Alteração";

    document.getElementById("nome").focus();

}

/*==================================================
LIMPAR
==================================================*/

function limparCampos(){

    document.getElementById("nome").value="";

    document.getElementById("presente").value="";

}

/*==================================================
CANCELAR EDIÇÃO
==================================================*/

function cancelarEdicao(){

    editando=-1;

    limparCampos();

    document.getElementById("btnSalvar")

    .innerHTML=

    "➕ Adicionar Convidado";

}

/*==================================================
EXCLUIR
==================================================*/

function excluir(indice){

    if(confirm(

        "Deseja realmente excluir este convidado?"

    )){

        convidados.splice(indice,1);

        atualizarTabela();

    }

}

/*==================================================
BAIXAR JSON
==================================================*/

function baixarJSON(){

    ordenar();

    const texto=

    JSON.stringify(

        convidados,

        null,

        2

    );

    const blob=new Blob(

        [texto],

        {

            type:"application/json"

        }

    );

    const link=document.createElement("a");

    link.href=

    URL.createObjectURL(blob);

    link.download=

    "convidados.json";

    link.click();

}

/*==================================================
IMPORTAR JSON
==================================================*/

function importarJSON(event){

    const arquivo=

    event.target.files[0];

    if(!arquivo) return;

    const leitor=

    new FileReader();

    leitor.onload=function(e){

        convidados=

        JSON.parse(e.target.result);

        atualizarTabela();

    }

    leitor.readAsText(arquivo);

}

/*==================================================
PESQUISAR
==================================================*/

function pesquisar(){

    const texto=

    document.getElementById("pesquisa")

    .value

    .toLowerCase();

    const linhas=

    document.querySelectorAll(

        "#tabela tr"

    );

    linhas.forEach(linha=>{

        linha.style.display=

        linha.innerText

        .toLowerCase()

        .includes(texto)

        ?

        ""

        :

        "none";

    });

}

/*==================================================
ENTER
==================================================*/

document.addEventListener(

"keypress",

function(e){

    if(e.key==="Enter"){

        adicionarOuEditar();

    }

});

/*==================================================
ESTATÍSTICAS
==================================================*/

function totalPresentes(){

    const mapa={};

    convidados.forEach(item=>{

        if(!mapa[item.presente]){

            mapa[item.presente]=0;

        }

        mapa[item.presente]++;

    });

    console.table(mapa);

}

/*==================================================
ATUALIZA AO CARREGAR
==================================================*/

window.onload=function(){

    atualizarTabela();

};
