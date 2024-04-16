import React, { useState } from 'react'
import * as FS from 'expo-file-system';
import { Button, TextInput, View, Text} from 'react-native'
import { Skill } from "../../../types/Skill";

const AddSkill = () => {

    const filePath = FS.documentDirectory + '/skill-list.json';

    const skillDataTemplate: Skill = {
        skillName: "",
        secondsToLevelUp: 0,
        secondsToNextLevel: 0,
        importance: 1,
        level: 0
    }

    const [skillData, setSkillData] = useState<Skill>(skillDataTemplate);

    const addSkill = async () => {
        const fileInfo = await FS.getInfoAsync(filePath)
        if(fileInfo.exists){
            const rawData = await FS.readAsStringAsync(filePath, { encoding: FS.EncodingType.UTF8 })
            let skillList = JSON.parse(rawData);
            skillList.push(skillData);
            await FS.writeAsStringAsync(filePath, JSON.stringify(skillList), { encoding: FS.EncodingType.UTF8 })
                .then(() => console.log("File Written"))
        } else {
            await FS.writeAsStringAsync(filePath, JSON.stringify([skillData]), { encoding: FS.EncodingType.UTF8 })
                .then(() => console.log("File Written"))
        }
    }

    return (
        <View>
            <Text>Add Skill</Text>
            <TextInput placeholder={"Enter Skill Name"} onChangeText={(text) => setSkillData({...skillData, skillName: text})}/>
            <TextInput placeholder={"Enter Time Spent to level up"} onChangeText={(text) => setSkillData({...skillData, secondsToLevelUp: parseInt(text)})}/>
            <Text>Select Skill Importance</Text>
            <View>
                <Button title={"1"} onPress={() => setSkillData({...skillData, importance: 1})} />
                <Button title={"2"} onPress={() => setSkillData({...skillData, importance: 2})} />
                <Button title={"3"} onPress={() => setSkillData({...skillData, importance: 3})} />
            </View>
            <Button title='Add' onPress={() => addSkill()}/>            
        </View> 
    )
}

export default AddSkill