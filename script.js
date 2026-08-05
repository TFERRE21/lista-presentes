const convidados=[
{nome:'Thiago',presente:'Fralda G'},
{nome:'Jéssica',presente:'Kit Higiene'},
{nome:'Maria',presente:'Lenço Umedecido'}
];
function norm(t){return t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();}
function buscar(){
const n=norm(document.getElementById('nome').value);
const r=convidados.find(c=>norm(c.nome)===n);
const div=document.getElementById('resultado');
if(r){
div.innerHTML='❤️ <br>Seu presente é:<br><h2>🎁 '+r.presente+'</h2><p>Muito obrigado pela sua presença!</p>';
for(let i=0;i<25;i++){let s=document.createElement('span');s.textContent=Math.random()>0.5?'❤️':'🎉';s.style.position='fixed';s.style.left=Math.random()*100+'vw';s.style.top=Math.random()*100+'vh';s.style.fontSize='24px';document.body.appendChild(s);setTimeout(()=>s.remove(),2500);}
}else div.innerHTML='Nome não encontrado.';
}
