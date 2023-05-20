import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/img/PhotoBG.jpg")}
      >
        <View
          style={styles.form}
        >
          <View>
            <Text style={styles.text}>Ругистрация</Text>
            <Text style={styles.inputTitle}></Text>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          // onChange={onChangeText}
          // value={text}
          placeholder={"Логин"}
            />
            <View style={{marginTop:16}}>
           <Text style={styles.inputTitle}></Text>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          // onChange={onChangeText}
          // value={"Адрес электронной почты"}
          placeholder={"Адрес электронной почты"}
              />
            </View>
            <View style={{marginTop: 16}}>
           <Text style={styles.inputTitle}></Text>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          // onChange={onChangeText}
          // value={"Пароль"}
          placeholder={"Пароль"}
          secureTextEntry={true}
              />
              </View>
          </View>
          <Button title="Зарегистрироваться"/>
          </View>
      </ImageBackground>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
    image: {
    flex: 1,
    resizeMode:"cover",
    justifyContent: "center", 
    // alignItems:"center",
  },
  text: {
    color: "#212121",
    fontSize: 30,
    marginLeft: 96,
    marginRight: 95,
    // marginEnd: 33,
  },
  form: { 
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    height: 50,
    color: "#212121",
    padding: 16,
    // paddingEnd: 15,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    fontSize: 16,
    
  },
  inputTitle:{
  color:"#bdbdbd",
  }

});
