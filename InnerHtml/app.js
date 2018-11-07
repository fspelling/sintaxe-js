let nome = 'nome';
document.getElementById('usuario').innerHTML = `<h3>${nome}</h3>`;

let elementos = document.getElementsByClassName('classUsuario');

for (let item of elementos) {
    item.innerHTML = 'testando';
}