function Enviar(){
    let milha = document.getElementById('imilhas').value
    let porcentagem = document.getElementById('iporcentagem')
    let desconto = 0
    if(parseInt(milha) >= 30000){
        desconto += 20
    }
    else{
        if(parseInt(milha) >= 5000){
            desconto += 10
        }
    }
    
    

porcentagem.innerHTML = `seu desconto é de ${desconto}`


}