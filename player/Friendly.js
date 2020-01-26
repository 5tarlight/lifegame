class Friendly extends Player {
  constructor() {
    super('조력자')
  }

  getChoice() {
    return 'cooperate'
  }
}