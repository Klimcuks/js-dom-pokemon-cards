
function renderPokeCard(){
    for(let i = 0; i < data.length; i++){
        const ul = document.querySelector('.cards')
        const li = document.createElement('li')
        li.setAttribute('class', 'card')
        ul.appendChild(li)

        const h2 = document.createElement('h2')
        h2.setAttribute('class','card--title')
        h2.innerText = data[i].name
        li.appendChild(h2)

        const img = document.createElement('img')
        img.setAttribute('width', '256')
        img.setAttribute('class', 'card--img')
        img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data[i].id}.png`)
        li.appendChild(img)

        const cardUl = document.createElement('ul')
        cardUl.setAttribute('class', 'card--text')
        li.appendChild(cardUl)

        const cardLiOne = document.createElement('li')
        cardLiOne.innerText = `HP:${data[i].stats[0].base_stat}`
        cardUl.appendChild(cardLiOne)

        const cardLiTwo = document.createElement('li')
        cardLiTwo.innerText = `ATTACK: ${data[i].stats[1].base_stat}`
        cardUl.appendChild(cardLiTwo)

        const cardLiThree = document.createElement('li')
        cardLiThree.innerText = `DEFENSE: ${data[i].stats[2].base_stat}`
        cardUl.appendChild(cardLiThree)

        const cardLiFour = document.createElement('li')
        cardLiFour.innerText = `SPECIAL-ATTACK: ${data[i].stats[3].base_stat}`
        cardUl.appendChild(cardLiFour)

        const cardLiFive = document.createElement('li')
        cardLiFive.innerText = `SPECIAL-DEFENSE: ${data[i].stats[4].base_stat}`
        cardUl.appendChild(cardLiFive)

        const cardLiSix = document.createElement('li')
        cardLiSix.innerText = `SPEED: ${data[i].stats[5].base_stat}`
        cardUl.appendChild(cardLiSix)

        const gamesSection = document.createElement('div')
        gamesSection.innerHTML = `<strong>Appeared in the following games:</strong>`
        gamesSection.setAttribute('class', ' spanCont')
        li.appendChild(gamesSection)

                for(let j = 0; j < 20; j++){
                    const span = document.createElement('span')
                    span.innerText = ` ${data[i].game_indices[j].version.name} ,`
                    gamesSection.appendChild(span) 
                }

    }

}
renderPokeCard()
