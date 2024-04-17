import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native';
//@ts-ignore 
import { Timer } from 'react-native-stopwatch-timer'

interface Props {
    skillName: string;
    skillLevel: number;
    secondsToLevelUp: number;
}

const SkillLevelTimer = (props: Props) => {
  
    const [timerStart, setTimerStart] = useState(false);
    const [timerReset, setTimerReset] = useState(false);
  
    const handleTimerComplete = () => {
      console.log("Timer has completed!")
    }

    return (
        <Pressable onPress={() => setTimerStart(!timerStart)}>
            <Timer totalDuration={props.secondsToLevelUp} msecs start={timerStart}
                reset={timerReset}
                options={styles.options}
                handleFinish={handleTimerComplete}
               /*  getTime={this.getFormattedTime} */ />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    options: {
        backgroundColor: 'green',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5
    }
})

export default SkillLevelTimer