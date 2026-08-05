
const dados=[
{nome:"Thiago",presente:"Fralda Pampers G"},
{nome:"Jéssica",presente:"Kit Higiene"},
{nome:"Maria",presente:"Lenço Umedecido"}
];
const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
function buscar(){
 const n=norm(document.getElementById("nome").value);
 const r=dados.find(x=>norm(x.nome)==n);
 const out=document.getElementById("resultado");
 if(r){
   out.innerHTML=`<h3>❤️ Olá, ${r.nome}</h3><p>Seu presente é</p><h2>🎁 ${r.presente}</h2><p>Que Deus abençoe sua família!</p>`;
   confetti({particleCount:180,spread:120,origin:{y:.6}});
 }else{
   out.innerHTML="<div class='alert alert-warning'>Nome não encontrado.</div>";
 }
}
