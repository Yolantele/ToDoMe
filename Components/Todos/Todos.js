import { COLOURS, FONT, FONT_BASE } from '../../Style'
import { ScrollView, Text, View } from 'react-native'

import React from 'react'
import { ST } from './style'

const Todos = ({ setTodo, todo, storeData }) => {
  const { weight, size } = FONT

  const WITH_EMPHASIS = String(Number(weight) + 400)

  return (
    <ScrollView style={ST.todoSection}>
      {todo
        .map(line => {
          const { to, done, i, priority } = line
          return (
            <View style={ST.todo} key={i}>
              <Text
                style={{
                  ...FONT_BASE,
                  textDecorationLine: done ? 'line-through' : null,
                  textDecorationStyle: done ? 'solid' : null,
                  color: done ? COLOURS.MARKS : 'black',
                  fontSize: done ? size - 2 : size,
                  fontWeight: priority ? WITH_EMPHASIS : weight,
                }}
                onPress={() => {
                  let newList = [...todo]
                  newList[i].done = !done
                  setTodo(newList)
                  storeData('todo', newList)
                }}
                onLongPress={() => {
                  let newList = [...todo]
                  newList[i].priority = !priority
                  setTodo(newList)
                  storeData('todo', newList)
                }}>
                - {to}
              </Text>
            </View>
          )
        })
        .reverse()}
    </ScrollView>
  )
}

export default Todos
