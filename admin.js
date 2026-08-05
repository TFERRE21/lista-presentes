// ===============================
// Painel Administrativo
// Chá de Fraldas da Elóa
// ===============================

let convidados = [];

// Carrega convidados salvos no navegador
if(localStorage.getItem("convidados")){

    convidados = JSON.parse(
        localStorage.getItem("convidados")
    );

}

atualizarTabela();

// ===============================
// Adicionar
// ===============================

function adicionar(){

    const nome = document
        .getElementById("nome")
        .value
        .trim();

    const presente = document
        .getElementById("presente")
        .value
        .trim();

    const mensagem = document
        .getElementById("mensagem")
        .value
        .trim();

    if(nome==="" || presente===""){

        alert("Preencha nome e presente.");

        return;

    }

    convidados.push({

        nome,

        presente,

        mensagem

    });

    salvar();

    limpar();

    atualizarTabela();

}

// ===============================
// Atualiza tabela
// ===============================

function atualizarTabela(){

    const tabela =
        document.getElementById("tabela");

    tabela.innerHTML="";

    convidados.forEach((c,i)=>{

        tabela.innerHTML += `

<tr>

<td>${c.nome}</td>

<td>${c.presente}</td>

<td>

<button
class="excluir"
onclick="excluir(${i})">

Excluir

</button>

</td>

</tr>

`;

    });

}

// ===============================
// Excluir
// ===============================

function excluir(indice){

    if(confirm("Excluir convidado?")){

        convidados.splice(indice,1);

        salvar();

        atualizarTabela();

    }

}

// ===============================
// Salvar LocalStorage
// ===============================

function salvar(){

    localStorage.setItem(

        "convidados",

        JSON.stringify(convidados)

    );

}

// ===============================
// Limpar formulário
// ===============================

function limpar(){

    document.getElementById("nome").value="";

    document.getElementById("presente").value="";

}

// ===============================
// Exportar JSON
// ===============================

function baixarJSON(){

    const json = JSON.stringify(

        convidados,

        null,

        4

    );

    const blob = new Blob(

        [json],

        {

            type:"application/json"

        }

    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "convidados.json";

    link.click();

}

// ===============================
// Importar JSON
// ===============================

function importarJSON(event){

    const arquivo = event.target.files[0];

    if(!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = function(e){

        convidados = JSON.parse(e.target.result);

        salvar();

        atualizarTabela();

    };

    leitor.readAsText(arquivo);

}

// ===============================
// Estatísticas
// ===============================

function totalConvidados(){

    return convidados.length;

}

console.log(

    "Convidados:",

    totalConvidados()

);
