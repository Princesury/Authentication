import { View, Text, TouchableOpacity, StyleSheet ,TextInput} from 'react-native'
import {firebase} from '../config'
import React,{useState} from 'react'
const Registration = () => {

    const [email,setEmail] = useState('')
    const [password , setPassword] = useState('')
    const[firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')

    registerUser = async (email ,password,firstName ,lastName) =>  {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url :'https://nativeauth11.firebaseapp.com',
            })
            .then(()=>{
                alert('Verification email sent')
            }).catch((error)=>{
               alert(error.message)
            })
            .then(() => {
                firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    firstName,
                    lastName,
                    email
                })
            })
            .catch((error)=>{
                alert(error.message)
            })
        })
        .catch((error=>{
            alert(error.message)
        }))
    }
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold' , fontSize:23}}
      >Registration Here !!</Text>
      <View style={{marginTop:40}}>
        <TextInput style={styles.TextInput} 
        placeholder='First name' 
        onChangeText={(firstName) => setFirstName(firstName)}
        autoCorrect={false}
        />
        <TextInput 
        style={styles.TextInput} 
        placeholder='last name' 
        onChangeText={(lastName) => setLastName(lastName)}
        autoCorrect={false}
        />
        <TextInput 
        style={styles.TextInput} 
        placeholder='email' 
        onChangeText={(email) => setEmail(email)}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        />
        <TextInput 
        style={styles.TextInput} 
        placeholder='password' 
        onChangeText={(password) => setPassword(password)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        />
        <TouchableOpacity 
        onPress={()=>{registerUser(email,password,firstName ,lastName)}}
        style={styles.button}
        >
          <Text style={{fontSize:22, fontWeight:'bold',alignItems:'center'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Registration;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:20
    }
    ,
    TextInput:{
        paddingTop:10,
        paddingBottom:10,
        width:400,
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:'black',
        textAlign:'center',
        marginBottom:10,
    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#026efd',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginHorizontal:75
    },
    text:{
      color:'grey'
    }
})