const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) =>  {
    personagem.addEventListener('mouseenter', () =>{

        if(window.innerWidth< 450 ) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado'); 

        alterarImagemPersonagemSelecionado(personagem);

        alterarBackgroundoDoPersonagemSelecionado(personagem);
        
        AlterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);
    })
})


function alterarBackgroundoDoPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.background');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./image/background-${idPersonagem}.png`;
}

function alterarDescricaoPersonagem(personagem) {
    const descriçãoPersonagem = document.getElementById('descricao-personagem');
    descriçãoPersonagem.innerText = personagem.getAttribute('data-description');
}

function AlterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./image/goku-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const persnagemSelecionado = document.querySelector('.selecionado');
    persnagemSelecionado.classList.remove('selecionado');
}

