function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.play) {
        elemento.play();
    } else {
        console.error('Elemento não encontrado ou seletor inválido:', seletorAudio);
    }
}

document.querySelector('.tecla_pom').onclick = function() { tocaSom('#som_tecla_pom'); };
document.querySelector('.tecla_clap').onclick = function() { tocaSom('#som_tecla_clap'); };
document.querySelector('.tecla_tim').onclick = function() { tocaSom('#som_tecla_tim'); };
document.querySelector('.tecla_puff').onclick = function() { tocaSom('#som_tecla_puff'); };
document.querySelector('.tecla_splash').onclick = function() { tocaSom('#som_tecla_splash'); };
document.querySelector('.tecla_toim').onclick = function() { tocaSom('#som_tecla_toim'); };
document.querySelector('.tecla_psh').onclick = function() { tocaSom('#som_tecla_psh'); };
document.querySelector('.tecla_tic').onclick = function() { tocaSom('#som_tecla_tic'); };
document.querySelector('.tecla_tom').onclick = function() { tocaSom('#som_tecla_tom'); };