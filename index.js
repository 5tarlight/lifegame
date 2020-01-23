$(() => {
  window.isOnSelection = false
  window.selectors = {
    cooperate: $('#btn-cooperate'),
    batray: $('#btn-batray')
  }
  window.shower = {
    score: $('#h-score'),
    round: $('#h-round'),
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

  updateScreen()
  startGame()
})

function updateScreen(msg) {
  Object.values(window.selectors).forEach(v => {
    v.prop('disabled', !window.isOnSelection)
  })

  window.shower.score.text(`${window.gameData.score.player} : ${window.gameData.score.pc}`)
  window.shower.msg.text(msg || '아래의 버튼을 눌러 선택하세요.')
}