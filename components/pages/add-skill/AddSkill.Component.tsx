import React, { useState } from 'react'
import * as FS from 'expo-file-system';
import { Button, TextInput, View, Text} from 'react-native'
import { Skill, SkillImportance } from "../../../types/Skill";
import { LevelUpMetric } from '../../../types/Skill';
import GoalInput from './goal-input/GoalInput.Component';
import LevelUpMetricPicker from './level-up-metric-picker/LevelUpMetricPicker.Component';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface SkillTemplateA {
    skillName: string;
    skillLevel: number;
    secondsToLevelUp: string;
    secondsToNextLevel: number;
    levelUpMetric: LevelUpMetric;
    importance: SkillImportance;
    category: string;
}

const AddSkill = () => {

    const filePath = FS.documentDirectory + '/skill-list.json';

    const skillDataTemplateTime: SkillTemplateA = {
        skillName: "",
        skillLevel: 0,
        secondsToLevelUp: "",
        secondsToNextLevel: 0,
        levelUpMetric: "time",
        importance: 1,
        category: ""
    }

    const skillDataTemplateGoal: SkillB = {
        skillName: "",
        skillLevel: 0,
        goals: [],
        levelUpMetric: "goal",
        importance: 1,
        category: ""
    }
    
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const [skillData, setSkillData] = useState<Skill>(skillDataTemplateTime);
    const [importanceWasSelected, setImportanceWasSelected] = useState<boolean>(false);

    const addSkill = async () => {
        if(!skillData.skillName || skillData.skillName === "" || skillData.skillName === " ") return

        if(!importanceWasSelected) return

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
        setSkillData(skillDataTemplateTime);
        navigation.navigate("Skill Page") 
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

    const handleImportanceSelection = (importance: SkillImportance) => {
        setImportanceWasSelected(true);
        setSkillData({...skillData, importance: importance});
    }

    const checkUserInputForNumber = (userInput: string) => {
        if(userInput === "") return false;
        
        const regexIntCheck = /^-?\d+$/;
        if (!regexIntCheck.test(userInput)) return false;

        const parsedNumber = parseInt(userInput);
        
        return Number.isInteger(parsedNumber);
    }

    const handleSetSecondsToLevelUp = (userInput: string) => {
        if(skillData.levelUpMetric === "goal") return

        const trimmedUserInput = userInput.trim();

        if(checkUserInputForNumber(trimmedUserInput)){
            setSkillData({...skillData, secondsToLevelUp: parseInt(trimmedUserInput)})
        }else{
            setSkillData({...skillData, secondsToLevelUp: 0})
        }
    }
    
    return (
        <View>
            <Text>Add Skill</Text>

            <TextInput 
                value={skillData.skillName} 
                placeholder={"Enter Skill Name"} 
                onChangeText={(userInput) => setSkillData({...skillData, skillName: userInput.trim()})}
            />
            
            <Text>Do you want to progress by spending time to practice, or by reaching specific goals?</Text>
            
            <LevelUpMetricPicker changeLevelUpMetric={handleLevelUpMetricChange}/>
            
            {
                skillData.levelUpMetric === 'time' 
                ? 
                <TextInput 
                    value={skillData.secondsToLevelUp} 
                    keyboardType="numeric"
                    placeholder={"Enter Time Spent to level up"} 
                    onChangeText={(userInput) => handleSetSecondsToLevelUp(userInput)}
                />
                : 
                <GoalInput 
                    goals={skillData.goals} 
                    addGoal={handleAddGoal} 
                    removeGoal={handleRemoveGoal}
                />
            
            }
            
            <Text>Select Skill Importance</Text>
            
            <View>
                <Button title={"1"} onPress={() => handleImportanceSelection(1)} />
                <Button title={"2"} onPress={() => handleImportanceSelection(2)} />
                <Button title={"3"} onPress={() => handleImportanceSelection(3)} />
            
            </View>
            
            <Button title='Add' onPress={() => addSkill()}/>            
        </View> 
    )
}

export default AddSkill
