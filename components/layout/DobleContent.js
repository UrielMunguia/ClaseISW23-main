import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export function DobleContent ({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.black,
    flexDirection: "row",
    paddingRight: 10,
    width: 210,
  },
});
