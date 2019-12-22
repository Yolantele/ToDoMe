import React, {Component} from 'react';

import Confetti from 'react-native-confetti';
import {View} from 'react-native';

class ConfettiView extends Component {
  componentDidMount() {
    if (this._confettiView) {
      this._confettiView.startConfetti();
    }
  }

  render() {
    return (
      <View style={{position: 'absolute', flex: 1}}>
        <Confetti ref={node => (this._confettiView = node)} size={2} />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default ConfettiView;
