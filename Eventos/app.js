var txt = document.getElementById('txtUsuario');
var btn = document.getElementById('btnUsuario');

txt.onchange = function () {
    let usu = document.getElementById('txtUsuario').value;
    document.getElementById('usuario').innerHTML = usu;
}

btn.onclick = function () {
    let usu = document.getElementById('txtUsuario').value;
    document.getElementById('usuario').innerHTML = usu;

    let span = document.getElementById('loading');

    this.style.display = 'none';
    span.style.display = 'block';

    setTimeout(function () {
        btn.style.display = 'block';
        span.style.display = 'none';
    }, 1000);
}