// criar card com dados do usuário

// acessar div com class usuario
export const divUsuario = document.querySelector(".usuario");

// criar função que recebe os dados do usuário e renderiza o card
export function renderizaCard(nome, imagem, descricao) {
    console.log({ nome, imagem, descricao });

    // criar elemento do NOME, inserir conteúdo e adicionar na tela
    if(nome) {
        console.log('entrei no nome')
        const h2 = document.createElement("h2");
        h2.textContent = nome;
        divUsuario.appendChild(h2);     
    }

    // criar elemento da IMAGEM, inserir conteúdo e adicionar na tela
    if(imagem) {
        console.log('entrei no imagem')
        const img = document.createElement("img");
        img.setAttribute("src", imagem);
        divUsuario.appendChild(img);
    }

    // criar elemento da DESCRIÇÃO, inserir conteúdo e adicionar na tela
    if(descricao) {
        console.log('entrei no descricao')
        const p = document.createElement("p");
        p.setAttribute("id", "card-descricao");
        p.textContent = descricao;
        divUsuario.appendChild(p);
    }
}
