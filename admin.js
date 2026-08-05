<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Painel Administrativo</title>

<link rel="stylesheet" href="style.css">

<style>

body{

    background:#f8f8ff;

}

.admin{

    max-width:900px;

    margin:40px auto;

    background:white;

    padding:30px;

    border-radius:20px;

    box-shadow:0 10px 25px rgba(0,0,0,.15);

}

.admin h1{

    color:#ff4b91;

    text-align:center;

    margin-bottom:30px;

}

.grid{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:20px;

}

label{

    font-weight:bold;

    color:#555;

}

input{

    width:100%;

    padding:14px;

    margin-top:8px;

}

textarea{

    width:100%;

    padding:14px;

    min-height:120px;

    border-radius:10px;

    border:1px solid #ccc;

}

button{

    margin-top:15px;

}

table{

    width:100%;

    border-collapse:collapse;

    margin-top:30px;

}

table th{

    background:#ff4b91;

    color:white;

    padding:12px;

}

table td{

    border:1px solid #eee;

    padding:10px;

}

.excluir{

    background:red;

    color:white;

    border:none;

    padding:8px 12px;

    cursor:pointer;

}

@media(max-width:700px){

.grid{

grid-template-columns:1fr;

}

}

</style>

</head>

<body>

<div class="admin">

<h1>

👶 Painel Administrativo

</h1>

<div class="grid">

<div>

<label>

Nome

</label>

<input id="nome">

</div>

<div>

<label>

Presente

</label>

<input id="presente">

</div>

</div>

<br>

<label>

Mensagem

</label>

<textarea id="mensagem">

💝 O mais importante é sua presença. Mas, se Deus tocar no seu coração e você desejar trazer um mimo também, a Elóa ficará muito feliz! 🥰

</textarea>

<button onclick="adicionar()">

➕ Adicionar Convidado

</button>

<button onclick="baixarJSON()">

💾 Baixar convidados.json

</button>

<table>

<thead>

<tr>

<th>Nome</th>

<th>Presente</th>

<th>Ação</th>

</tr>

</thead>

<tbody id="tabela">

</tbody>

</table>

</div>

<script src="admin.js"></script>

</body>

</html>
