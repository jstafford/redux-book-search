// @flow
export class StateHistory {
  past: Array<?Object>
  present: ?Object
  future: Array<?Object>

  constructor() {
    this.past = []
    this.present = undefined
    this.future = []
  }

  thereIsAPresent () {
    return this.present !== undefined
  }

  thereIsAPast () {
    return this.past.length > 0
  }

  thereIsAFuture () {
    return this.future.length > 0
  }

  setPresent (state: Object) {
    this.present = state
  }

  movePresentToPast () {
    if (this.present) {
      this.past.push(this.present)
    }
  }

  push (currentState: Object) {
    if (this.thereIsAPresent()) {
      this.movePresentToPast()
    }
    this.setPresent(currentState)
  }

  getIndex () {
    return this.past.length
  }

  undo () {
    if (this.thereIsAPast()) {
      this.gotoState(this.getIndex() - 1)
    }
  }

  redo () {
    if (this.thereIsAFuture()) {
      this.gotoState(this.getIndex() + 1)
    }
  }

  gotoState (i: number) {
    const index = Number(i)
    const allstates: Array<?Object> = [...this.past, this.present, ...this.future]

    if (index >= 0 && index < allstates.length ) {
      this.present = allstates[index]
      this.past = allstates.slice(0, index)
      this.future = allstates.slice(index + 1, allstates.length)
    }
  }
}

const statehistory = new StateHistory()

export default statehistory
