import { StyleSheet, Image,Text,TextInput, useColorScheme } from 'react-native';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Inputtextname,Colors,Buttoncolor } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { TouchableOpacity } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import React,{ useState } from 'react';
import Checkbox from 'expo-checkbox';
import Button from '@/components/buttons';
import { Link,Stack, useRouter } from 'expo-router';
import axiosInstance from '@/constants/axiosInstance';


export default function Resister() {
  const router = useRouter();  

  const textColor = useThemeColor({ light: '#11181C', dark: '#ECEDEE' }, 'text');
  const checkcolor = useThemeColor({ light: Buttoncolor.bblue, dark: Buttoncolor.bgreen }, 'text');

  const [isPasswordShown, setIsPasswordShown] = useState(true)
  const [isChecked, setisChecked] = useState(false)
  const [fullName, setFullNameValue] = useState('');
  const [userName, setuserNameValue] = useState('');
  const [email, setemailValue] = useState('');
  const [password, setPasswordValue] = useState('');
  const [loadingValue, setloadingValue ] = useState(false);
  const [error, setError] = useState('')

  const [formValue, setFormValue] = useState({
   fullName:'',
  userName: '',
    email: '',
    password: ''
  });
  

  const validateForm = () => {

    const { fullName,userName, email, password,  } = formValue;
  
    if (!fullName || !userName || !email || !password) {
      alert('All fields are required');
      return false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return false;
    }
  
 
    return true;
  };

  // const [formValue, setFormValue] = useState({
  //   username:'',
  // });


//   const registerSubmitHandler = async () => {
//   if (!fullName || !userName || !email|| !password){
//     console.log('All fields are required')
//     return
//   }

//   setError('')
//   setloadingValue(true)
 

//   try {
//   const response = await axios.post('/register', {
//     fullName,
//     userName,
//     email,
//     password
//   })
//   if(response.status === 201){
//   console.log('Registered Successfully')
//   router.push('/login')
//   }
// } catch(error: any){
//   if (error.response && error.response.data) {
//     setError(error.response.data.errorValue)
//   } else {
//     setError('an unexpected error occured')
//   }
//   }finally{
//     setloadingValue(false)
//   }
//   }
  

    // axios.post('http://192.168.1.100:5000/register', {data: formValue}).then(res => {
    //   if (res.status === 201) 
    //     router.push('/') 
    // })

    

    const formSubmitHandler = async() => {
      console.log('hi', formValue)
      // if (validateForm()) {
      try {
        await axiosInstance.post('/register', { data: formValue })
          .then(res => {
               console.log('hi2')
            console.log({
              res
            })
            if (res.status === 201) {
              router.push('/login'); 
            }
          })
          .catch(error => {
            console.error('There was an error!', error);
           
          });
        }
        catch(er) {
          console.log({er})
        }
      // }
    };



  return (
    

    <ParallaxScrollView
      headerBackgroundColor={{ light: '#2C3E50', dark: '#353636' }}
      headerTitle="Welcome!"
      headerSubtitle='sign up to continue'>
      {/* {error && <Text> {error} </Text>} */}
  
      <ThemedView style={{marginBottom:-7}}>
        <Text style={{
          color:textColor,
          fontSize:16,
          fontWeight:400,
          marginVertical:8,
        }}>Full Name</Text>

        <ThemedView style={{
          width:"100%",
          height:48,
          borderColor:Inputtextname.coolgray,
          borderWidth:1,
          borderRadius:8,
          alignItems:"center",
          justifyContent:"center",
          paddingLeft:22          
        }}>
          
          <TextInput
          // value={fullName}
          // onChangeText={setFullNameValue}
          value={formValue.fullName}
          onChangeText={text => setFormValue({ ...formValue, fullName: text })}
           placeholder='Enter your full name' 
          placeholderTextColor={Inputtextname.coolgray}
          keyboardType='email-address'
          style={{
            width:"100%",
            color: textColor,  
          }}
          />
        </ThemedView>
      </ThemedView>


      <ThemedView style={{marginBottom:-7}}>
        <Text style={{
          color:textColor,
          fontSize:16,
          fontWeight:400,
          marginVertical:8,
        }}>User Name </Text>

        <ThemedView style={{
          width:"100%",
          height:48,
          borderColor:Inputtextname.coolgray,
          borderWidth:1,
          borderRadius:8,
          alignItems:"center",
          justifyContent:"center",
          paddingLeft:22          
        }}>
          
          <TextInput 
          // value={userName}
          // onChangeText={setuserNameValue}
          value={formValue.userName}
  onChangeText={text => setFormValue({ ...formValue, userName: text })}
          placeholder='Enter user name' 
          placeholderTextColor={Inputtextname.coolgray}
          keyboardType='email-address'

          style={{
            width:"100%",
            color: textColor,  
          }}
          />
        </ThemedView>
      </ThemedView>

      <ThemedView style={{marginBottom:-7}}>
        <Text style={{
          color:textColor,
          fontSize:16,
          fontWeight:400,
          marginVertical:8,
        }}>Email Address</Text>

        <ThemedView style={{
          width:"100%",
          height:48,
          borderColor:Inputtextname.coolgray,
          borderWidth:1,
          borderRadius:8,
          alignItems:"center",
          justifyContent:"center",
          paddingLeft:22          
        }}>
          
          <TextInput 
          // value={email}
          // onChangeText={setemailValue}
          value={formValue.email}
  onChangeText={text => setFormValue({ ...formValue, email: text })}
          placeholder='Enter your Email address' 
          placeholderTextColor={Inputtextname.coolgray}
          keyboardType='email-address'
          style={{
            width:"100%",
            color: textColor}}
          // style={{ borderColor: error.email ? 'red' : 'gray', borderWidth: 1 }} // Change border color based on error
          />
          {/* {error.email && <Text style={{ color: 'red' }}>{error.email}</Text>}  */}
          
        </ThemedView>
      </ThemedView>


      <ThemedView style={{marginBottom:20}}>
        <Text style={{
          color:textColor,
          fontSize:16,
          fontWeight:400,
          marginVertical:8,
        }}>Password</Text>

        <ThemedView style={{
          width:"100%",
          height:48,
          borderColor:Inputtextname.coolgray,
          borderWidth:1,
          borderRadius:8,
          alignItems:"center",
          justifyContent:"center",
          paddingLeft:22          
        }}>
          
          <TextInput 
          // value={password}
          // onChangeText={setPasswordValue}
          value={formValue.password}
          onChangeText={text => setFormValue({ ...formValue, password: text })}
          placeholder='Enter password' 
          placeholderTextColor={Inputtextname.coolgray}
          secureTextEntry={isPasswordShown}   
          // errorMessage={error ? error : ''}
   
          style={{
            width:"100%",
            color: textColor,  
             }}
          />

          <TouchableOpacity
          onPress={()=>setIsPasswordShown(!isPasswordShown)}
          style={{
            right:12,
            position: "absolute",
          }}
          >
            {
              isPasswordShown==true ? (
                <Ionicons name="eye-off" size={24} color={textColor}/>

              ):(
                <Ionicons name="eye" size={24} color={textColor}/>
              )
            }
          </TouchableOpacity>


        </ThemedView>
      </ThemedView>
      
  

      <ThemedView style={{
        flexDirection:'row',
        marginVertical:6
      }}>

      <Checkbox
        style={{marginRight:8}}
        value={isChecked}
        onValueChange={setisChecked}
        color={isChecked ? checkcolor : undefined}>
      </Checkbox>

      <Text style={{
          color:textColor,
          }}>I Accept the </Text>      
          <Text style={{
            fontWeight:800,
            color:textColor,
            }}>Terms of use</Text> 
            <Text style={{
          color:textColor,
          }}> & </Text> 
          <Text style={{
          color:textColor,
          fontWeight:800,
          }}>Privacy Policy.</Text>

      </ThemedView>

      <Button
       title="SIGN UP"
       onPress={formSubmitHandler} 
         filled     
       style={{
       marginTop:18,
       marginBottom:4,

      }}>

      </Button>

      <ThemedView style={{ flexDirection:'row', alignItems:'center', marginVertical:20,}}>
        <ThemedView 
        style={{ 
          flex:1,
          height:1,
          backgroundColor: Inputtextname.coolgray,
          marginHorizontal:10,
          }}/>

        <Text style={{fontSize:14 , color:Inputtextname.coolgray}}>Or Sign Up with </Text>
        <ThemedView 
        style={{ 
          flex:1,
          height:1,
          backgroundColor: Inputtextname.coolgray,
          marginHorizontal:10,
          }}/>
      </ThemedView>

      <ThemedView style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <TouchableOpacity
        onPress={()=> console.log("pressed")}
        style={{
          alignContent:'center',
          alignItems:'center',
          flexDirection:'row',
          height:52,
          marginRight:4,
          borderRadius:10,
          //paddingHorizontal: 10,


        }}
        >
                <Image 
                source={require('@/assets/images/google.png')} 
                style={{ 
                  height:36,
                  width:36,
                  alignSelf:'center',
                  marginRight:8,

                }} />

                <Text  style={{ 
                color:textColor,
                  alignItems:'center',
                  }}>Google </Text>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={{
          flexDirection:'row',
          justifyContent:"center",
          marginVertical:22,

      }}>
          <Text style={{
            fontSize:16,
            color: textColor,
          }}>Already have an Account?</Text>
                <Link style={{color:textColor,fontSize:16,fontWeight:800,textDecorationLine: 'underline'}}href="/login"> Sign In</Link>

      </ThemedView>






    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

