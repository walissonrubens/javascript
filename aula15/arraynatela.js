let valores = [1, 7, 2, 8, 9, 3]

/*for(let pos=0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}