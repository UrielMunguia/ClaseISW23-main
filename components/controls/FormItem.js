import { View, Text, TextInput, StyleSheet } from "react-native";

import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";

export default function FormItem({
  label,
  onChange,
  keyboardType = "default",
  secure = false,
  value = "",
}) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    width: "100%",
    

  },
  label: {
    color: Colors.white,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.family.bold,
    textAlign: "left",
    marginBottom: 15,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    //borderBottomColor: Colors.cinnabar,
    //borderBottomWidth: 2,
    //color: Colors.jet,
    fontSize: Fonts.size.normal,
    paddingBottom: 5,
    paddingTop: 13,
    paddingStart: 20,
    marginRight: 10,
    
  },
});