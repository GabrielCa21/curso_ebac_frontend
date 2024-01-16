function validarFormulario() {
    var numeroA = parseFloat(document.getElementById("numeroA").value);
    var numeroB = parseFloat(document.getElementById("numeroB").value);

    var mensagemValidacao = document.getElementById("mensagemValidacao");
    
    if (numeroB > numeroA) {
    mensagemValidacao.innerHTML = "Formulário válido!";
    mensagemValidacao.style.color = "green"; 
    } else {
    mensagemValidacao.innerHTML = "Formulário inválido!";
    mensagemValidacao.style.color = "red";
    }
}