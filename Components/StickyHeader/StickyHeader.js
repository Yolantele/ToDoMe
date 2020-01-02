import { StatusBar, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { ST } from './style'

const StickyHeader = ({ hue, changeHue, todo }) => (
  <View style={{ ...ST.dark, backgroundColor: hue.strip }}>
    <StatusBar barStyle="dark-content" />
    <View style={ST.featureStrip}>
      <TouchableOpacity onPress={() => changeHue()}>
        <View
          style={{
            ...ST.colorChange,
            backgroundColor: hue.light,
            borderColor: hue.light,
          }}
        />
      </TouchableOpacity>
      <Text style={ST.stats}>
        {`${todo.filter(({ done }) => done).length} / ${todo.length}`}
      </Text>
    </View>
  </View>
)

export default StickyHeader
