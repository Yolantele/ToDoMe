import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-community/async-storage'
import { STORES } from './Const'
import { ScrollView } from 'react-native'
import StickyNote from './Screens/StickyNote'

const { TODO_1, TODO_2, TODO_3, HUE_1, HUE_2, HUE_3, SCREEN } = STORES

const MIDDLE_SCREEN_POSITION = 414

const App = () => {
  const [screen, setScreen] = useState(MIDDLE_SCREEN_POSITION)

  const storeData = async data => {
    try {
      await AsyncStorage.setItem(SCREEN, JSON.stringify(data))
    } catch (e) {
      console.log('=== error >', e)
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(SCREEN)
      value && setScreen(JSON.parse(value))
    } catch (e) {
      console.log('=== e >', e)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <ScrollView
        horizontal
        pagingEnabled
        contentOffset={{ x: screen, y: 0 }}
        contentContainerStyle={{ width: '300%' }}
        onMomentumScrollEnd={e => storeData(e.nativeEvent.contentOffset.x)}>
        <StickyNote todoStore={TODO_1} hueStore={HUE_1} />
        <StickyNote todoStore={TODO_2} hueStore={HUE_2} />
        <StickyNote todoStore={TODO_3} hueStore={HUE_3} />
      </ScrollView>
    </ScrollView>
  )
}

export default App
