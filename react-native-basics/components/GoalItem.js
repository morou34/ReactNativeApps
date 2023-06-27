import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable>
      <View>
        <Text style={styles.goalItem}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#272a33",
    color: "white",
    borderRadius: 6,
    margin: 8,
    padding: 6,
    height: 44,
  },
});
