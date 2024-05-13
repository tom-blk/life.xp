import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
//@ts-ignore 
import { Timer } from 'react-native-stopwatch-timer'
import { RouteParamsList } from '../../types/RouteParamsList';

type SkillTimerRouteProps = RouteProp<RouteParamsList, 'Skill Timer'>

const { width } = Dimensions.get('window');

const SkillLevelTimer = ({ route }: {route: SkillTimerRouteProps} ) => {
    const { secondsToLevelUp } = route.params;
  
    const [timerStart, setTimerStart] = useState(false);
    const [timerReset, setTimerReset] = useState(false);
  
    const handleTimerComplete = () => {
      console.log("Timer has completed!")
    }

    return (
        <View style={styles.view}>
            <Pressable style={styles.pressable} onPress={() => setTimerStart(!timerStart)}>
                <Timer 
                    totalDuration={secondsToLevelUp*60*60}  
                    start={timerStart}
                    reset={timerReset}
                    options={timerStyles}
                    handleFinish={handleTimerComplete}
                    /*  getTime={this.getFormattedTime} */ />
                <Text style={styles.text}>Train</Text>
            </Pressable>
        </View>
    )
}

const timerStyles = {
    container:{
        width: width * 0.5,
    },
    text:{
        fontSize: 60,
        color: 'white',
    }
};

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    pressable: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        height: width * 0.8,
        width: width * 0.8,
        borderRadius: width * 0.8 / 2,
        aspectRatio: 1,
        padding: 10,
    },
    text: {
        fontSize: 40,
        color: 'white',
    }
})

export default SkillLevelTimer
