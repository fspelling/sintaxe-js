class Pagina {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
    }

    exibir() {
        let html = `
        <h1>${this.titulo}</h1>
        <p>${this.descricao}</p>
        `;

        document.write(html);
    }

    html() {
        let html = `
        <h1>${this.titulo}</h1>
        <p>${this.descricao}</p>
        `;

        return html;
    }

    static lista(list) {
        let html = '<ul>';

        for(let item of list) {
            html = html + `<li>${item}</li>`;
        }

        html = html + '</ul>';

        return html;
    }
}

class HomePagina extends Pagina {
    constructor(titulo, descricao){
        super(titulo, descricao);
    }
}

document.getElementById('lista').innerHTML = HomePagina.lista(['1', '2', '3']);