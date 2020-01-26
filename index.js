$(() => {
  console.log('진정한 완성은 이 아래 아무것도 없는것이다.') 

  window.isOnSelection = false

  window.selectors = {
    cooperate: $('#btn-cooperate'),
    batray: $('#btn-batray')
  }

  window.shower = {
    aiName: $('#h-pc-name'),
    playerScore: $('#h-player-score'),
    pcScore: $('#h-pc-score'),
    playerDelta: $('#h-player-score-delta'),
    pcDelta: $('#h-pc-score-delta'),
    playerChoice: $('#h-player-choice'),
    pcChoice: $('#h-pc-choice'),
    round: $('#h-round'),
    msg: $('#h-msg')
  }

  window.playerType = [
    new Friendly(),
    new Hostile(),
  ]

  window.gameData = {
    score: {
      player: 0,
      pc: 0
    },
    aiType: getRandomValue(window.playerType),
    round: []
  }

  window.selectors.cooperate.on('click', onCooperate)
  window.selectors.batray.on('click', onBatray)

  updateScreen()
  startGame()
})

function updateScreen (msg) {
  Object.values(window.selectors).forEach(v => {
    v.prop('disabled', !window.isOnSelection)
  })

  const index = window.gameData.round.length == 0 ? 0 : window.gameData.round.length - 1
  const round = window.gameData.round[index] ? window.gameData.round[index] : null

  window.shower.playerScore.text(window.gameData.score.player)
  window.shower.pcScore.text(window.gameData.score.pc)

  if (round) {
    const playerc = round.player == 'cooperate' ? '협력' : '배신'
    const pcc = round.pc == 'cooperate' ? '협력' : '배신'

    window.shower.playerChoice.text(playerc)
    window.shower.pcChoice.text(pcc)

    window.shower.playerDelta.text(round.playerDelta)
    window.shower.pcDelta.text(round.pcDelta)

    window.shower.playerDelta.removeClass('minus').removeClass('plus')
    window.shower.pcDelta.removeClass('minus').removeClass('plus')

    if (round.playerDelta < 0) window.shower.playerDelta.addClass('minus')
    else if (round.playerDelta > 0) window.shower.playerDelta.addClass('plus')

    if (round.pcDelta < 0) window.shower.pcDelta.addClass('minus')
    else if (round.pcDelta > 0) window.shower.pcDelta.addClass('plus')
  }

  window.shower.round.text(`${window.gameData.round.length + 1} 라운드`)
  window.shower.msg.text(msg || '아래의 버튼을 눌러 선택하세요.')
}

function getRandomValue (arr) {
  const random = Math.floor(Math.random() * arr.length)
  return arr[random]
}
