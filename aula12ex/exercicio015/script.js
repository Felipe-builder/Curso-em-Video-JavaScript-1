function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formularioano.value.length == 0 || formularioano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 5){
                img.setAttribute('src', 'menino-pequeno.png')
            } else if(idade <= 12) {
                img.setAttribute('src', 'menino-maior.png')
            } else if(idade <= 18) {
                img.setAttribute('src', 'homem-adolescente.png')
            } else if(idade <= 40) {
                img.setAttribute('src', 'homem-adulto.png')
            } else if(idade <= 60) {
                img.setAttribute('src', 'homem-meia-idade.png')
            } else {
                img.setAttribute('src', 'homem-idoso.png')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 5){
                img.setAttribute('src', 'menina-pequena.png')
            } else if(idade <= 12) {
                img.setAttribute('src', 'menina-maior.png')
            } else if(idade <= 18) {
                img.setAttribute('src', 'mulher-adolescente.png')
            } else if(idade <= 40) {
                img.setAttribute('src', 'mulher-adulta.png')
            } else if(idade <= 60) {
                img.setAttribute('src', 'mulher-meiaidade.png')
            } else {
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}