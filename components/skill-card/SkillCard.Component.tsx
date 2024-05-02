import React from 'react'
import { Button, Pressable, StyleSheet, Text} from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Skill } from '../../types/Skill';

const SkillCard = (props: Skill) => {
    const {skillName, skillLevel, levelUpMethod} = props;
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToSkill = () => {
        navigation.navigate("Skill Page", props) 
    }

    const navigateToTrainSkill = () => {
        if(levelUpMethod === 'time'){
            navigation.navigate("Skill Timer", props) 
        }else{
            navigation.navigate("Skill Checklist", props);
        }
    }

    return (
        <Pressable style={styles.card} onPress={e =>navigateToSkill()}>
            <Text>{skillName}</Text>
            <Text>{skillLevel}</Text>
            {levelUpMethod === 'time' ? <Text>Time</Text> : <Text>Goal</Text>}
            {levelUpMethod === 'time' ? <Text>{props.secondsToLevelUp}</Text> : <Text>{props.goals.join(', ')}</Text>}
            <Button title="Train" onPress={e => navigateToTrainSkill()}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'grey',
    }
})

export default SkillCard
