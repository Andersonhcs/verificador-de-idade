function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var ft = document.getElementById('ft')
    if (fano.value.length < 4 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                genero = 'Criança'
                img.setAttribute('src','bbh.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemh.png')
            }else if( idade < 50){
                //adulto
                img.setAttribute('src', 'adultoh.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosoh.png')
            }
        } else if (fsex[1].checked){
            genero ='Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                genero = 'Criança'
                img.setAttribute('src','bbm.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemm.png')
            }else if( idade < 50){
                //adulto
                img.setAttribute('src', 'adultom.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosam.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
        res.appendChild(img)
    }
    
}


