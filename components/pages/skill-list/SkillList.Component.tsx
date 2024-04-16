import React, { useEffect, useState } from 'react'
import * as FS from 'expo-file-system';
import { Text, View } from 'react-native'
import SkillCard from '../../skill-card/SkillCard.Component';
import { Skill } from '../../../types/Skill';

const SkillList = () => {

  const filePath = FS.documentDirectory + '/skill-list.json';

  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const readData = async () => {
      const fileInfo = await FS.getInfoAsync(filePath)
      if(fileInfo.exists){
        const rawData = await FS.readAsStringAsync(filePath, { encoding: FS.EncodingType.UTF8 })
        setSkills(JSON.parse(rawData));
      }
    }
    readData();
  }, [skills])

  return (
    <View>
      
      {
        skills.length < 1 
        ?
        <Text>No Skills here...</Text>
        :
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