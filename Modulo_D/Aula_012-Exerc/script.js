function mostrar(){
    var perso = window.document.getElementsByTagName('input')[0]
    var img = window.document.getElementById('imagem')
    var img = document.createElement('img')
    var res = window.document.querySelector('div#resultado')
    img.setAttribute('id', 'imagem')

    if(perso.value == 'Wilder'){
        img.setAttribute('src','imagens/perola.jpeg')
        res.innerHTML = '<p><strong>Você é a Perola, pois é delicada e astuta como ela!!</strong></p>'
    }else if(perso.value == 'George'){
        img.setAttribute('src','imagens/garnet.jpeg')
        res.innerHTML = '<p><strong>Você é a Garnet, pois você é calmo e estóico!!</strong></p>'
    }else if(perso.value == 'Luan'){
        res.innerHTML = '<p><strong>Desculpe não foi possivel encontrar um personagem para você</strong></p>'
    }else if(perso.value == 'Lucas'){
        img.setAttribute('src','imagens/steven.jpeg')
        res.innerHTML = '<p><strong>Você é o Steven, pois você é otimista, amigável e extrovertido!!</strong></p>'
    }
    perso.value = ''
    res.appendChild(img)
}