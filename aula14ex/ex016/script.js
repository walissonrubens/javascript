function contar() {
    let ini = document.getElementById('iini')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    var res = document.getElementById('contagem')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('Bota um numero ai vacilão')
    } else {

        res.innerHTML = 'Contando: <br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo invalido, considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p)
                res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}