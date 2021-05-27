import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Publish = () => {
    return (
        <View style={styles.container}>
            <Text>Hello I pusblish the apps</Text>
        </View>
    )
}


const styles = StyleSheet.create({container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}})

export default Publish
