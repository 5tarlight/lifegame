function startGame() {
  window.shower.msg.text('잠시후 게임이 시작됩니다.')
  setTimeout(nextRound, 1000)
}

function nextRound() {
  window.isOnSelection = true
  updateScreen('아래의 버튼을 눌러 선택하세요.')
}

function submitAnswer(answer) {
  const elements = ['cooperate', 'batray']
  const rand = Math.floor(Math.random() * elements.length)

  const round = {
    player: answer,
    pc: elements[rand]
  }

  updateScore(round)
}

function updateScore(round) {
  const score = window.gameData.score

  if(round.player == round.pc) {
    if(round.player == 'cooperate') {
      window.gameData.score.player = score.player + 1
      round.playerDelta = 1
      window.gameData.score.pc = score.pc + 1
      round.pcDelta = 1
    }
  } else {
    if(round.player == 'cooperate') {
        window.gameData.score.player = score.player - 1
        round.playerDelta = -1
        window.gameData.score.pc = score.pc + 3
        round.pcDelta = 3
    } else {
      window.gameData.score.player = score.player + 3
      round.playerDelta = 3
      window.gameData.score.pc = score.pc - 1
      round.pcDelta = -1
    }
  }

  window.gameData.round.push(round)
  updateScreen()
}

function onCooperate(e) {
  e.preventDefault()

  if(window.isOnSelection) submitAnswer('cooperate')
}

function onBatray(e) {
  e.preventDefault()

  if(window.isOnSelection) submitAnswer('batray')
}