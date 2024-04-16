import React from 'react'
import { Text, View } from 'react-native';
import { Skill } from '../../types/Skill';

const SkillCard = (props: Skill) => {
    const {skillName, level, secondsToNextLevel, secondsToLevelUp} = props;

    return (
        <View>
            <Text>{skillName}</Text>
            <Text>{level}</Text>
            <Text>{secondsToLevelUp}</Text>
            <Text>{secondsToNextLevel}</Text>
        </View>
    )
}

export default SkillCard