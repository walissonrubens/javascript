function criar(){
    var msg = document.getElementById('msg')
    var container = document.getElementById('img')
    var img = document.createElement('img')
    img.src = 'imgs/foto.png'
    msg.innerHTML = 'Te amo Celina Maclayne'
    container.appendChild(img)
}