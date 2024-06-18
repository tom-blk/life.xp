import React, { useState } from 'react'
import * as FS from 'expo-file-system';
import { Button, TextInput, View, Text} from 'react-native'
import { Skill, SkillImportance, UserInputSkill, UserInputSkillA } from "../../../types/Skill";
import { LevelUpMetric } from '../../../types/Skill';
import GoalInput from './goal-input/GoalInput.Component';
import LevelUpMetricPicker from './level-up-metric-picker/LevelUpMetricPicker.Component';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { checkIfUserInputIsNumber } from '../../../utils/sanitizing';
import { addSkill } from '../../../utils/add-skill'; 


const AddSkill = () => {

    const filePath = FS.documentDirectory + '/skill-list.json';

    const skillDataTemplateTime: UserInputSkill = {
        skillName: "",
        skillLevel: 0,
        secondsToLevelUp: "",
        secondsToNextLevel: 0,
        levelUpMetric: "time",
        importance: 1,
        category: ""
    }

    const skillDataTemplateGoal: UserInputSkill = {
        skillName: "",
        skillLevel: 0,
        goals: [],
        levelUpMetric: "goal",
        importance: 1,
        category: ""
    }
    
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const [skillData, setSkillData] = useState<UserInputSkill>(skillDataTemplateTime);
    const [importanceWasSelected, setImportanceWasSelected] = useState<boolean>(false);

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

    const handleSubmit = () => {
        if(!importanceWasSelected)return
        //Add error handling
            if(skillData.levelUpMetric === "time"){
                if(checkIfUserInputIsNumber(skillData.secondsToLevelUp)){
                    addSkill(
                        {...skillData, secondsToLevelUp: parseInt(skillData.secondsToLevelUp)},
                        filePath
                    );
                } else {
                    return
                    //Add Error handling here
                }
            } else {
                addSkill(skillData, filePath);
            }
    }

    return (
        <View>
            <Text>Add Skill</Text>

            <TextInput 
                value={skillData.skillName} 
                placeholder={"Enter Skill Name"} 
                onChangeText={(userInput) => setSkillData({...skillData, skillName: userInput})}
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
                    onChangeText={(userInput) => setSkillData({...skillData, secondsToLevelUp:userInput})}
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
            
            <Button title='Add' onPress={() => handleSubmit()}/>            
        </View> 
    )
}

export default AddSkill
