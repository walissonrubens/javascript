    function carregar(){
        var msg = document.getElementById('msg')
        var img = document.getElementById('imagem')
        var titulo = document.getElementById('titulo')
        var data = new Date()
        var hora = data.getHours()
        msg.innerHTML = `<strong>Agora são ${hora} horas</strong>`
        if(hora >= 0  && hora < 12 ){
            //BOM DIA
            titulo.innerHTML = 'Bom dia!'
            img.src = 'img/fotomanha.jpg'
            document.body.style.background = '#B17F64'
        } else if (hora >= 12 && hora <= 18){
            //BOA TARDE!
            titulo.innerHTML = 'Boa tarde!'
            img.src = 'img/fototarde.jpg'
            document.body.style.background = '#0F3952'
        } else {
            //BOA NOITE
            titulo.innerHTML = 'Boa noite!'
            img.src= 'img/fotonoite.jpg'
            document.body.style.background = '#1C2930'
        }
    }