function carregar() {
    var txt = document.getElementById('txt')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    txt.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'dia.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}
