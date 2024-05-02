import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-svg'

const SkillCheckList = () => {
  return (
    <View style={styles.card}>
        <Text>Check the boxes to level up</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'grey',
    }
})


export default SkillCheckList
