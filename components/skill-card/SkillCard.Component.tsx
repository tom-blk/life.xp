import React from 'react'
import { Text } from 'react-native';
import { Skill } from '../../types/Skill';

const SkillCard = (props: Skill) => {
    const {skillName, level, timeToLevelUp} = props;

    return (
        <div>
            <Text>{skillName}</Text>
            <Text>{level}</Text>
            <Text>{timeToLevelUp}</Text>
        </div>
    )
}

export default SkillCard