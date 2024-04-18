import React, { useState } from 'react'
import * as FS from 'expo-file-system';
import { Button, TextInput, View, Text} from 'react-native'
import { Skill } from "../../../types/Skill";
import { Picker } from '@react-native-picker/picker';

const AddSkill = () => {

    const filePath = FS.documentDirectory + '/skill-list.json';

    const skillDataTemplateA: Skill = {
        skillName: "",
        skillLevel: 0,
        secondsToLevelUp: 0,
        secondsToNextLevel: 0,
        levelUpMethod: 'time',
        importance: 1,
        category: ""
    }

    const skillDataTemplateB: Skill = {
        skillName: "",
        levelUpMethod: 'goal',
        goals: [],
        importance: 1,
        skillLevel: 0,
        category: ""
    }

    const [skillData, setSkillData] = useState<Skill>(skillDataTemplateA);

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

    const SkillPicker = () => {
        const returnSkillTemplate = () => {
            if(skillData.levelUpMethod === 'time'){
                return skillDataTemplateA;
            }else{
                return skillDataTemplateB;
            }
        }

        return (
            <Picker
                selectedValue={skillData}
                onValueChange={() => setSkillData(returnSkillTemplate())}
            >
                <Picker.Item label={"Time"} value={"time"}/>
                <Picker.Item label={"Goal"} value={"goal"}/>
            </Picker>
        )
    }

    const GoalInput = () => {
        return(
            <View>
                <Text>Enter 1 - 3 goals that need to be reached to level up</Text>
                <TextInput placeholder={"Enter Goal"} onChangeText={(text) => setSkillData({...skillData, goals: [...skillData.goals, text]})}/>
                <Button title={"Add Goal"} onPress={() => setSkillData({...skillData, goals: [...skillData.goals, ""]})}/>
            </View>
        )
    }

    return (
        <View>
            <Text>Add Skill</Text>
            <TextInput placeholder={"Enter Skill Name"} onChangeText={(text) => setSkillData({...skillData, skillName: text})}/>
            <Text>Do you want to progress by spending time to practice, or by reaching specific goals?</Text>
            <SkillPicker/>
            {
                skillData.levelUpMethod === 'time' 
                ? <TextInput placeholder={"Enter Time Spent to level up"} onChangeText={(text) => setSkillData({...skillData, secondsToLevelUp: parseInt(text)})}/>
                : <GoalInput/>
            }
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