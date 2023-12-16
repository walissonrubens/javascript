function enviar() {
    var nome = document.getElementById('inome')
    var senha = document.getElementById('isenha')
    if (senha.value.length == 0 || nome.value.length == 0) {
        alert('insira as informações primeiro')
    } else if(senha.value == nome.value) {
        alert(`A senha não pode ser igual o nome de usuario! informe outra senha`)
    } 
    
}