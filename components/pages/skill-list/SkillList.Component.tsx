import React, { useEffect, useState } from 'react'
import RNFS from 'react-native-fs';
import { View, Text } from 'react-native'
import SkillCard from '../../skill-card/SkillCard.Component';
import { Skill } from '../../../types/Skill';

const SkillList = () => {

  const filePath = RNFS.DocumentDirectoryPath + '/skill-list.json';

  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    RNFS.exists(filePath)
      .then((exists) => {
        RNFS.readFile(filePath, 'utf8')
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
              timeToLevelUp={skill.timeToLevelUp}
              importance={skill.importance}
            /> 
          )
        })
      }
    </View>
  )
}

export default SkillList