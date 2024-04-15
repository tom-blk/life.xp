import React, { useEffect, useState } from 'react'
import * as FS from 'expo-file-system';
import { View } from 'react-native'
import SkillCard from '../../skill-card/SkillCard.Component';
import { Skill } from '../../../types/Skill';

const SkillList = () => {

  const filePath = FS.documentDirectory + '/skill-list.json';

  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    FS.getInfoAsync(filePath)
      .then((exists) => {
        FS.readAsStringAsync(filePath, { encoding: FS.EncodingType.UTF8 })
          .then((res) => {
            setSkills(JSON.parse(res));
          })
      }) 
  }, [skills])

  return (
    <View>
      {
        skills.map((skill, index) => {
          return (
            <SkillCard 
              key={index}
              skillName={skill.skillName}
              level={skill.level}
              secondsToLevelUp={skill.secondsToLevelUp}
              secondsToNextLevel={skill.secondsToNextLevel}
              importance={skill.importance}
            /> 
          )
        })
      }
    </View>
  )
}

export default SkillList