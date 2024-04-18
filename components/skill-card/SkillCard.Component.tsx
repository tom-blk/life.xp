import React from 'react'
import { Button, Pressable, StyleSheet, Text} from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Skill } from '../../types/Skill';

const SkillCard = (props: Skill) => {
    const {skillName, skillLevel, secondsToNextLevel, secondsToLevelUp, levelUpMethod, goals} = props;
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigateToSkill = () => {
        navigation.navigate("Skill Page", {skillName, skillLevel, secondsToNextLevel, secondsToLevelUp});
    }

    const navigateToTrainSkill = () => {
        if(levelUpMethod === 'time'){
            navigation.navigate("Skill Timer", { skillName, skillLevel, secondsToLevelUp });
        }else{
            navigation.navigate("Skill Checklist", { skillName, skillLevel, goals});
        }
    }

    return (
        <Pressable style={styles.card} onPress={e =>navigateToSkill()}>
            <Text>{skillName}</Text>
            <Text>{skillLevel}</Text>
            <Text>{secondsToLevelUp}</Text>
            <Text>{secondsToNextLevel}</Text>
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