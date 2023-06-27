import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Vibration,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import InputItem from "./components/InputItem";

export default function App() {
  const [listGoals, setListGoals] = useState([
    "Nalixo",
    "FiveStars",
    "ChatGPT",
    "Crypto",
  ]);

  function addGoalHandler(newGoadToAdd) {
    setListGoals((currentGoals) => [...currentGoals, newGoadToAdd]);
    Vibration.vibrate(100);
  }

  return (
    <View style={styles.appContainer}>
      <InputItem onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={listGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff96f",
  },

  goalsContainer: {
    flex: 5,
  },

  goalsHeader: {
    fontSize: 23,
    margin: 8,
  },
});
