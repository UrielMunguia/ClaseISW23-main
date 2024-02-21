import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { StyleSheet, TouchableOpacity, Text, View, TextInput, Alert, ImageBackground} from 'react-native';
import { Content, Header, Wrapper, Title, } from "../components/layout";
import Button from "../components/controls/Button";
import FormItem from "../components/controls/FormItem";

import { auth } from "../firebase-config";
import { loginWithEmailPass } from "../services/firebase";
import Colors from "../constants/Colors";
import ButtonText from "../components/controls/ButtonText";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const goToRegister = () => {
    navigation.navigate('Register');
  }

  useEffect(() => {
    // Nos suscribimos al evento que detecta cuando el usuario ya inicio sesión
    const subscriber = onAuthStateChanged(auth, (response) => {
      if (response) {
        navigation.navigate("Dashboard");
      }
    });
    return subscriber;
  }, [auth]);

  const login = async () => {
    if (user && pass) {
      setLoading(true);
      await loginWithEmailPass(user, pass);
      setUser("");
      setPass("");
      setLoading(false);
    }
  };

  const onChangeUser = (value) => {
    setUser(value);
  };

  const onChangePass = (value) => {
    setPass(value);
  };

  return (
    <Wrapper backgroundColor={Colors.black}>
      <Content style={styles.container}>
        <Title style= {styles.titulo} title="Login" />

        <ImageBackground
        style={styles.background}
        source={require('../assets/logoRebu.png')}
         />

        <FormItem
          
          value={user}
          label="Email"
          keyboardType="email-address"
          onChange={onChangeUser}
        ></FormItem>
        <FormItem
          value={pass}
          
          secure={true}
          label="Password"
          onChange={onChangePass}
        ></FormItem>
        <Button label="ENTER" onPress={login} isLoading={loading} />

        <ButtonText style={styles.textsincuenta} onPress={goToRegister} label={"¿No tienes una cuenta?"} type="white" />
      </Content>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',

  },
  titulo: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    bottom: 30,
    
  
  },
  textInput: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  inputHolder: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 10,
    bottom: 10,
    width: '70%',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
    paddingStart: 20,
  },
  textcuenta: {
    color: 'white', 
    fontSize: 12, 
    textAlign: 'right',
    paddingTop: 15,
  },
  background: {
    marginBottom: 10,
    width: 350,
    height: 250, 
  },
});