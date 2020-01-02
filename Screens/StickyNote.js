import {
  ConfettiView,
  FlipCorner,
  ReportProblem,
  StickyHeader,
  Todos,
  WriteTodo,
} from '../Components'
import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-community/async-storage'
import { TODO_COLOURS } from '../Style'
import { View } from 'react-native'

const pageStyle = {
  display: 'flex',
  height: '100%',
  width: '33.3%',
}

const StickyNote = ({ todoStore, hueStore }) => {
  const loadRandomColour = () =>
    [pink, blue, green, yellow][Math.floor(Math.random() * 3)]

  const { yellow, pink, blue, green } = TODO_COLOURS
  const [value, setValue] = useState('')
  const [hue, setHue] = useState(loadRandomColour)
  const [todo, setTodo] = useState([])

  const storeData = async (toStore, data) => {
    try {
      await AsyncStorage.setItem(toStore, JSON.stringify(data))
    } catch (e) {
      console.log('=== e >', e)
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(todoStore)
      const value2 = await AsyncStorage.getItem(hueStore)
      value && setTodo(JSON.parse(value))
      value2 && setHue(JSON.parse(value2))
    } catch (e) {
      console.log('=== e >', e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const resetTodo = () => {
    setTodo([])
    changeHue()
    storeData(todoStore, [])
  }

  const updateTodos = to => {
    const updated = [
      ...todo,
      { i: todo.length, to, done: false, primary: false },
    ]
    setTodo(updated)
    setValue('')
    storeData(todoStore, updated)
  }

  const updateHue = newHue => {
    setHue(newHue)
    storeData(hueStore, newHue)
  }

  const changeHue = async () => {
    if (hue.pink) updateHue(blue)
    if (hue.blue) updateHue(yellow)
    if (hue.yellow) updateHue(green)
    if (hue.green) updateHue(pink)
  }

  const isAllDone =
    todo.filter(({ done }) => done).length === todo.length && todo.length !== 0

  return (
    <View style={{ ...pageStyle, backgroundColor: hue.main }}>
      {isAllDone && <ConfettiView />}
      <StickyHeader {...{ hue, changeHue, todo }} />
      <WriteTodo {...{ value, setValue, updateTodos }} />
      <Todos {...{ todo, setTodo, storeData }} />
      <ReportProblem />
      <FlipCorner {...{ hue, resetTodo }} />
    </View>
  )
}

export default StickyNote
