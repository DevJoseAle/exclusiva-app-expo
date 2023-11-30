import { View, FlatList, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useProducts } from '../api/hooks/useProducts'
import FavoriteProductCard from '../components/shared/FavoriteProductCard';
import CustomSpinner from '../components/shared/CustomSpinner';
import { useCartStore } from '../stores/useCart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import totalToPay from '../components/shared/TotalToPay';
import { useNavigation } from '@react-navigation/native';




const CartScreen = () => {

  const cart = useCartStore(state=> state.cart) 
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  if(loading){
    return ( <CustomSpinner /> )
  }

  return (
  
      <View style={{
          flex:1, 
          backgroundColor:'white', 
          display:'flex', 
          alignItems:'center'
          
        }}>
          <FlatList 
            data={cart}
            renderItem={({item: product}: any) => (
              <>
              
              <FavoriteProductCard product={product} inScreen='Cart' />
            
              </>
            )}
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent={()=> totalToPay()}
          />


          <TouchableOpacity
            style={styles.payButton}
            onPress={() => navigation.navigate('PaymentScreen')}
            >
            <Text style={styles.payButtonText}>Ir a Pagar</Text>
          </TouchableOpacity>
      </View>
  )
}

export default CartScreen

const styles = StyleSheet.create( {
  cardContainer:{
    display:'flex',
    flexDirection:'row',
    
    flex:1,
    width:'95%',
    height: 90,
    backgroundColor:'white',
    marginVertical: 4,
    marginHorizontal: 10,
    borderWidth:0.16,
    shadowColor:'grey',
    shadowOffset:{
        width:2,
        height:0.5,
    },
    shadowOpacity:.23,
    shadowRadius:7

  },
  textContainer:{
    display:'flex',
    alignItems:'flex-start',
    paddingHorizontal:10,
    paddingVertical: 5
  },
  textPrice:{
    display:'flex',
    alignItems:'flex-start',
    paddingHorizontal:10,
    paddingVertical: 5,
    fontWeight:'bold'
  },
  imageContainer:{
      display:'flex',
      alignItems:'center',
      paddingHorizontal:10,
      paddingVertical: 5
    
  },
  totalToPay:{
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    display:'flex',
    flexDirection:'row',
    paddingHorizontal:10,
    borderRadius:50,
    backgroundColor:'#056AC2',
    margin:'auto',
    width:'100%', 
    height:40
  },
  totalToPayText:{
    color:'white',
    fontSize:20
  },
  totalPrice:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  payButton:{
    width: '45%',
    height:'5%',
    backgroundColor: '#00ACF2',
    marginBottom: 5,
    borderRadius: 40,
    shadowColor: "#3F3F3F",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1.65,

    elevation: 6,
  },
  payButtonText:{
    color:'white',
    fontSize:20,
    textAlign:'center',
    paddingVertical: 5,
    fontWeight:'bold'
  }
})

