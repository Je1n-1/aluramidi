function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        console.log('Elemento não encontrado');
    } else if (elemento.localName === 'audio') {
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
            tocaSom(idAudio);  
        }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
        
    }

}
