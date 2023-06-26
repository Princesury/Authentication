import { View, Text, TouchableOpacity , TextInput , StyleSheet} from 'react-native'
import React, {useState}from 'react'
import { useNavigation } from '@react-navigation/native'
import {firebase} from '../config'
import Registration from './Registration'

const Login = () => {

    const navigation = useNavigation();
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

     loginUser = async (email,password) => {
       try {
        await firebase.auth().signInWithEmailAndPassword(email,password)
       }
       catch(error){
       alert(error.message)
       }        
       
    }

  return (
    <View style={styles.container}>
      <Text style ={{fontSize:26 , fontWeight:'bold'}}>Login</Text>
      <View style={{marginTop:40}}>
        <TextInput style={styles.textInput}
         placeholder='email'
         onChangeText={(email) => setEmail(email)}
         autoCapitalize='none'
         autoCorrect={false}
        />
        <TextInput style={styles.textInput}
         placeholder='password'
         onChangeText={(password) => setPassword(password)}
         autoCapitalize='none'
         autoCorrect={false}
        />
      </View>
      <TouchableOpacity onPress={() => loginUser(email,password)}
      style={styles.button}
      >
        <Text style={{fontWeight:'bold' , fontSize:25}}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}
      style={styles.text}
      >
        <Text style={{fontWeight:'bold' , fontSize:16}}>Don't have account?{" "}Register Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20
    }
    ,
    textInput:{
        paddingTop:10,
        paddingBottom:10,
        width:400,
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:'black',
        textAlign:'center',
        marginBottom:10
    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#026efd',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    },
    text:{
      color:'grey'
    }
})