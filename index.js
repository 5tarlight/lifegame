$(() => {
  window.isOnSelection = false

  window.selectors = {
    cooperate: $('#btn-cooperate'),
    batray: $('#btn-batray')
  }

  window.shower = {
    score: $('#h-score'),
    round: $('#h-round'),
    choice: $('#h-choice'),
    msg: $('#h-msg')
  }

  window.playerType = ['random']

  window.gameData = {
    score: {
      player: 0,
      pc: 0
    },
    aiType: window.playerType[0],
    round: []
  }

  window.selectors.cooperate.on('click', onCooperate)
  window.selectors.batray.on('click', onBatray)

  updateScreen()
  startGame()
})

function updateScreen(msg) {
  Object.values(window.selectors).forEach(v => {
    v.prop('disabled', !window.isOnSelection)
  })

  const index = window.gameData.round.length == 0 ? 0 : window.gameData.round.length - 1
  const round = window.gameData.round[index] ? window.gameData.round[index] : null

  console.log(round)

  window.shower.score.text(`${window.gameData.score.player} : ${window.gameData.score.pc}`)
  
  if(round)
    window.shower.choice.text(`${round.player}\t${round.pc}`)
  
  window.shower.round.text(`${window.gameData.round.length + 1} 라운드`)
  window.shower.msg.text(msg || '아래의 버튼을 눌러 선택하세요.')
}