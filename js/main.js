//Funçao para direcionar para a parte escolhida 
function irParaSecao(){
    var secaoAlvo = document.getElementById('secao-alvo','secao-alvo-2');

    if (secaoAlvo){
        secaoAlvo.scrollIntoView({behavior: 'smooth'});
    }
}