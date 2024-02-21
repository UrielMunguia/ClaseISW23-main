import { useState } from "react";
import { Content, Wrapper, Title, Logo } from "../components/layout";
import FormItem from "../components/controls/FormItem";
import Button from "../components/controls/Button";
import { registerEmailPass } from "../services/firebase";
import Colors from "../constants/Colors";
import ButtonText from "../components/controls/ButtonText";
import { DobleContent } from "../components/layout/DobleContent";

export default function Register({ navigation }) {
  const [user, setUser] = useState({
    email: "",
    full_name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const registerUser = async () => {
    setLoading(true);
    const result = await registerEmailPass(user);
    if (result) {
      setUser({
        email: "",
        full_name: "",
        password: "",
      });
      setLoading(false);
      navigation.navigate("Login");
    } else {
      setLoading(false);
    }
  };

  return (
    <Wrapper backgroundColor={Colors.black}>
      <Content>
        <Title title="Sign up" />
        
        <DobleContent>
          <FormItem
            value={user.name}
            label="Nombre completo"
            onChange={(value) =>
              setUser((prev) => ({ ...prev, name: value }))
            }
          ></FormItem>

          <FormItem
            value={user.apellido}
            label="Apellido"
            onChange={(value) =>
              setUser((prev) => ({ ...prev, apellido: value }))
            }
          ></FormItem>
        </DobleContent>

        

        <FormItem
          value={user.email}
          label="Correo electrónico"
          keyboardType="email-address"
          onChange={(value) =>
            setUser((prev) => ({ ...prev, email: value.trim() }))
          }
        ></FormItem>
        
        <FormItem
          secure={true}
          label="Contraseña"
          value={user.password}
          onChange={(value) =>
            setUser((prev) => ({ ...prev, password: value.trim() }))
          }
        ></FormItem>

        <FormItem
          value={user.direccion}
          label="Dirección"
          onChange={(value) =>
            setUser((prev) => ({ ...prev, direccion: value }))
          }
        ></FormItem>

        <FormItem
          value={user.telefono}
          label="Teléfono"
          onChange={(value) =>
            setUser((prev) => ({ ...prev, telefono: value }))
          }
        ></FormItem>

        <Button onPress={registerUser} label={"ENTER"} isLoading={loading} />
        <ButtonText onPress={goToLogin} label={"¿Tienes una cuenta?"} />
      </Content>
    </Wrapper>
  );
}