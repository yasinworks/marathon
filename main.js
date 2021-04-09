const player1 = {
    player: 1,
    characterName: 'subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['knife', 'sword'],
    attack: () => console.log(player1.characterName, 'Figth')
}

const player2 = {
    player: 2,
    characterName: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'sword'],
    attack: () => console.log(player2.characterName, 'Fight')
}

function createPlayer(className, {characterName, hp, img}) {

    const parent = document.createElement('div'),
        progressbar = document.createElement('div'),
        character = document.createElement('div'),
        life = document.createElement('div'),
        name = document.createElement('div'),
        characterImg = document.createElement('img'),
        arena = document.querySelector('.arenas');

    parent.className = className
    progressbar.className = 'progressbar'
    life.className = 'life'
    name.className = 'name'
    character.className = 'character'
    characterImg.src = img

    life.style.width = `${hp}%`

    name.textContent = characterName.toLowerCase()

    progressbar.prepend(life, name)
    character.prepend(characterImg)
    parent.prepend(progressbar, character)
    arena.append(parent)
}

createPlayer('player1', player1)
createPlayer('player2', player2)
