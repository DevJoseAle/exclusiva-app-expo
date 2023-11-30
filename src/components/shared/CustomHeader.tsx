import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomHeader = () => {
  const {top}= useSafeAreaInsets()
  useEffect(() => {
    console.log('Desde Header -----',top)

  }, [])
  

  const navigation = useNavigation()
  return (
    <SafeAreaView style={{marginTop: top, ...styles.safeArea}}>
      <View style={styles.container}>
          <View style={styles.logoContainer}>
            <View  >
              <Image
                resizeMode='contain'
                style={styles.logo}
                source={require('../../../assets/ojo.png')}
                />
            </View>
            <View  >
              <Image
                resizeMode='contain'
                style={{width: 230, height: 230}}
                source={require('../../../assets/palabra.png')}
                />
            </View>
          </View>
        </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor:'#fff',

  },
  container:{
    backgroundColor:'#000000',
    width: '100%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    display:'flex'
  },
  logo:{
    width: 60,
    height: 60,
  },
  logoContainer:{
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap:10,
    alignItems: 'center',
    height: '90%',
  },
  iconsContainer:{
    flexDirection: 'row',
    marginRight: 10,
    backgroundColor: '#FFF9E6',
    borderRadius: 40,
    width: 29,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInputContainer:{
    width: '65%',
    flexDirection:'row',
    height:35,
    borderRadius: 30,
    paddingHorizontal:10,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent:'space-between'

  },
  textInputStyle:{
    color:'#fff',
    backgroundColor:'#fff',
    width: '90%',
    height: '100%'
  },
  iconSearch:{
    borderRadius: 40,
  },
  iconSearchContainer:{
    borderRadius: 40,
    width:19,
    height: 19,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#E6E6E6'
  }
})
export default CustomHeader;