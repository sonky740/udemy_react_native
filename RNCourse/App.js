import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }, // FlatList는 key를 알아서 찾지만, 이런식으로 따로 생성해주는게 좋음.
    ]);
  }

  return (
    <View style={styles.appConatiner}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          onEndEditing={addGoalHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* 성능적으로 FlatList > ScrollView */}
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appConatiner: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderCOlor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
