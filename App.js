import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-community/async-storage'
import { ScrollView } from 'react-native'
import StickyNote from './Screens/StickyNote'

const TODO_STORE = 'todo'
const TODO_STORE_2 = 'todo2'
const TODO_STORE_3 = 'todo3'
const HUE_STORE = 'hue'
const HUE_STORE_2 = 'hue2'
const HUE_STORE_3 = 'hue3'
const SCREEN_STORE = 'screen'

const MIDDLE_SCREEN_POSITION = 414

const App = () => {
  const [screen, setScreen] = useState(MIDDLE_SCREEN_POSITION)

  const storeData = async data => {
    try {
      await AsyncStorage.setItem(SCREEN_STORE, JSON.stringify(data))
    } catch (e) {
      console.log('=== error >', e)
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(SCREEN_STORE)
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
        <StickyNote todoStore={TODO_STORE} hueStore={HUE_STORE} />
        <StickyNote todoStore={TODO_STORE_2} hueStore={HUE_STORE_2} />
        <StickyNote todoStore={TODO_STORE_3} hueStore={HUE_STORE_3} />
      </ScrollView>
    </ScrollView>
  )
}

export default App
