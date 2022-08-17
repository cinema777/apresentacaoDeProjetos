const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (seletorDeAudio){
    const elemento = document.querySelector(seletorDeAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Este elemento não existe ou não é um Áudio');
    }
    
    
}

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }   

    tecla.onkeydown = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        //if (evento.code === ('Space' || 'Enter')){
            tecla.classList.remove('ativa');
        //}
    }
}


