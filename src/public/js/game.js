function startGame () {
  window.shower.msg.text('잠시후 게임이 시작됩니다.')
  window.shower.aiName.text(window.gameData.aiType.name)

  setTimeout(nextRound, 1000)
}

function nextRound () {
  window.isOnSelection = true
  updateScreen('아래의 버튼을 눌러 선택하세요.')
}

function submitAnswer (answer) {
  const aiAnswer = window.gameData.aiType.getChoice()

  const round = {
    player: answer,
    pc: aiAnswer
  }

  updateScore(round)
}

function updateScore (round) {
  const score = window.gameData.score

  if (round.player == round.pc) {
    if (round.player == 'cooperate') {
      window.gameData.score.player = score.player + 1
      round.playerDelta = 1
      window.gameData.score.pc = score.pc + 1
      round.pcDelta = 1
    } else {
      round.playerDelta = 0
      round.pcDelta = 0
    }
  } else {
    if (round.player == 'cooperate') {
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

function onCooperate (e) {
  e.preventDefault()

  if (window.isOnSelection) submitAnswer('cooperate')
}

function onBatray (e) {
  e.preventDefault()

  if (window.isOnSelection) submitAnswer('batray')
}
