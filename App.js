import { COLOURS, TODO_COLOUR } from './Const';
import { ConfettiView, StickyHeader, Todos } from './Components';
import React, { useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';

import { st } from './Style';

const App = () => {
  const [value, setValue] = useState('');
  const [hue, setHue] = useState(TODO_COLOUR.pink);
  const [todo, setTodo] = useState([
    { to: 'go shoppong for christmas', done: true, i: 0, priority: true },
    { to: 'floss for chrismtas eve', done: true, i: 1, priority: false },
    {
      to: 'write to fam and friends',
      done: false,
      i: 2,
      priority: true
    }
  ]);

  const changeHue = () => {
    const { yellow, pink, blue } = TODO_COLOUR;
    if (hue === pink) setHue(yellow);
    if (hue === yellow) setHue(blue);
    if (hue === blue) setHue(pink);
  };

  const ALL_DONE = todo.filter(({ done }) => done).length === todo.length;

  return (
    <>
      <View style={{ ...st.page, backgroundColor: hue.main }}>
        {ALL_DONE && <ConfettiView />}

        <StickyHeader hue={hue} todo={todo} changeHue={changeHue} />

        <TextInput
          autoFocus
          enablesReturnKeyAutomatically
          style={{ ...st.input }}
          clearButtonMode="always"
          autoCapitalize="sentences"
          maxLength={50}
          placeholder={'✔️ ToDo: '}
          placeholderTextColor={COLOURS.MARKS}
          onChangeText={value => setValue(value)}
          returnKeyType="done"
          value={value}
          onSubmitEditing={() => {
            let newTodo = { i: todo.length, done: false, to: value };
            setTodo([...todo, newTodo]);
            setValue('');
          }}
        />

        <ScrollView style={st.todoSection}>
          {todo
            .map(line => <Todos line={line} setTodo={setTodo} todo={todo} />)
            .reverse()}
        </ScrollView>
      </View>
    </>
  );
};

export default App;
