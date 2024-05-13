import React, { useEffect, useState } from 'react'
import * as FS from 'expo-file-system';
import { StyleSheet, Text, View } from 'react-native'
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
    <View style={styles.list}>
      {
        skills.length < 1 
        ?
        <Text>No Skills here...</Text>
        :
        skills.map((skill, index) => {
          return (
            <SkillCard 
              key={index}
              {...skill}
            /> 
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 10,
    margin: 20
  }
})

export default SkillList
