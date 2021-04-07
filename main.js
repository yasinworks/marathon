const player1 = {
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['knife', 'sword'],
    attack: () => console.log(player1.name + ' - Fight')
}

const player2 = {
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'sword'],
    attack: () => console.log(player2.name + ' - Fight')
}

function createPlayer(className, characterName, hp) {
    const parent = document.createElement('div'),
        progressbar = document.createElement('div'),
        character = document.createElement('div'),
        life = document.createElement('div'),
        name = document.createElement('div'),
        img = document.createElement('img'),
        arena = document.querySelector('.arenas');

    parent.className = className
    progressbar.className = 'progressbar'
    life.className = 'life'
    name.className = 'name'
    character.className = 'character'
    img.src = `http://reactmarathon-api.herokuapp.com/assets/${characterName}.gif`

    life.style.width = `${hp}%`

    name.textContent = characterName

    progressbar.prepend(life, name)
    character.prepend(img)
    parent.prepend(progressbar, character)
    arena.append(parent)
}

createPlayer('player1', 'subzero', 50)
createPlayer('player2', 'scorpion', 100)
