import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {st} from '../Style';

const DURATION = 10000;

const StickyHeader = ({hue, changeHue, todo}) => (
  <View style={{...st.strip, backgroundColor: hue.strip}}>
    <View style={st.featureStrip}>
      <TouchableOpacity onPress={() => changeHue()}>
        <View
          style={{
            ...st.colorChange,
            backgroundColor: hue.light,
            borderColor: hue.light,
          }}
        />
      </TouchableOpacity>
      <Text style={st.stats}>
        {`${todo.filter(({done}) => done).length} / ${todo.length}`}
      </Text>
    </View>
  </View>
);

export default StickyHeader;
