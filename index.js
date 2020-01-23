$(() => {
  window.isOnSelection = false
  window.selectors = {
    cooperate: $('#btn-cooperate'),
    batray: $('#btn-batray')
  }
  window.shower = {
    score: $('#h-score'),
    msg: $('#h-msg')
  }
  window.playerType = ['random']
  window.gameData = {
    score: {
      player: 0,
      pc: 0
    },
    aiType: window.playerType[0]
  }

  updateScreen()
})

function updateScreen() {
  Object.values(window.selectors).forEach(v => {
    v.prop('disabled', !window.isOnSelection)
  })
}