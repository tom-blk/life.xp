import React, { useState } from 'react'
import * as FS from 'expo-file-system';
import { Button, TextInput, View, Text} from 'react-native'
import { Skill } from "../../../types/Skill";
import { LevelUpMetric } from '../../../types/Skill';
import GoalInput from './goal-input/GoalInput.Component';
import LevelUpMetricPicker from './level-up-metric-picker/LevelUpMetricPicker.Component';


const AddSkill = () => {

    const filePath = FS.documentDirectory + '/skill-list.json';

    const skillDataTemplateTime: Skill = {
        skillName: "",
        skillLevel: 0,
        secondsToLevelUp: 0,
        secondsToNextLevel: 0,
        levelUpMetric: "time",
        importance: 1,
        category: ""
    }

    const skillDataTemplateGoal: Skill = {
        skillName: "",
        skillLevel: 0,
        goals: [],
        levelUpMetric: "goal",
        importance: 1,
        category: ""
    }

    const [skillData, setSkillData] = useState<Skill>(skillDataTemplateTime);

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

    const handleAddGoal = (goal: string) => {
        if(skillData.levelUpMetric === "time") return
        setSkillData({
            ...skillData, 
            goals: [...skillData.goals, goal]
        })
    }

    const handleRemoveGoal = (goal: string) => {
        if(skillData.levelUpMetric === "time") return
        setSkillData({
            ...skillData,
            goals: skillData.goals.filter((item: string) => item !== goal)
        })
    }

    const handleLevelUpMetricChange = (levelUpMetric: LevelUpMetric) => {
        if(levelUpMetric === "time") {
            setSkillData(skillDataTemplateTime)
        } else {
            setSkillData(skillDataTemplateGoal)
        }
    }
    
    return (
        <View>
            <Text>Add Skill</Text>
            <TextInput placeholder={"Enter Skill Name"} onChangeText={(text) => setSkillData({...skillData, skillName: text})}/>
            <Text>Do you want to progress by spending time to practice, or by reaching specific goals?</Text>
            <LevelUpMetricPicker changeLevelUpMetric={handleLevelUpMetricChange}/>
            {
                skillData.levelUpMetric === 'time' 
                ? <TextInput placeholder={"Enter Time Spent to level up"} onChangeText={(text) => setSkillData({...skillData, secondsToLevelUp: parseInt(text)})}/>
                : <GoalInput goals={skillData.goals} addGoal={handleAddGoal} removeGoal={handleRemoveGoal}/>
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
