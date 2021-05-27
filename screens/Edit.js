import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button,withTheme } from 'react-native-paper'
import { DisplayCLips, useClips,snaks } from '../src/Clip'
import * as Crypto from 'expo-crypto';
var Buffer = require('buffer/').Buffer  // note: the trailing slash is important!
const bs58 = require('bs58')


// => 16UjcYNBG9GTK4uq2
const makesomeKrypto = async (snaks)=>{
   const digest =  await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        snaks.toString()
      );
      console.log('Digest: ', digest);
      return digest
}



const publishApp = async (snaks)=>{


    try {
    const bytes = Buffer(snaks.toString())
    const address = bs58.encode(bytes)
    console.log(address)

     let apiUrl =  `http://192.168.2.249:3000/api/publish?link=${address}`
   const serverResponse = await  fetch(apiUrl,{
        method:'GET',
    })
    const data = await serverResponse.json()
    console.log(data)
    } catch (error) {
        console.log(error.message)
        
    }

   
}



export const Edit = () => {
    // const clips = useClips()
    // console.log(clips)
    const clips = useClips()


    React.useEffect(() => {

        // document.title = `You clicked ${count} times`;
        console.log(snaks.get())
      }, [snaks]);

    return (
        <View style={styles.container}>
            <DisplayCLips data={clips} />
            <Button  mode="contained" onPress={()=>publishApp(clips)} >
                Publish
            </Button>
      </View>
    )
}


const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}})

export default withTheme(Edit)
