import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
   StyleSheet,
   Text,
   View,
   ImageBackground,
   TextInput,
   TouchableOpacity,
   Platform,
   KeyboardAvoidingView,
   Keyboard,
} from 'react-native';

export default function App() {
  
  const [isShowKeyboard, setIsShowKeyboard] = useState(false)

  const keyboardHide = () => {
    setIsShowKeyboard(false)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("./assets/img/PhotoBG.jpg")}
      >
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <View
          style={{ ...styles.form, marginBottom : isShowKeyboard ? -100 : 0}}
          
        >
          <View>
            <Text style={styles.text}>Реєстрація</Text>
            
        <TextInput
          style={styles.input}
          textAlign={"left"}
          placeholder={"Логін"}
          onFocus={()=>setIsShowKeyboard(true)}
          // onChange={onChangeText}
          // value={text}
            />
            <View>
           <Text style={styles.inputTitle}></Text>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          placeholder={"Адреса електронної пошти"}
          onFocus={()=>setIsShowKeyboard(true)}
          // onChange={onChangeText}
          // value={"Адрес электронной почты"}
              />
            </View>
            <View>
           <Text style={styles.inputTitle}></Text>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          placeholder={"Пароль"}
          onFocus={()=>setIsShowKeyboard(true)}
          // onChange={onChangeText}
          // value={"Пароль"}
          secureTextEntry={true}
              />
              </View>
          </View>
          <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.btn}
            onPress={keyboardHide}
          >
            <Text style={styles.btnText}>Зареєструватися</Text>
          </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.logInText}>Вже є аккаунт? Увійти</Text>
          </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffffff",
    
   
  },
    background: {
    flex: 1,
    resizeMode:"cover",
    justifyContent:"flex-end",
    // justifyContent: "center", 
    // alignItems:"center",
  },
  text: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 33,
  },
  form: { 
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop:92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    
    
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
  },
  btn: {
    backgroundColor: "#ff6c00",
    height:51,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
  },
  logInText: {
    color: "#1b4371",
    textAlign: "center",
    fontSize: 16,
    marginTop: 16,
    // lineHeight: 19,
  },

});
