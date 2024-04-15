import React from 'react'
import { Text } from 'react-native';
import { Skill } from '../../types/Skill';

const SkillCard = (props: Skill) => {
    const {skillName, level, secondsToNextLevel, secondsToLevelUp} = props;

    return (
        <div>
            <Text>{skillName}</Text>
            <Text>{level}</Text>
            <Text>{secondsToLevelUp}</Text>
            <Text>{secondsToNextLevel}</Text>
        </div>
    )
}

export default SkillCard