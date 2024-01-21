function calcular() {
    var popu = parseFloat(document.getElementById('ipopu').value)
    var pct = parseFloat(document.getElementById('ipct').value)
    var anos = parseFloat(document.getElementById('ianos').value)
    var res = document.getElementById('res')

    let c = 1
    while (c <= anos) {
        var tempo = pct * anos
        var calc = (tempo * popu) / 100
        var resultado = popu + calc
        c++
    }
    res.innerHTML = `resultado: ${resultado}`
}