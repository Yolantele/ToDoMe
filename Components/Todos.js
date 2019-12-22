import {COLOURS, FONT} from '../Const';
import {Text, View} from 'react-native';
import {fontBase, st} from '../Style';

import React from 'react';

const Todos = ({setTodo, todo, line}) => {
  const {to, done, i, priority} = line;

  return (
    <View style={st.todo} key={i}>
      <Text
        style={{
          ...fontBase,
          textDecorationLine: done ? 'line-through' : null,
          textDecorationStyle: done ? 'solid' : null,
          color: done ? COLOURS.MARKS : 'black',
          fontSize: done ? FONT.size - 2 : FONT.size,
          fontWeight: priority
            ? String(Number(FONT.weight) + 400)
            : FONT.weight,
        }}
        onPress={() => {
          let newList = [...todo];
          newList[i].done = !done;
          setTodo(newList);
        }}
        onLongPress={() => {
          let newList = [...todo];
          newList[i].priority = !priority;
          setTodo(newList);
        }}
        onResponder>
        - {to}
      </Text>
    </View>
  );
};

export default Todos;
