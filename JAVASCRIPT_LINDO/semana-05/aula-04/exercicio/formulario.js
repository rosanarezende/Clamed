// import função que renderiza o card
import { renderizaCard, divUsuario } from './usuario.js'

// acessa elemento botão
const button = document.querySelector('button');

// acessa elementos do formulario
const form = document.querySelector('form');
const nameInput = document.querySelector('#nome')
const imagemInput = document.querySelector('#imagem');
const descricaoInput = document.querySelector('#descricao');

// escuta click no botão
button.addEventListener('click', function(event) {
    // previne que ao clicar no botão a página seja recarregada
    event.preventDefault();

    // pega valores do formulario
    const name = nameInput.value;
    const imagem = imagemInput.value;
    const descricao = descricaoInput.value;

    // limpa o que estiver renderizado no card
    divUsuario.innerHTML = '';
    
    // chama função que renderiza o card
    renderizaCard(name, imagem, descricao);

    // limpa o formulario
    form.reset();
});
