import React, { Component } from 'react'
import { Vibration, View } from 'react-native'

import Confetti from 'react-native-confetti'

const PATTERN = [100000]

class ConfettiView extends Component {
  componentDidMount() {
    if (this._confettiView) {
      this._confettiView.startConfetti()
    }
  }

  render() {
    return (
      <View style={{ position: 'absolute', flex: 1 }}>
        <Confetti ref={node => (this._confettiView = node)} size={2} />
        {Vibration.vibrate(PATTERN)}
      </View>
    )
  }
}

export default ConfettiView
