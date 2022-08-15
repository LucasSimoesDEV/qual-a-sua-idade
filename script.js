function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
 if (fano.value.length == 0 || Number(fano.value) > ano)
 {
   window.alert('[ERRO] Verifique os dados e tente novamente!')
 } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex [0].checked){
        genero = 'Homem'
        
        if(idade >=0 && idade < 12 ){
            //criança
            
            img.setAttribute('src', 'menino.png')
            res.innerHTML = `Detectamos uma Menino com ${idade} Anos.`
            res.style.background = 'greenyellow'
            
        }
        else if(idade < 21 ){
            // jovem
            img.setAttribute('src', 'jv-homem.png')
            res.innerHTML = `Detectamos um Jovem com ${idade} Anos.`
            res.style.background = 'greenyellow'
        }else if (idade < 55 ){
            // adulto
            img.setAttribute('src', 'homem.png')
            res.innerHTML = `Detectamos um Homem com ${idade} Anos.`
            res.style.background = 'greenyellow'
        }else{
            //idoso
            img.setAttribute('src', 'idosoo.png')
            res.innerHTML = `Detectamos um Senhor com ${idade} Anos.`
            res.style.background = 'greenyellow'
        }
    } else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade>=0 && idade < 12 ){
            //criança
            img.setAttribute('src', 'menina.png')
            res.innerHTML = `<strong>Detectamos uma Menina com ${idade} Anos.</strong>`
            res.style.background = 'pink'
        }else if(idade < 21 ){
            // jovem
            img.setAttribute('src', 'jv-mulher.png')
            res.innerHTML = `Detectamos uma Jovem com ${idade} Anos.`
            res.style.background = 'pink'
        }else if (idade < 55 ){
            // adulto
            img.setAttribute('src', 'mulher.png')
            res.innerHTML = `Detectamos uma Mulher com ${idade} Anos.`
            res.style.background = 'pink'
        }else{
            //idoso
            img.setAttribute('src', 'idosa.png')
            res.innerHTML = `Detectamos uma Senhora com ${idade} Anos.`
            res.style.background = 'pink'
        }
    }
    //res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
 }


}


