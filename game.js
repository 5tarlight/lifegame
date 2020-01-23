function startGame() {
  window.shower.msg.text('잠시후 게임이 시작됩니다.')
  setTimeout(nextRound, 1000)
}

function nextRound() {
  window.shower.round.text(`${window.gameData.round + 1} 라운드`)
  window.shower.msg.text('아래의 버튼을 눌러 선택하세요.')

  window.isOnSelection = true
  updateScreen()
}