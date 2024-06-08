import { StyleSheet, Image,Text,TextInput, useColorScheme } from 'react-native';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Inputtextname,Colors,Buttoncolor } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { TouchableOpacity } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import Button from '@/components/buttons';
import { Link,Stack, useRouter } from 'expo-router';


export default function TabTwoScreen() {
  const router = useRouter();  

  const textColor = useThemeColor({ light: '#11181C', dark: '#ECEDEE' }, 'text');
  const checkcolor = useThemeColor({ light: Buttoncolor.bblue, dark: Buttoncolor.bgreen }, 'text');

  const [isPasswordShown, setIsPasswordShown] = useState(true)
  const [isChecked, setisChecked] = useState(false)

  return (
    

    <ParallaxScrollView
      headerBackgroundColor={{ light: '#2C3E50', dark: '#353636' }}
      headerTitle="Welcome back,"
      headerSubtitle='sign in to continue'>
  
    
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
          
          <TextInput placeholder='Enter your Email address' 
          placeholderTextColor={Inputtextname.coolgray}
          keyboardType='email-address'
          style={{
            width:"100%",
            color: textColor,  
          }}
          />
        </ThemedView>
      </ThemedView>


      <ThemedView style={{marginBottom:1}}>
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
          
          <TextInput placeholder='Enter password' 
          placeholderTextColor={Inputtextname.coolgray}
          secureTextEntry={isPasswordShown}      
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
      
      <ThemedView style={{marginBottom:1}}>
        <Text style={{
          color:textColor,
          fontSize:16,
          fontWeight:600,
          marginVertical:1,
          textAlign:"right",
          paddingRight:8
        }}>Forgot Password?</Text>
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
          }}>Remember me and keep me logged in </Text>      
                </ThemedView>

      <Button
       title="SIGN IN"
       onPress={() => router.push('/login')} 
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
          }}>Don't have an Account?</Text>
                <Link style={{color:textColor,fontSize:16,fontWeight:800,textDecorationLine: 'underline'}}href="/register"> SIGN UP</Link>

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
