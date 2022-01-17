function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
        if (hora >= 0 && hora < 18) {
            img.src = 'loiro.jpg'
            document.body.style.background = '#FFDD4A'
            console.log("bom dia")
        } else {
            img.src = 'moreno.png'
            document.body.style.background = '#247BA0'
            console.log("boa noite")
        }
        
}

