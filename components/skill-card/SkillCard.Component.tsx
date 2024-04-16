import React from 'react'
import { Button, Pressable, StyleSheet, Text} from 'react-native';
import { Skill } from '../../types/Skill';
import { useNavigation } from '@react-navigation/native';

const SkillCard = (props: Skill) => {
    const {skillName, level, secondsToNextLevel, secondsToLevelUp} = props;
    const navigation = useNavigation();

    const navigateToSkill = () => {

    }

    const navigateToTrainSkill = () => {

    }

    return (
        <Pressable style={styles.card} onPress={e =>navigateToSkill()}>
            <Text>{skillName}</Text>
            <Text>{level}</Text>
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
        borderRadius: 5
    }
})

export default SkillCard