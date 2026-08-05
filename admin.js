/*=========================================
 PAINEL ADMINISTRATIVO
 Chá de Fraldas da Elóa
=========================================*/

let convidados = [];

/*=========================================
CARREGAR JSON
=========================================*/

async function carregar() {

    try {

        const resposta = await fetch("convidados.json");

        convidados = await resposta.json();

        atualizarTabela();

    } catch (erro) {

        console.error("Erro ao carregar convidados.json", erro);

    }

}

carregar();

/*=========================================
ATUALIZAR TABELA
=========================================*/

function atualizarTabela() {

    const tabela = document.getElementById("tabela");

    tabela.innerHTML = "";

    convidados.sort((a, b) =>
        a.nome.localeCompare(b.nome)
    );

    convidados.forEach((item, indice) => {

        tabela.innerHTML += `

        <tr>

            <td>${item.nome}</td>

            <td>${item.presente}</td>

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

    document.getElementById("total").innerHTML =
        convidados.length;

}

/*=========================================
ADICIONAR
=========================================*/

function adicionar() {

    const nome =
        document.getElementById("nome").value.trim();

    const presente =
        document.getElementById("presente").value.trim();

    if (nome == "" || presente == "") {

        alert("Preencha todos os campos.");

        return;

    }

    convidados.push({

        nome,

        presente

    });

    document.getElementById("nome").value = "";

    document.getElementById("presente").value = "";

    atualizarTabela();

}

/*=========================================
EXCLUIR
=========================================*/

function excluir(indice) {

    if (confirm("Deseja realmente excluir este convidado?")) {

        convidados.splice(indice, 1);

        atualizarTabela();

    }

}

/*=========================================
DOWNLOAD JSON
=========================================*/

function baixarJSON() {

    const texto =
        JSON.stringify(convidados, null, 2);

    const blob = new Blob(

        [texto],

        {

            type: "application/json"

        }

    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "convidados.json";

    link.click();

}

/*=========================================
ENTER
=========================================*/

document.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        adicionar();

    }

});
