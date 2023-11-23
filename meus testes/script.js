function verificar() {
    var porcento = parseFloat(document.getElementById('ipct').value)
    var valor = parseFloat(document.getElementById('ivalor').value)
    var msg = document.getElementById('msg')
    var res = (valor * porcento) / 100
    msg.innerHTML = `${porcento}% de ${valor} é igual a ${res}`
}
