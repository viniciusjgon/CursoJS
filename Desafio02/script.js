function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique novamente a data!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homen'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // adulto
            } else {
                // idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) 
        
    }

    
}