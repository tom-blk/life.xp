import React, { useEffect, useState } from 'react'
import * as FS from 'expo-file-system';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SkillCard from '../../skill-card/SkillCard.Component';
import { Skill } from '../../../types/Skill';
import { SkillImportanceMap } from '../../../types/ObjectShapes';

const SkillList = () => {

    const filePath = FS.documentDirectory + '/skill-list.json';

    const [skills, setSkills] = useState<SkillImportanceMap>({
        lowImportance: [],
        mediumImportance: [],
        highImportance: []
    });

    useEffect(() => {
        const readData = async () => {
            const fileInfo = await FS.getInfoAsync(filePath)
            if(fileInfo.exists){
                const rawData = await FS.readAsStringAsync(filePath, { encoding: FS.EncodingType.UTF8 })
                const parsedSkills = JSON.parse(rawData);

                const skillImportanceMap: SkillImportanceMap = {
                    lowImportance: [],
                    mediumImportance: [],
                    highImportance: []
                };

                parsedSkills.forEach((item: Skill) => {
                    switch (item.importance) {
                        case 1:
                            skillImportanceMap.lowImportance.push(item);
                            break;
                        case 2:
                            skillImportanceMap.mediumImportance.push(item);
                            break;
                        case 3:
                            skillImportanceMap.highImportance.push(item);
                            break;
                        default:
                            break;
                    }
                })

                setSkills(skillImportanceMap);
            }
        }
        readData();
    }, [skills])

    const returnSkills = (skills: Skill[]) => {
        return(
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
        )
    }

    return (
        <ScrollView style={styles.list}>
            <Text>High Importance</Text>
            {returnSkills(skills.highImportance)}
            <Text>Medium Importance</Text>
            {returnSkills(skills.mediumImportance)}
            <Text>Low Importance</Text>
            {returnSkills(skills.lowImportance)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        paddingHorizontal: 20,
        marginVertical: 20
    }
})

export default SkillList
