function calcular(){
    var dia1 = document.getElementById('idia1')
    var dia2 = document.getElementById('idia2')
    var res = document.getElementById('res')
    var diaRes = Number(dia1.value) - Number(dia2.value)
    res.innerHTML = `o resultado é ${diaRes}`
}