document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function validaFormulario() {
  if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" && 
    document.getElementById("telefone").value != "") {
    
    alert("Prontinho! Você receberá as novidades  em seu email.")
  }else{
    alert("Por gentileza preencher os  campos com nome e email.")
  }
}




  