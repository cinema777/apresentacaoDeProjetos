const rioDeJaneiro = `Rio De Janeiro`;
const saoPaulo = `São Paulo`;
const salvador = `Salvador`;

const destino = "Sumaré";
const cidades = new Array (rioDeJaneiro, saoPaulo, salvador);
let destinoExiste = false;

for (let contador = 0; contador < cidades.length; contador++) {
    if (destino == cidades[contador]){
        destinoExiste = true;
        break;
    }
}

if (destinoExiste == true) {
    console.log("Temos a passagem para a cidade de Destino");
} else {
    console.log("Não temos a passagem para a cidade de Destino");
}
    
        
        
    
    
