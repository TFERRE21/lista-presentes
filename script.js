const lista=[{n:'Thiago',p:'Fralda G'},{n:'Jéssica',p:'Kit Higiene'},{n:'Maria',p:'Lenço umedecido'}];
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
function buscar(){let v=norm(nome.value);let x=lista.find(i=>norm(i.n)==v);r.innerHTML=x?`<h3>❤️ Olá, ${x.n}</h3><h2>🎁 ${x.p}</h2><p>Deus abençoe sua vida!</p>`:'Nome não encontrado';}