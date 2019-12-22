import {COLOURS, FONT, TODO_COLOUR} from './Const';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import {fontBase, st} from './Style';

import {ConfettiView} from './Components';

const DURATION = 10000;

const App = () => {
  const [value, setValue] = useState('');
  const [hue, setHue] = useState(TODO_COLOUR.pink);
  const [todo, setTodo] = useState([
    {to: 'go shoppong for christmas', done: true, i: 0, priority: true},
    {to: 'floss for chrismtas eve', done: true, i: 1, priority: false},
    {
      to: 'write to fam and friends',
      done: false,
      i: 2,
      priority: true,
    },
  ]);

  const changeHue = () => {
    const {yellow, pink, blue} = TODO_COLOUR;
    if (hue === pink) setHue(yellow);
    if (hue === yellow) setHue(blue);
    if (hue === blue) setHue(pink);
  };

  return (
    <>
      <View style={{...st.page, backgroundColor: hue.main}}>
        {todo.filter(({done}) => done).length === todo.length ? (
          <>
            <ConfettiView />
            {Vibration.vibrate(DURATION)}
          </>
        ) : null}
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

        <TextInput
          enablesReturnKeyAutomatically
          style={{...st.input}}
          clearButtonMode="always"
          autoCapitalize="sentences"
          maxLength={50}
          placeholder={'✔️ ToDo: '}
          placeholderTextColor={COLOURS.MARKS}
          onChangeText={value => setValue(value)}
          returnKeyType="done"
          value={value}
          onSubmitEditing={() => {
            let newTodo = {i: todo.length, done: false, to: value};
            setTodo([...todo, newTodo]);
            setValue('');
          }}
        />
        <ScrollView style={st.todoSection}>
          {todo
            .map(line => {
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
                    }}>
                    - {to}
                  </Text>
                </View>
              );
            })
            .reverse()}
        </ScrollView>
      </View>
    </>
  );
};

export default App;
