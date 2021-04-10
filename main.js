const actionButton = document.querySelector('.arenas .control .button')

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

function playerWin(playerName) {
    const winner = document.createElement('div')
    winner.className = 'loseTitle'
    winner.textContent = `${playerName} wins`

    return winner
}

function changeHp(player) {
    const arena = document.querySelector('.arenas')
    const playerLife = document.querySelector(`.player${player.player} .life`)
    const randomNumber = Math.random() * 20

    console.log(player.characterName + ' - ' + randomNumber)
    player.hp -= randomNumber
    if (player.hp <= 0) {
        playerLife.style.width = '0'
        actionButton.disabled = true
    } else {
        playerLife.style.width = `${player.hp}%`
    }

    if (player1.hp <= 0) {
        arena.append(playerWin(player2.characterName))
    } else if (player2.hp <= 0) {
        arena.append(playerWin(player1.characterName))
    }
}

actionButton.addEventListener('click' ,() => {
    changeHp(player1)
    changeHp(player2)
})

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
