
function abrirJanela(){
    const element = document.querySelector('#janela');
    element.style.visibility = "visible";
}


// function fecharJanela(){
//     const element = document.querySelector('#janela');
//     element.style.visibility = "hidden";
// }

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    if(isEscKey){
        const element = document.querySelector('#janela');
        element.style.visibility = "hidden";
    }
})